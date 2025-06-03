import React from "react";
import MapContextProvider from "../src/Context/MapContextProvider";
import { AuthProvider } from "./Context/AutnContext"; 

const AppContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <MapContextProvider>
        {children}
      </MapContextProvider>
    </AuthProvider>
  );
};

export default AppContextProvider;
