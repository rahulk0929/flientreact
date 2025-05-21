import React from "react";
import { useEffect } from "react";

export default function Sidebar() {
  useEffect(() => {
    const sidebar = document.getElementById("fdSidebar");
    const toggleBtn = document.getElementById("fdToggleBtn");

    const handleToggle = () => {
      sidebar.classList.toggle("fd-expanded");
      const icon = toggleBtn.querySelector("i");
      if (sidebar.classList.contains("fd-expanded")) {
        icon.classList.replace("bi-list", "bi-x");
      } else {
        icon.classList.replace("bi-x", "bi-list");
      }
    };

    toggleBtn.addEventListener("click", handleToggle);

    return () => {
      toggleBtn.removeEventListener("click", handleToggle);
    };
  }, []);
  return (
    <>
      <div className="fd-sidebar border-end" id="fdSidebar">
        <div className="fd-toggle-btn " id="fdToggleBtn">
          <i className="bi bi-list" />
        </div>
        <div className="fd-sidebar-item has-dropdown mt-5">
          <i className="bi bi-person" />
          <span className="fd-item-text sidebarnav">Realtime</span>
          <div className="fd-sidebar-dropdown">
            <div className="fd-dropdown-item">Realtime</div>
          </div>
        </div>
        <div className="fd-sidebar-item has-dropdown">
          <i className="bi bi-card-list" />
          <span className="fd-item-text sidebarnav">Records</span>
          <div className="fd-sidebar-dropdown">
            <div className="fd-dropdown-item">Overview</div>
          </div>
        </div>
        <div className="fd-sidebar-item has-dropdown">
          <i className="bi bi-clock-history" />
          <span className="fd-item-text sidebarnav">History</span>
          <div className="fd-sidebar-dropdown">
            <div className="fd-dropdown-item">History</div>
          </div>
        </div>
        <div className="fd-sidebar-item has-dropdown">
          <i className="bi bi-truck" />
          <span className="fd-item-text sidebarnav">Vehicle</span>
          <div className="fd-sidebar-dropdown">
            <div className="fd-dropdown-item">Vehicle</div>
          </div>
        </div>
        <div className="fd-sidebar-item has-dropdown">
          <i className="bi bi-geo-alt" />
          <span className="fd-item-text sidebarnav">Location</span>
          <div className="col-6 fd-sidebar-dropdown">
            <div className="row">
              <div className="fd-dropdown-item">Map View</div>
              <div className="fd-dropdown-item">Geofences</div>
              <div className="fd-dropdown-item">Routes</div>
            </div>
          </div>
          <div className="col-6 fd-sidebar-dropdown">
            <div className="row">
              <div className="fd-dropdown-item">Map View</div>
              <div className="fd-dropdown-item">Geofences</div>
              <div className="fd-dropdown-item">Routes</div>
            </div>
          </div>
        </div>
        <div className="fd-sidebar-item has-dropdown">
          <i className="bi bi-clock" />
          <span className="fd-item-text sidebarnav">Time</span>
          <div className="fd-sidebar-dropdown">
            <div className="fd-dropdown-item">Reports</div>
            <div className="fd-dropdown-item">Invoices</div>
            <div className="fd-dropdown-item">Payments</div>
          </div>
        </div>
        <div className="fd-sidebar-item has-dropdown">
          <i className="bi bi-currency-rupee" />
          <span className="fd-item-text sidebarnav">Finance</span>
          <div className="fd-sidebar-dropdown">
            <div className="fd-dropdown-item">Reports</div>
            <div className="fd-dropdown-item">Invoices</div>
            <div className="fd-dropdown-item">Payments</div>
          </div>
        </div>
        <div className="fd-sidebar-item has-dropdown">
          <i className="bi bi-exclamation-triangle" />
          <span className="fd-item-text sidebarnav">Alerts</span>
          <div className="fd-sidebar-dropdown">
            <div className="fd-dropdown-item">Active Alerts</div>
            <div className="fd-dropdown-item">History</div>
            <div className="fd-dropdown-item">Settings</div>
          </div>
        </div>
      </div>
    </>
  );
}
