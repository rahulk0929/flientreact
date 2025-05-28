import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import MapView from "../Components/IndexComponents/Map";
export default function VehcileDetails() {
  const canvasRef = useRef(null);
  const chartInstanceRef = React.useRef(null);
  // const [selectedValue, setSelectedValue] = useState("2708 (HR47C208)");

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["10:00", "10:05", "10:10", "10:15", "10:20"],
        datasets: [
          {
            label: "Speed (km/h)",
            data: [45, 50, 47, 52, 49],
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            fill: true,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Speed (km/h)",
            },
          },
          x: {
            title: {
              display: true,
              text: "Time",
            },
          },
        },
      },
    });

    return () => {
      chartInstanceRef.current?.destroy();
    };
  }, []);

  return (
    <>
      <div className="d-flex overflow-hidden">
        {/* Main Content */}
        <div className="flex-grow-1">
          <hr className="m-0 p-0" />
          <div className="row container">
            <div className="col-md-4 col-12">
              <h5 className="mt-4">
                <span className="fw-bold"> Latest - 1OBD</span> (HR47E2161OBD)
              </h5>
            </div>
            <div className="col-md-8 col-12 d-flex flex-wrap align-items-center justify-content-md-end">
              <div className="pt-2 me-1">
                <select defaultValue="Petrol Pump"
                  className="pt-1 border-1 pb-1 history-action-buttons"
                  // value={selectedValue}
                  // onChange={(e) => setSelectedValue(e.target.value)}
                >
                  <option  value="Petrol Pump">Petrol Pump</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="hospital">Hospital</option>
                </select>
              </div>
              <div className="pt-2 me-1">
                <a className="btn btn-outline-dark" href="#">
                  <i className="fas fa-list-alt" /> History
                </a>
              </div>
              <div className="pt-2 me-1">
                <a className="btn btn-outline-dark" href="#">
                  <i className="fas fa-list-alt" /> Location History
                </a>
              </div>
              <div className="pt-2 me-1">
                <a className="btn btn-outline-primary" href="#">
                  <i className="fas fa-list-alt" /> Share Real Time Traking
                </a>
              </div>
            </div>
          </div>
          <div className="container-fluid mt-3">
            <div className="row">
              {/* Left Panel */}
              <div className="col-lg-4">
                <div className="card p-3 shadow-sm" style={{ maxWidth: 500 }}>
                  {/* Tabs */}
                  <ul
                    className="nav nav-tabs card-tabs mb-3"
                    id="vehicleTabs"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="overview-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#overview"
                        type="button"
                        role="tab"
                      >
                        Overview
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="speed-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#speed"
                        type="button"
                        role="tab"
                      >
                        Speed Graph
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="alarms-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#alarms"
                        type="button"
                        role="tab"
                      >
                        Alarms
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="directions-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#directions"
                        type="button"
                        role="tab"
                      >
                        Directions
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="nearby-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nearby"
                        type="button"
                        role="tab"
                      >
                        Near By
                      </button>
                    </li>
                  </ul>
                  {/* Tab Content */}
                  <div className="tab-content">
                    {/* Overview Tab */}
                    <div
                      className="tab-pane fade show active"
                      id="overview"
                      role="tabpanel"
                    >
                      <div style={{ maxHeight: 300, overflowY: "scroll" }}>
                        <p className="fw-bold mb-2">Parked</p>
                        <p>
                          <strong>Current Location:</strong> Delhi - Ajmer
                          Expressway, Neemrana, Alwar, Rajasthan
                        </p>
                        <p>
                          <strong>Model:</strong> 2020 TATA LPT 909 EX
                        </p>
                        <hr />
                        <p>
                          <strong>Fuel Type:</strong> CNG
                        </p>
                        <p>
                          <strong>Mileage:</strong> 3.07 km/kg
                        </p>
                        <p>
                          <strong>Fuel Used:</strong> 0.62 kg
                        </p>
                        <p>
                          <strong>Distance:</strong> 1.9 km
                        </p>
                        <p>
                          <strong>Time:</strong> 10m
                        </p>
                        <hr />
                        <p>
                          <strong>Start Time:</strong> 21 May 25, 01:35 PM
                        </p>
                        <p>
                          <strong>End Time:</strong> 21 May 25, 01:35 PM
                        </p>
                        <p>
                          <strong>Start Location:</strong> 21 May 25, 01:35 PM
                        </p>
                        <p>
                          <strong>End location:</strong> 21 May 25, 01:35 PM
                        </p>
                        <hr />
                        <p>
                          <strong>Engine Type:</strong> 21 May 25, 01:35 PM
                        </p>
                      </div>
                    </div>
                    {/* Speed Graph Tab */}
                    <div className="tab-pane fade" id="speed" role="tabpanel">
                      <canvas
                        className="speedChart_details"
                        ref={canvasRef}
                        width={400}
                        height={200}
                      />
                    </div>
                    {/* Alarms Tab */}
                    <div className="tab-pane fade" id="alarms" role="tabpanel">
                      <div className="row text-center mb-4">
                        <div className="col-md-4 mb-3 mb-md-0">
                          <h4 className="display-5">56</h4>
                          <p className="mb-0">Alarms</p>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                          <h4 className="display-5">29</h4>
                          <p className="mb-0">Geofance</p>
                        </div>{" "}
                        <div className="col-md-4">
                          <h4 className="display-5">199</h4>
                          <p className="mb-0">Total Stopped</p>
                        </div>{" "}
                      </div>
                    </div>
                    {/* Directions Tab */}
                    <div
                      className="tab-pane fade"
                      id="directions"
                      role="tabpanel"
                    >
                      <div className="container mt-3">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search for a destination"
                            aria-label="Search for a destination"
                          />
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          ></button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="#">
                                Action 1
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Action 2
                              </a>
                            </li>
                          </ul>
                        </div>
                        <button className="btn btn-primary">
                          Get Directions
                        </button>
                      </div>
                    </div>
                    {/* Near By Tab */}
                    <div className="tab-pane fade" id="nearby" role="tabpanel">
                      <div className="container mt-3">
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <label htmlFor="category" className="form-label">
                              Category
                            </label>
                            <select
                              id="category"
                              className="form-select"
                              defaultValue="Petrol Pump"
                            >
                              <option value="Petrol Pump">Petrol Pump</option>
                              <option value="restaurant">Restaurant</option>
                              <option value="hospital">Hospital</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="distance" className="form-label">
                              Near By KM
                            </label>
                            <div className="input-group">
                              <input
                                type="number"
                                id="distance"
                                className="form-control"
                                defaultValue={50}
                              />
                            </div>
                          </div>
                          <div className="text-center mt-3">
                            <button className="btn btn-primary">Apply</button>
                          </div>
                          <span className="text-center">
                            No Petrol Pump Found
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Panel (Map) */}

              {/* <div className="map-container-vehicledetails" /> */}
              <MapView />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
