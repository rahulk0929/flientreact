import MapContext from "./MapContext"
import PropTypes from "prop-types";
import React, { useState } from "react";

const MapContextProvider = ({ children }) => {
  const [MapData, setMapData] = useState('');

  return (
    <MapContext.Provider value={{ MapData, setMapData}}>
      {children}
    </MapContext.Provider>
  );
};
MapContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MapContextProvider;
