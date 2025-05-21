export default function RealTime({ vehicles }) {
  return (
    <>
      <div className="col-lg-4">
        <div className="d-flex align-items-center mb-3">
          <div className="input-group me-2" style={{ maxWidth: 200 }}>
            <span className="input-group-text p-2">
              <i className="bi bi-search" />
            </span>
            <input
              type="text"
              className="form-control input_serach form-control-sm"
              placeholder="Search vehicles / groups"
            />
          </div>
          <ul className="nav nav-pills nav_tabs">
            <li className="nav-item">
              <button
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#vehicles-tab"
              >
                Vehicles
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#location-tab"
              >
                Location
              </button>
            </li>
          </ul>
        </div>
        {/* Tab Content */}
        <div className="tab-content">
          {/* Vehicles  */}
    <div className="tab-pane fade show active" id="vehicles-tab">
          {vehicles.map((vehicle, index) => (
            <div className="card mb-3 shadow-sm informationcard" key={index}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="card-title fw-bold mb-0">
                    {vehicle.Vehicle_Name || "N/A"}
                  </h6>
                  <div className="d-flex flex-column align-items-center">
                    <a className="text-decoration-none text-center" href="#">
                      <i className="bi bi-info-circle me-2" />
                      Details
                    </a>
                  </div>
                </div>
                <p className="card-text text-muted mb-1">
                  Group: <span className="fw-semibold">{vehicle.Company}</span>
                </p>
                <p className="card-text text-muted mb-1">
                  Driver:{" "}
                  <span className="fw-semibold">
                    {vehicle.Driver_First_Name || "Not Assigned"}
                  </span>
                </p>
                <span className="badge bg-secondary mb-2">
                  {vehicle.DeviceModel}
                </span>
                <p className="mb-1">
                  <i className="bi bi-clock-fill" /> {vehicle.Datetime} |{" "}
                  <strong className="text-success">
                    Speed: {vehicle.Speed} km/h
                  </strong>
                </p>
                <p className="mb-1">
                  <i className="bi bi-geo-alt-fill" /> {vehicle.Location}
                </p>
                <p className="mb-1">
                  <strong>Nearest Address:</strong> {vehicle.POI || "N/A"}
                </p>
                <span className="fw-semibold span_card">
                  {vehicle.Status || "Status Unknown"}
                </span>
              </div>
            </div>
          ))}
        </div>

          {/* Location  */}
           {/* other tab */}
        <div className="tab-pane fade" id="location-tab">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Location Info</h5>
              <p className="card-text">
                {vehicles[0]?.Location ||
                  "Details related to vehicle locations can go here."}
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
