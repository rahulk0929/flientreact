import React from 'react'
import DoughnutChart from "../../Charts/DoughnutChart";
import BarChart from "../../Charts/BarChart";

export default function OverviewTabsContent() {
     const mockData = {
    parts: { value: 404.7, total: 525.2 },
    job: { value: 80.5, total: 525.2 },
    fuel: { value: 40.0, total: 525.2 },
    GroupVehicle: { value: 40.0, total: 525.2 },
    ModelType: { value: 29839.0, total: 8798.2 },
    fueltype: { value: 29839.0, total: 8798.2 },
  };

  return (
    <>
      {/* Tab Content */}
              <div className="tab-content mt-3" id="dashboardTabsContent">
                <div
                  className="tab-pane fade show active"
                  id="vehicle"
                  role="tabpanel"
                  aria-labelledby="vehicle-tab"
                >
                  <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Vehicles</h5>
                      <span className="badge bg-danger text-white rounded-pill">
                        Live
                      </span>
                    </div>
                    <div className="card-body">
                      {/* Vehicle Counts */}
                      <div className="row text-center mb-4">
                        <div className="col-md-4 mb-3 mb-md-0">
                          <h2 className="display-5">56</h2>
                          <p className="mb-0">Total Running</p>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                          <h2 className="display-5">29</h2>
                          <p className="mb-0">Total Idle</p>
                        </div>
                        <div className="col-md-4">
                          <h2 className="display-5">199</h2>
                          <p className="mb-0">Total Stopped</p>
                        </div>
                      </div>
                      {/* <div className="row g-3">
                        <div className="col-md-4">
                          <div className="card shadow-sm">
                            <div className="card-body p-2">
                              <canvas className="w-100" id="barGraph1" height={200}>
                                Canvas not supported
                              </canvas>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card shadow-sm">
                            <div className="card-body p-2">
                              <canvas className="w-100" id="barGraph2" height={200}>
                                Canvas not supported
                              </canvas>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card shadow-sm">
                            <div className="card-body p-2">
                              <canvas
                                className="w-100"
                                id="vehicleStatusChart"
                                height={200}
                              >
                                Canvas not supported
                              </canvas>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className="row g-3">
                        <div className="col-md-4">
                          <div className="card shadow-sm">
                            <div className="card-body p-2">
                              <BarChart
                                id="barGraph1"
                                label="Utilization"
                                data={[100, 200, 150, 300, 250]}
                              />
                            </div>
                          </div>
                        </div>
    
                        <div className="col-md-4">
                          <div className="card shadow-sm">
                            <div className="card-body p-2">
                              <BarChart
                                id="barGraph2"
                                label="Utilization"
                                data={[120, 180, 130, 280, 220]}
                              />
                            </div>
                          </div>
                        </div>
    
                        <div className="col-md-4">
                          <div className="card shadow-sm">
                            <div className="card-body p-2">
                              <BarChart
                                id="vehicleStatusChart"
                                label="Vehicle Status"
                                labels={["Active", "Idle", "Offline"]}
                                data={[12, 5, 3]}
                                colors={["#28a745", "#ffc107", "#dc3545"]}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container mt-4">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="card">
                          <div className="card-header bg-primary text-white">
                            Address Book Utilization{" "}
                            <span className="badge bg-success">Live</span>
                          </div>
                          <div className="card-body scroll-container">
                            <table className="table table-striped">
                              <thead className="table-dark">
                                <tr>
                                  <th>Address</th>
                                  <th>Count</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Start Trip</td>
                                  <td>19</td>
                                </tr>
                                <tr>
                                  <td>Roki Minda BWL</td>
                                  <td>10</td>
                                </tr>
                                <tr>
                                  <td>Maruti Maneser Material Out Gate No 2</td>
                                  <td>9</td>
                                </tr>
                                <tr>
                                  <td>Start Trip</td>
                                  <td>19</td>
                                </tr>
                                <tr>
                                  <td>Start Trip</td>
                                  <td>19</td>
                                </tr>
                                <tr>
                                  <td>Start Trip</td>
                                  <td>19</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card shadow-sm">
                          <div className="card-body p-2">
                            <canvas className="w-100" id="barGraph3" height={320}>
                              Canvas not supported
                            </canvas>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-md-6 container text-center">
                      <h6 className="mt-3">
                        Model Type{" "}
                        <a
                          href="#"
                          className="text-decoration-none ms-1"
                          data-bs-toggle="tooltip"
                          title="Model Type"
                        >
                          <i className="bi bi-info-circle-fill" />
                        </a>
                      </h6>
                      {/* <div
                        className="chartjob"
                        style={{ width: "100%", maxWidth: 300 }}
                        data-label="ModelType"
                        data-prefix="ModelType"
                      /> */}
                      <div style={{ width: "100%", maxWidth: 300 }}>
                        <DoughnutChart
                          label="Job Expenses"
                          prefix="job"
                          mockData={mockData}
                        />
                      </div>
    
                      <div className="mt-2">
                        <h6 className="mb-0">Total</h6>
                        <strong>INR 525.2Cr</strong>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled">
                        <li>
                          <span className="legend-dot bg-success" />{" "}
                          <span className="cost-label">INR 0 (0%)</span> - Fuel Cost
                        </li>
                        <li>
                          <span className="legend-dot bg-success-subtle" />{" "}
                          <span className="cost-label">INR 0 (0%)</span> -
                          Maintenance Cost
                        </li>
                        <li>
                          <span className="legend-dot bg-warning" />{" "}
                          <span className="cost-label">INR 0 (0%)</span> - Document
                          Cost
                        </li>
                        <li>
                          <span className="legend-dot bg-info" />{" "}
                          <span className="cost-label">INR 0 (0%)</span> - Job
                          Expenses
                        </li>
                        <li>
                          <span
                            className="legend-dot"
                            style={{ backgroundColor: "#27e6e6" }}
                          />{" "}
                          <span className="cost-label">INR 525.2Cr (100%)</span> -
                          Parts Cost
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr />
                  <div className="row align-items-center">
                    <div className="col-md-6 container text-center">
                      <h6 className="mt-4">
                        Group Wise Vehicles{" "}
                        <a
                          href="#"
                          className="text-decoration-none ms-1"
                          data-bs-toggle="tooltip"
                          title="Group Wise Vehicles"
                        >
                          <i className="bi bi-info-circle-fill" />
                        </a>
                      </h6>
    
                      {/* <div
                        className="chartjob"
                        style={{ width: "100%", maxWidth: 300 }}
                        data-label="GroupVehicle Expenses"
                        data-prefix="GroupVehicle"
                      /> */}
                      <div style={{ width: "100%", maxWidth: 300 }}>
                        <DoughnutChart
                          label="GroupVehicle Expenses"
                          prefix="GroupVehicle"
                          mockData={mockData}
                        />
                      </div>
    
                      <div className="mt-2">
                        <h6 className="mb-0">Total</h6>
                        <strong>INR 525.2Cr</strong>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled">
                        <li>
                          <span className="legend-dot bg-success" />{" "}
                          <span className="cost-label">INR 0 (0%)</span> - Fuel Cost
                        </li>
                        <li>
                          <span className="legend-dot bg-success-subtle" />{" "}
                          <span className="cost-label">INR 0 (0%)</span> -
                          Maintenance Cost
                        </li>
                        <li>
                          <span className="legend-dot bg-warning" />{" "}
                          <span className="cost-label">INR 0 (0%)</span> - Document
                          Cost
                        </li>
                        <li>
                          <span className="legend-dot bg-info" />{" "}
                          <span className="cost-label">INR 0 (0%)</span> - Job
                          Expenses
                        </li>
                        <li>
                          <span
                            className="legend-dot"
                            style={{ backgroundColor: "#27e6e6" }}
                          />{" "}
                          <span className="cost-label">INR 525.2Cr (100%)</span> -
                          Parts Cost
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr />
                  <div className="row g-6">
                    <div className="col-md-6">
                      <h6>
                        Avg Mileage
                        <a
                          href="#"
                          className="text-decoration-none ms-1"
                          data-bs-toggle="tooltip"
                          title="Average mileage info"
                        >
                          <i className="bi bi-info-circle-fill" />
                        </a>
                      </h6>
                      <div>
                        <canvas id="RunningDuration" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h6>
                        % Over Speeding of Running Duration
                        <a
                          href="#"
                          className="text-decoration-none ms-1"
                          data-bs-toggle="tooltip"
                          title="Over Speeding of Running Duration"
                        >
                          <i className="bi bi-info-circle-fill" />
                        </a>
                      </h6>
                      <div>
                        <canvas id="AvgMileage" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Cost of Ownership Tab */}
                <div
                  className="tab-pane fade"
                  id="cost"
                  role="tabpanel"
                  aria-labelledby="cost-tab"
                >
                  <div className="container my-4">
                    <div className="card shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title">
                          Job Expense
                          <i className="bi bi-info-circle-fill text-muted info-icon" />
                        </h5>
                        <div className="row align-items-center">
                          <div className="col-md-6 text-center">
                            {/* <div
                              className="chartjob"
                              style={{ width: "100%", maxWidth: 300 }}
                              data-label="Parts Cost"
                              data-prefix="parts"
                            /> */}
                            <div style={{ width: "100%", maxWidth: 300 }}>
                              <DoughnutChart
                                label="Parts Cost"
                                prefix="parts"
                                mockData={mockData}
                              />
                            </div>
    
                            <div className="mt-2">
                              <h6 className="mb-0">Total</h6>
                              <strong>INR 525.2Cr</strong>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <ul className="list-unstyled">
                              <li>
                                <span className="legend-dot bg-success" />{" "}
                                <span className="cost-label">INR 0 (0%)</span> -Toll
                                Expense
                              </li>
                              <li>
                                <span className="legend-dot bg-success-subtle" />{" "}
                                <span className="cost-label">INR 0 (0%)</span> -
                                Advance
                              </li>
                              <li>
                                <span className="legend-dot bg-warning" />{" "}
                                <span className="cost-label">INR 0 (0%)</span> - RTO
                                Tax
                              </li>
                              <li>
                                <span className="legend-dot bg-info" />{" "}
                                <span className="cost-label">INR 0 (0%)</span> -
                                Driver Expense
                              </li>
                              <li>
                                <span
                                  className="legend-dot"
                                  style={{ backgroundColor: "#27e6e6" }}
                                />{" "}
                                <span className="cost-label">
                                  INR 525.2Cr (100%)
                                </span>{" "}
                                - other expense
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container my-4">
                    <div className="card shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title">
                          Vehicle Cost Overall
                          <i className="bi bi-info-circle-fill text-muted info-icon" />
                        </h5>
                        <div className="row align-items-center">
                          <div className="col-md-6 text-center">
                            {/* <div
                              className="chartjob"
                              style={{ width: "100%", maxWidth: 300 }}
                              data-label="Job Expenses"
                              data-prefix="job"
                            /> */}
                            <div style={{ width: "100%", maxWidth: 300 }}>
                              <DoughnutChart
                                label="Job Expenses"
                                prefix="job"
                                mockData={mockData}
                              />
                            </div>
    
                            <div className="mt-2">
                              <h6 className="mb-0">Total</h6>
                              <strong>INR 525.2Cr</strong>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <ul className="list-unstyled">
                              <li>
                                <span className="legend-dot bg-success" />{" "}
                                <span className="cost-label">INR 0 (0%)</span> -
                                Fuel Cost
                              </li>
                              <li>
                                <span className="legend-dot bg-success-subtle" />{" "}
                                <span className="cost-label">INR 0 (0%)</span> -
                                Maintenance Cost
                              </li>
                              <li>
                                <span className="legend-dot bg-warning" />{" "}
                                <span className="cost-label">INR 0 (0%)</span> -
                                Document Cost
                              </li>
                              <li>
                                <span className="legend-dot bg-info" />{" "}
                                <span className="cost-label">INR 0 (0%)</span> - Job
                                Expenses
                              </li>
                              <li>
                                <span
                                  className="legend-dot"
                                  style={{ backgroundColor: "#27e6e6" }}
                                />{" "}
                                <span className="cost-label">
                                  INR 525.2Cr (100%)
                                </span>{" "}
                                - Parts Cost
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container mt-4">
                    <div className="card">
                      <div className="card-header bg-primary text-white">
                        Maintenance Cost Dashboard
                      </div>
                      <div className="card-body scroll-container">
                        <div className="row g-6">
                          <div className="col-md-6">
                            <canvas id="serviceHistoryChart" />
                          </div>
                          <div className="card-body col-md-6">
                            {/* Vehicle Counts */}
                            <div className="row text-center mb-4">
                              <div className="col-md-6 mb-3 mb-md-0">
                                <h2 className="display-5">56</h2>
                                <p className="mb-0">Total Running</p>
                              </div>
                              <div className="col-md-6 mb-3 mb-md-0">
                                <h2 className="display-5">29</h2>
                                <p className="mb-0">Total Idle</p>
                              </div>
                              <div className="col-md-6">
                                <h2 className="display-5">199</h2>
                                <p className="mb-0">Total Stopped</p>
                              </div>
                              <div className="col-md-6">
                                <h2 className="display-5">199</h2>
                                <p className="mb-0">Total Stopped</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row g-6">
                          <div className="col-md-6">
                            <canvas id="workOrderChart" />
                          </div>
                          <div className="card-body col-md-6">
                            {/* Vehicle Counts */}
                            <div className="row text-center mb-4">
                              <div className="col-md-6 mb-3 mb-md-0">
                                <h2 className="display-5">56</h2>
                                <p className="mb-0">Total Running</p>
                              </div>
                              <div className="col-md-6 mb-3 mb-md-0">
                                <h2 className="display-5">29</h2>
                                <p className="mb-0">Total Idle</p>
                              </div>
                              <div className="col-md-6">
                                <h2 className="display-5">199</h2>
                                <p className="mb-0">Total Stopped</p>
                              </div>
                              <div className="col-md-6">
                                <h2 className="display-5">199</h2>
                                <p className="mb-0">Total Stopped</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row g-6">
                          <div className="col-md-6">
                            <canvas id="transactionsChart" />
                          </div>
                          <div className="card-body col-md-6">
                            {/* Vehicle Counts */}
                            <div className="row text-center mb-4">
                              <div className="col-md-6 mb-3 mb-md-0">
                                <h2 className="display-5">56</h2>
                                <p className="mb-0">Total Running</p>
                              </div>
                              <div className="col-md-6 mb-3 mb-md-0">
                                <h2 className="display-5">29</h2>
                                <p className="mb-0">Total Idle</p>
                              </div>
                              <div className="col-md-6">
                                <h2 className="display-5">199</h2>
                                <p className="mb-0">Total Stopped</p>
                              </div>
                              <div className="col-md-6">
                                <h2 className="display-5">199</h2>
                                <p className="mb-0">Total Stopped</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Job Overview Tab */}
                <div
                  className="tab-pane fade"
                  id="job"
                  role="tabpanel"
                  aria-labelledby="job-tab"
                >
                  <div className="row g-6">
                    <div className="card-body col-md-4">
                      <div className="position-relative">
                        <span className="live-indicator">Live</span>
                      </div>
                      <div className="row justify-content-center mt-4">
                        <div className="d-flex flex-column align-items-start gap-3">
                          <div className="status-row">
                            <div className="status-color-box early" />
                            <div className="status-label">
                              Early: <strong>0</strong>
                            </div>
                          </div>
                          <div className="status-row">
                            <div className="status-color-box on-time" />
                            <div className="status-label">
                              On Time: <strong>1</strong>
                            </div>
                          </div>
                          <div className="status-row">
                            <div className="status-color-box late" />
                            <div className="status-label">
                              Late: <strong>0</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex flex-row justify-content-between">
                        <h6 className="mt-2">
                          Nearby Plant{" "}
                          <a
                            href="#"
                            className="text-decoration-none ms-1"
                            data-bs-toggle="tooltip"
                            title="Nearby Plant"
                          >
                            <i className="bi bi-info-circle-fill" />
                          </a>
                        </h6>
                        <div className="dropdown">
                          <button
                            className="btn dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            status
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Denso Ten India pvt lte
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Enquiry pvt ltd.
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="overflow-hidden"
                        style={{ width: "100%", height: 250 }}
                      >
                        <canvas id="NearbyPlant"></canvas>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex flex-row justify-content-between">
                        <h6 className="mt-2">
                          Job Delay{" "}
                          <a
                            href="#"
                            className="text-decoration-none ms-1"
                            data-bs-toggle="tooltip"
                            title="Nearby Plant"
                          >
                            <i className="bi bi-info-circle-fill" />
                          </a>
                        </h6>
                        <div className="dropdown">
                          <button
                            className="btn dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            status
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Running
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Completed
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="overflow-hidden"
                        style={{ width: "100%", height: 250 }}
                      >
                        <canvas id="jobdelay"></canvas>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-4" />
                  <div className="row g-6 mt-4">
                    <div className="col-md-4">
                      <div className="d-flex flex-row justify-content-between">
                        <h6 className="">
                          Vehicle Days Since Last Job{" "}
                          <a
                            href="#"
                            className="text-decoration-none ms-1"
                            data-bs-toggle="tooltip"
                            title="Vehicle Days Since Last Job"
                          >
                            <i className="bi bi-info-circle-fill" />
                          </a>
                        </h6>
                        <div>
                          <span className="live">Live</span>
                        </div>
                      </div>
                      <div
                        className="overflow-hidden"
                        style={{ width: "100%", height: 250 }}
                      >
                        <canvas id="SinceLastJob"></canvas>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex flex-row justify-content-between">
                        <h6>
                          Average Unloading Time{" "}
                          <a
                            href="#"
                            className="text-decoration-none ms-1"
                            data-bs-toggle="tooltip"
                            title="Average Unloading Time"
                          >
                            <i className="bi bi-info-circle-fill" />
                          </a>
                        </h6>
                        <div>
                          <span className="live">Live</span>
                        </div>
                      </div>
                      <div
                        className="overflow-hidden"
                        style={{ width: "100%", height: 250 }}
                      >
                        <canvas id="UnloadingTime"></canvas>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex flex-row justify-content-between">
                        <h6 className="">
                          Job Insights{" "}
                          <a
                            href="#"
                            className="text-decoration-none ms-1"
                            data-bs-toggle="tooltip"
                            title="Job Insights"
                          >
                            <i className="bi bi-info-circle-fill" />
                          </a>
                        </h6>
                        <div>
                          <span className="live">Live</span>
                        </div>
                      </div>
                      <div
                        className="overflow-hidden"
                        style={{ width: "100%", height: 250 }}
                      >
                        <canvas id="JobInsights"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Fuel Overview Tab */}
                <div
                  className="tab-pane fade"
                  id="fuel"
                  role="tabpanel"
                  aria-labelledby="fuel-tab"
                >
                  <div className="row align-items-center">
                    <div className="col-md-6 container text-center">
                      <div className="d-flex flex-row justify-content-between">
                        <h6 className="">
                          Fuel Sensor Composition{" "}
                          <a
                            href="#"
                            className="text-decoration-none ms-1"
                            data-bs-toggle="tooltip"
                            title="Fuel Sensor Composition"
                          >
                            <i className="bi bi-info-circle-fill" />
                          </a>
                        </h6>
                        <div>
                          <span className="live">Live</span>
                        </div>
                      </div>
                      {/* <div
                        className="chartjob"
                        style={{ width: "100%", maxWidth: 300 }}
                        data-label="ModelType"
                        data-prefix="fueltype"
                      /> */}
                      <div style={{ width: "100%", maxWidth: 300 }}>
                        <DoughnutChart
                          label="ModelType"
                          prefix="FuelType"
                          mockData={mockData}
                        />
                      </div>
    
                      <div className="mt-2">
                        <div>
                          <strong>0%</strong>
                          <div className="small text-muted">
                            Vehicle with Fuel Sensors
                          </div>
                        </div>
                        <div className="mt-2">
                          <strong>453 (100%)</strong>
                          <div className="small text-muted">
                            Vehicle with no Fuel Sensors
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled">
                        <li>
                          <span className="legend-dot bg-success" />{" "}
                          <span className="cost-label">INR 0 (0%)</span> - Fuel Cost
                        </li>
                        <li>
                          <span className="legend-dot bg-success-subtle" />{" "}
                          <span className="cost-label">INR 0 (0%)</span> -
                          Maintenance Cost
                        </li>
                        <li>
                          <span className="legend-dot bg-warning" />{" "}
                          <span className="cost-label">INR 0 (0%)</span> - Document
                          Cost
                        </li>
                        <li>
                          <span className="legend-dot bg-info" />{" "}
                          <span className="cost-label">INR 0 (0%)</span> - Job
                          Expenses
                        </li>
                        <li>
                          <span
                            className="legend-dot"
                            style={{ backgroundColor: "#27e6e6" }}
                          />{" "}
                          <span className="cost-label">INR 525.2Cr (100%)</span> -
                          Parts Cost
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="d-flex flex-row justify-content-between">
                      <h6>
                        Vehicle Mileage Classification
                        <a
                          href="#"
                          className="text-decoration-none ms-1"
                          data-bs-toggle="tooltip"
                          title="Vehicle Mileage Classification"
                        >
                          <i className="bi bi-info-circle-fill" />
                        </a>
                      </h6>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          select Model
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              1216lpt
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              1626 qap
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="overflow-hidden;" style={{ height: 300 }}>
                      <canvas id="VehicleMileageClassification" />
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}
