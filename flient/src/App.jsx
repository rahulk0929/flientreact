import { BrowserRouter, Routes,Route } from "react-router-dom";
import Index from "./Pages/Index";
import Layout from "./Pages/Layout";
import Overview from "./Pages/Overview"

function App() {
  return (
    <>
    
     <BrowserRouter>
     <Routes>
      
      <Route path="/" element={<Layout />}>
      <Route index element={<Index />} /> 
      <Route path="overview" element={<Overview />}></Route>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
