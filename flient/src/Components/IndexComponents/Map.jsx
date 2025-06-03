import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useContext, useEffect } from "react";
import MapContext from "../../Context/MapContext";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function MapView({ popupText = "Current Location" }) {
  const { MapData } = useContext(MapContext);
  const { lat, lng } = MapData;
  const defaultPosition = [28.6139, 77.209];
  const position = (lat && lng) ? [lat, lng] : defaultPosition;

  // Auto-refresh the map when lat/lng change
  useEffect(() => {
    // This effect will run every time lat or lng changes
    // No need to do anything here, as react-leaflet will re-render with new props
    // But you can log or trigger side effects if needed
    // console.log("Map position updated:", position);
  }, [lat, lng]);

  return (
    <div className="col-lg-8">
      <MapContainer
        key={position.join('-')} // force remount on position change
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
          <Popup>{popupText}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
