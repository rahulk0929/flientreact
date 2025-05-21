import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar"
import MatserHeader from '../Components/MatserHeader';


export default function Layout() {
  return (
  <>
   <div className="d-flex overflow-hidden">
          <Sidebar />
          <div className="flex-grow-1">
            <MatserHeader />
            <hr className="m-0 p-0" />
            <Outlet />
          </div>
        </div>

  </>
  )
}
