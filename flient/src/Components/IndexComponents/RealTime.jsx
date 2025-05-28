import { useNavigate } from "react-router-dom";
export default function RealTime() {
  const navigate = useNavigate();
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
          {/* Vehicles */}
          <div className="tab-pane fade show active" id="vehicles-tab">
            <div
              className="card mb-3 shadow-sm informationcard"
              style={{ cursor: "pointer" }}
             onClick={() => navigate("VehcileDetails")} 
            >
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="card-title fw-bold mb-0">7385 HR47E7385OBD</h6>
                  <div className="d-flex flex-column align-items-center">
                    <a className="text-decoration-none text-center" href="#">
                      <i className="bi bi-info-circle me-2" />
                      Details
                    </a>
                  </div>
                </div>
                <p className="card-text text-muted mb-1">
                  Group: <span className="fw-semibold">Toyoda Neemrana</span>
                </p>
                <p className="card-text text-muted mb-1">
                  Driver: <span className="fw-semibold">Not Assigned</span>
                </p>
                <span className="badge bg-secondary mb-2">OBD</span>
                <p className="mb-1">
                  <i className="bi bi-clock-fill" /> 31m | 15.2 km |{" "}
                  <strong className="text-success">Speed: 49 km/h</strong>
                </p>
                <p className="mb-1">
                  <i className="bi bi-geo-alt-fill" /> Delhi - Ajmer Expressway,
                  Bawad, Alwar, Rajasthan
                </p>
                <p className="mb-1">
                  <strong>Nearest Address:</strong> 7.7 km from Dadhiya
                </p>
                <span className="fw-semibold span_card">Not On Job</span>
              </div>
              <div className="mt-0 mb-2 d-flex gap-2 text-start card_buttons">
                <a href="#" className="text-center">
                  <i className="bi bi-clock-history" />
                  <br /> History
                </a>
                <a href="#" className="text-center">
                  <i className="bi bi-calendar" />
                  <br /> Timeline
                </a>
                <a href="#" className="text-center">
                  <i className="bi bi-info-circle" />
                  <br /> Details
                </a>
                <a href="#" className="text-center">
                  <i className="bi bi-plus-circle" />
                  <br /> Add Tag
                </a>
                <a href="#" className="text-center">
                  <i className="bi bi-geo-alt" />
                  <br /> Historical Location
                </a>
              </div>
              <div className="cardicons d-flex flex-column p-2">
                <i className="bi bi-envelope" />
                <i className="bi bi-share" />
              </div>
            </div>
          </div>
          {/* Location  */}
          <div className="tab-pane fade" id="location-tab">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Location Info</h5>
                <p className="card-text">
                  Details related to vehicle locations can go here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
