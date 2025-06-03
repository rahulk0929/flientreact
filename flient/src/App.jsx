import { BrowserRouter, Routes,Route } from "react-router-dom";
import Index from "./Pages/Index";
import Layout from "./Pages/Layout";
import Overview from "./Pages/Overview"
import VehcileDetails from "./Pages/VehcileDetails";
import Login from "./Pages/Login";

function App() {
  return (
    <>
    
     <BrowserRouter>
     <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/" element={<Layout />}>
      <Route index element={<Index />} /> 
      <Route path="overview" element={<Overview />}></Route>
      <Route path="VehcileDetails" element={<VehcileDetails />}></Route>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
