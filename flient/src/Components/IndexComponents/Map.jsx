import React, { useEffect } from "react";
import L from "leaflet";

export default function Map({ vehicles }) {
  useEffect(() => {
    const map = L.map("fdMap").setView([23.5, 80.5], 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    const markers = [];

    vehicles.forEach((vehicle) => {
      const lat = parseFloat(vehicle.Latitude);
      const lon = parseFloat(vehicle.Longitude);

      if (!isNaN(lat) && !isNaN(lon)) {
        const marker = L.marker([lat, lon])
          .addTo(map)
          .bindPopup(
            `<strong>${vehicle.Vehicle_Name}</strong><br/>${vehicle.Location}`
          );
        markers.push(marker);
      }
    });

    return () => {
      map.eachLayer((layer) => {
        if (layer instanceof L.Marker || layer instanceof L.TileLayer) {
          map.removeLayer(layer);
        }
      });
      map.remove();
    };
  }, [vehicles]);

  return (
    <div className="col-lg-8">
      <div id="fdMap" className="fd-map-placeholder" style={{ height: "600px" }} />
    </div>
  );
}
