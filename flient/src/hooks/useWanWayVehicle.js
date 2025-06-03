import { useState, useRef, useCallback } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";

const SECRET_KEY = "0v5kt32rhdb62915wz7fflbcftfzgh4j";
const APPID = "Enquiry Gate";
const SERVICE_URL = "http://localhost:3003/api";

function generateSignature(secretKey, time) {
  const md5Key = CryptoJS.MD5(secretKey).toString(CryptoJS.enc.Hex);
  const toHash = md5Key + String(time);
  return CryptoJS.MD5(toHash).toString(CryptoJS.enc.Hex);
}

function isTokenValid() {
  const token = localStorage.getItem("accessToken");
  console.log("Checking token validity:", token);
  if (!token) return false;
  const expires = Number(localStorage.getItem("tokenExpires"));
  return token && expires && Date.now() < expires - 60000;
}

export default function useWanwayVehicles({ setMapData }) {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const pollingRef = useRef();

  const getAccessToken = useCallback(async () => {
    try {
      const time = Math.floor(Date.now() / 1000);
      const signature = generateSignature(SECRET_KEY, time);
      const payload = { appid: APPID, time, signature };
      const res = await axios.post(`${SERVICE_URL}/auth`, payload, {
        headers: { "Content-Type": "application/json" }
      });

      if (res?.data?.accessToken) {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem(
          "tokenExpires",
          Date.now() + (res.data.expiresIn || 2 * 60 * 60 * 1000)
        );
        return res.data.accessToken;
      }
      return null;
    } catch (e) {
      return null;
    }
  }, []);

  const fetchStatus = useCallback(async () => {
    setLoading(true);
    try {
      let accessToken = localStorage.getItem("accessToken");
      if (!isTokenValid()) {
        accessToken = await getAccessToken();
        
        if (!accessToken) {
          setLoading(false);
          return;
        }
      }
      // Get device list
      const devRes = await axios.get(
        `${SERVICE_URL}/device?accessToken=${accessToken}&currentPage=1&pageSize=20&needCount=true`,
        { headers: { "Content-Type": "application/json" } }
      );
      if (!devRes.data.data?.length) {
        setVehicles([]);
        setLoading(false);
        return;
      }
      const imeis = devRes.data.data.map((d) => d.imei).join(",");
      const statusRes = await axios.get(
        `${SERVICE_URL}/device/status?accessToken=${accessToken}&imei=${imeis}&lang=en`,
        { headers: { "Content-Type": "application/json" } }
      );
      setVehicles(statusRes.data.data || []);
      if (statusRes.data.data && statusRes.data.data.length > 0 && setMapData) {
        setMapData({
          lat: statusRes.data.data[0].lat || 0,
          lng: statusRes.data.data[0].lng || 0,
          popupText: "Current Location"
        });
      }
    } catch (e) {
      setVehicles([]);
    }
    setLoading(false);
  }, [getAccessToken, setMapData]);

  const startPolling = useCallback(() => {
    fetchStatus();
    pollingRef.current = setInterval(fetchStatus, 5000);
    return () => clearInterval(pollingRef.current);
  }, [fetchStatus]);

  return {
    vehicles,
    loading,
    fetchStatus,
    startPolling
  };
}
