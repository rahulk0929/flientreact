import MapContext from "./MapContext";
import React, { useState } from "react";

const MapContextProvider = ({ children }) => {
  const [MapData, setMapData] = useState('');

  return (
    <MapContext.Provider value={{ MapData, setMapData}}>
      {children}
    </MapContext.Provider>
  );
};

export default MapContextProvider;
