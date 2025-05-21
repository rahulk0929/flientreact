import React from 'react'

export default function RealTimeSummary() {
  return (
  <>
  <div className="mt-2 p-0 position-relative">
  <div className="text-center shadow hover-box p-1 bg-light rounded position-relative">
    {/* Top Section: Summary */}
    <div className="row g-3 mb-0 p-0">
      <div className="col-6 col-sm-2">
        <p className="vehicle_header">
          <strong>348</strong> <span className="text-muted ms-1">Vehicles</span>
        </p>
      </div>
      <div className="col-6 col-sm-2">
        <p className="vehicle_header">
          <span className="text-success fw-bold">63</span>{" "}
          <span className="text-muted ms-1">Running</span>
        </p>
      </div>
      <div className="col-6 col-sm-2">
        <p className="vehicle_header">
          <strong>348</strong>{" "}
          <span className="text-muted ms-1">Not On Job</span>
        </p>
      </div>
      <div className="col-6 col-sm-2">
        <p className="vehicle_header">
          <strong>0</strong> <span className="text-muted ms-1">On Job</span>
        </p>
      </div>
      {/* Right-side Download / Actions */}
      <div className="col-6 col-md-4">
        <div className="download-section">
          <i className="fas fa-table me-3" />
          <i className="fas fa-share-alt me-3" />
          <i className="fas fa-download me-1" />
          <i className="fas fa-filter" />
        </div>
      </div>
    </div>
    {/* Hover Content Panel */}
    <div className="pt-0 hover-content mt-0 rounded shadow-sm">
      {/* Column 1 */}
      <div className="col-12 col-md-2 border-end pe-md-1 ps-3 p-2">
        <div className="status-box text-warning">
          <span className="status-number me-1">32</span> Idle
        </div>
        <div className="status-box">
          <span className="status-number  me-1">188</span> Parked
        </div>
        <div className="status-box text-danger">
          <span className="status-number  me-1">3</span> Disconnect
        </div>
      </div>
      {/* Column 2 */}
      <div className="col-12 col-md-2 border-end pe-md-1 ps-3 p-2">
        <div className="status-box text-danger">
          <span className="status-number  me-1">9</span> On Battery
        </div>
        <div className="status-box text-danger">
          <span className="status-number  me-1">17</span> Discharged{" "}
          <i
            className="fas fa-info-circle status-info-icon"
            title="Battery fully discharged"
          />
        </div>
        <div className="status-box text-danger">
          <span className="status-number  me-1">36</span> Not Online{" "}
          <i
            className="fas fa-info-circle status-info-icon"
            title="Vehicle is not connected"
          />
        </div>
      </div>
      {/* Column 3 */}
      <div className="col-12 col-md-2 border-end pe-md-1 ps-3 p-2">
        <div className="status-box">
          <span className="status-number me-1">0</span> Waiting To Load
        </div>
        <div className="status-box">
          <span className="status-number me-1">0</span> Loaded
        </div>
        <div className="status-box">
          <span className="status-number me-1">0</span> Waiting In Garage
        </div>
      </div>
      {/* Column 4 */}
      <div className="col-12 col-md-2 border-end pe-md-1 ps-3 p-2">
        <div className="status-box">
          <span className="status-number me-1">0</span> Unloading
        </div>
        <div className="status-box">
          <span className="status-number me-1">0</span> Scheduled
        </div>
        <div className="status-box">
          <span className="status-number me-1">0</span> Loading
        </div>
      </div>
      {/* Column 5 */}
      <div className="col-12 col-md-2  border-end ps-4 p-2">
        <div className="status-box">
          <span className="status-number me-1">0</span> Waiting To Unload
        </div>
        <div className="status-box">
          <span className="status-number me-1">0</span> In Garage
        </div>
        <div className="status-box">
          <span className="status-number me-1">0</span> Empty
        </div>
      </div>
      <div className="col-12 col-md-2 ps-4 p-2">
        <div className="status-box">
          <span className="status-number me-1">0</span> Late
        </div>
        <div className="status-box">
          <span className="status-number me-1">0</span> On Time
        </div>
        <div className="status-box">
          <span className="status-number me-1">0</span> Early
        </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}
