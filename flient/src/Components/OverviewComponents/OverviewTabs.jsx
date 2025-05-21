import React from "react";

export default function OverviewTabs() {
  return (
    <>
      <ul className="nav nav-tabs" id="dashboardTabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="vehicle-tab"
            data-bs-toggle="tab"
            data-bs-target="#vehicle"
            type="button"
            role="tab"
            aria-controls="vehicle"
            aria-selected="true"
          >
            Vehicle Utilisation
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="cost-tab"
            data-bs-toggle="tab"
            data-bs-target="#cost"
            type="button"
            role="tab"
            aria-controls="cost"
            aria-selected="false"
          >
            Cost of Ownership
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="job-tab"
            data-bs-toggle="tab"
            data-bs-target="#job"
            type="button"
            role="tab"
            aria-controls="job"
            aria-selected="false"
          >
            Job Overview
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="fuel-tab"
            data-bs-toggle="tab"
            data-bs-target="#fuel"
            type="button"
            role="tab"
            aria-controls="fuel"
            aria-selected="false"
          >
            Fuel Overview
          </button>
        </li>
      </ul>
    </>
  );
}
