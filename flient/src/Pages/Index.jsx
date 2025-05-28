// import React, { useEffect, useState } from "react";
import MapView from "../Components/IndexComponents/Map";
import RealTime from "../Components/IndexComponents/RealTime";
import RealTimeSummary from "../Components/RealTimeSummary";

export default function Index() {

  // const [vehicles, setVehicles] = useState([]);
  
  //   useEffect(() => {
  //     const fetchData = () => {
  //       console.log("Fetching data at:", new Date().toLocaleTimeString());
  //       fetch(
  //         "http://13.127.228.11/webservice?token=getLiveData&user=akshat2711@hypertrack.in&pass=Abc@1234&company=Akshat2711&format=json"
  //       )
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data.root && data.root.VehicleData) {
  //             const vehicledata = data.root.VehicleData.map((iter) => ({
  //               Vehicle_Name: iter.Vehicle_Name,
  //               Company: iter.Company,
  //               Driver_First_Name: iter.Driver_First_Name,
  //               DeviceModel: iter.DeviceModel,
  //               Datetime: iter.Datetime,
  //               Speed: iter.Speed,
  //               Location: iter.Location,
  //               POI: iter.POI,
  //               Status: iter.Status,
  //             }));
  //             setVehicles(vehicledata);
  //           } else {
  //             console.error("Unexpected response format", data);
  //           }
  //         })
  //         .catch((err) => {
  //           console.error("Fetch error:", err);
  //         });
  //     };
  
  //     fetchData();
  
  //     const interval = setInterval(fetchData, 120000); 
  
  //     return () => clearInterval(interval);
  //   }, []);
  return (
    <>
      <div className="flex-grow-1">
       
       <RealTimeSummary />
       <div className="container-fluid mt-3">
         <div className="row">
           {/* Left Panel */}
           <RealTime/>
           {/* right Panel */}
            <MapView/> 
         </div>
       </div>
     </div>
    </>
  );
}
