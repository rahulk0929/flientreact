import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/style.css";
import MapContextProvider from "./Context/MapContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <MapContextProvider>
    <App />
  </MapContextProvider>
  // <App />
);
