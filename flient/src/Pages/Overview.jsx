import React from "react";
import OverviewTabs from "../Components/OverviewComponents/OverviewTabs";
import OverviewHeader from "../Components/OverviewComponents/OverviewHeader";
import OverviewTabsContent from "../Components/OverviewComponents/OverviewTabsContent";
export default function Overview() {
 
  return (
    <>
      {/* Main Content */}
      <div className="flex-grow-1">
       <OverviewHeader></OverviewHeader>
        <div className="container mt-4">


          <OverviewTabs/>
         <OverviewTabsContent/>
        
        </div>
      </div>
    </>
  );
}
