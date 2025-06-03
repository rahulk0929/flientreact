import React from "react";
import { Link } from "react-router-dom";

export default function MatserHeader() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            <img src="../src/assets/Images/eglogo.png" alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Left Navigation Links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Realtime
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/overview" className="nav-link" href="/home/Overview">
                  Overview
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  History
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Vehicle
                </a>
              </li>
              {/* Jobs Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="jobsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Jobs
                </Link>
                <ul
                  className="dropdown-menu p-3"
                  aria-labelledby="jobsDropdown"
                  style={{ minWidth: 500 }}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <Link
                        className="dropdown-item d-flex align-items-center gap-2"
                        href="#"
                      >
                        <i className="bi bi-display" /> Control Room
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center gap-2"
                        href="#"
                      >
                        <i className="bi bi-truck" /> Job Bookings
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center gap-2"
                        href="#"
                      >
                        <i className="bi bi-people" /> Clients
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center gap-2"
                        href="#"
                      >
                        <i className="bi bi-geo-alt" /> Site Analytics
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center gap-2"
                        href="#"
                      >
                        <i className="bi bi-bar-chart" /> Stoppage Analytics
                      </Link>
                    </div>
                    <div className="col-md-6">
                      <Link
                        className="dropdown-item d-flex align-items-center gap-2"
                        href="#"
                      >
                        <i className="bi bi-box" /> All Jobs
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center gap-2"
                        href="#"
                      >
                        <i className="bi bi-diagram-3" /> Routes
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center gap-2"
                        href="#"
                      >
                        <i className="bi bi-book" /> Address Book
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center gap-2"
                        href="#"
                      >
                        <i className="bi bi-geo-alt-fill" /> Site Analytics V2
                      </Link>
                      <Link
                        className="dropdown-item d-flex align-items-center gap-2"
                        href="#"
                      >
                        <i className="bi bi-fuel-pump" /> Fuel Station Price
                      </Link>
                    </div>
                  </div>
                </ul>
              </li>
              {/* Reminders Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="remindersDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Reminders
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="remindersDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-wrench" /> Service Reminders
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-car-front" /> Vehicle Renewal
                      Reminders
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-clock" /> Entity Reminders
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-file-lock" /> Contact Renewal
                      Reminders
                    </a>
                  </li>
                </ul>
              </li>
              {/* Finance Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="financeDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Finance
                </Link>
                <ul className="dropdown-menu" aria-labelledby="financeDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-receipt" /> Invoices
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-cash-stack" /> Payment Receipts
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-bank" /> Transactions
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-file-earmark-text" /> Trip Sheet
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-people" /> Clients
                    </a>
                  </li>
                </ul>
              </li>
              {/* Records Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="recordsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Records
                </Link>
                <ul className="dropdown-menu" aria-labelledby="recordsDropdown">
                  <li>
                    <Link className="dropdown-item" href="#">
                      <i className="bi bi-box-seam" /> Parts Stock Inventory
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <i className="bi bi-car-front" /> Tyre Management
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-tools" /> Work Orders
                    </a>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <i className="bi bi-clipboard-data" /> Service History
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <i className="bi bi-fuel-pump" /> Fuel Log
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Alarms Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="alarmsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-bell" /> Alarms
                </Link>
                <ul className="dropdown-menu" aria-labelledby="alarmsDropdown">
                  <li>
                    <Link className="dropdown-item" href="#">
                      <i className="bi bi-bell" /> Alarms
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <i className="bi bi-engine" /> DTCs
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Reports Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="reportsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Reports
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-end p-3"
                  aria-labelledby="reportsDropdown"
                  style={{ minWidth: 500 }}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <Link className="dropdown-item" href="#">
                        <i className="bi bi-download" /> Download Document
                      </Link>
                      <Link className="dropdown-item" href="#">
                        <i className="bi bi-upload" /> Uploaders
                      </Link>
                      <Link className="dropdown-item" href="#">
                        <i className="bi bi-thermometer" /> Temperature /
                        Humidity
                      </Link>
                      <Link className="dropdown-item" href="#">
                        <i className="bi bi-droplet" /> Adblue
                      </Link>
                      <Link className="dropdown-item" href="#">
                        <i className="bi bi-graph-up" /> Planned v/s Actual
                      </Link>
                    </div>
                    <div className="col-md-6">
                      <Link className="dropdown-item" href="#">
                        <i className="bi bi-file-earmark-bar-graph" /> Download
                        Reports
                      </Link>
                      <Link className="dropdown-item" href="#">
                        <i className="bi bi-speedometer" /> Live Fuel Rate
                      </Link>
                      <Link className="dropdown-item" href="#">
                        <i className="bi bi-fuel-pump" /> Fuel Analytics
                      </Link>
                      <Link className="dropdown-item" href="#">
                        <i className="bi bi-heart-pulse" /> OBD Health
                      </Link>
                      <Link className="dropdown-item" href="#">
                        <i className="bi bi-pencil-square" /> Custom Reports
                      </Link>
                    </div>
                  </div>
                </ul>
              </li>
            </ul>
            {/* Right Section */}
            <div className="d-flex align-items-center text-center gap-1">
              <form className="d-flex form_search" role="search">
                <input
                  className="form-control form-control-sm me-1"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </form>
              <ul className="navbar-nav flex-row gap-0">
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    <i className="bi bi-headset" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    <i className="bi bi-person" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
