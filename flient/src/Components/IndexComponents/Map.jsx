import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
// import { useEffect, useState } from "react";
// import { getDeviceLocation } from "../../Api/Mapapi";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function MapView() {
    // const [position, setPosition] = useState(null);
    // const [address, setAddress] = useState("");

    // useEffect(() => {
    //   const imei = "356218604801348";
    //   const token = "277c3e5d7a7d4c0d895cc4a60e435644";

    //   getDeviceLocation(imei, token)
    //     .then((data) => {
    //       if (data.code === 0) {
    //         setPosition([parseFloat(data.lat), parseFloat(data.lng)]);
    //         setAddress(data.address);
    //       }
    //     })
    //     .catch(console.error);
    // }, []);

  return (
    <div className="col-lg-8">
      <MapContainer
        center={[28.6139, 77.209]} // Delhi's lat, lng
        zoom={15}
        scrollWheelZoom={false}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[28.6139, 77.209]}>
          <Popup>Delhi</Popup>
        </Marker>
      </MapContainer>

      {/* {position && (
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={false}
          className="map-container"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>{address}</Popup>
          </Marker>
        </MapContainer>
      )} */}
    </div>
  );
}
