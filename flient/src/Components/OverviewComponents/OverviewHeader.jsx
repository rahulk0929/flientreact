import React, { useEffect, useRef, useState } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

export default function OverviewHeader() {
  const calendarRef = useRef(null);
  const [selectedRange, setSelectedRange] = useState('Select Date');
  const [showCustomize, setShowCustomize] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [widgets, setWidgets] = useState({
    vehicleCount: true,
    overSpeedDuration: true,
    avgMileage: false,
  });
  const [rearranging, setRearranging] = useState(false);

  useEffect(() => {
    flatpickr(calendarRef.current, {
      inline: true,
      mode: 'range',
      onChange: function (selectedDates) {
        if (selectedDates.length === 2) {
          const start = selectedDates[0];
          const end = selectedDates[1];
          if (start <= end) {
            setSelectedRange(
              `${start.toLocaleDateString()} to ${end.toLocaleDateString()}`
            );
          } else {
            alert('Invalid date range! Please ensure the end date is after the start date.');
          }
        }
      },
    });
  }, []);

  const handleWidgetChange = (e) => {
    const { id, checked } = e.target;
    setWidgets((prev) => ({ ...prev, [id]: checked }));
  };

  const resetWidgets = () => {
    setWidgets({ vehicleCount: false, overSpeedDuration: false, avgMileage: false });
  };

  const saveWidgets = () => {
    const selected = Object.entries(widgets)
      .filter(([_, checked]) => checked)
      .map(([key]) => key.replace(/([A-Z])/g, ' $1'));
    alert('Selected Widgets: ' + selected.join(', '));
  };

  return (
    <div className="mt-4 fleet-dashboard-container container">
      <div className="row">
        <div className="col-md-4 col-12">
          <h4 className="fw-bold fleet-overview-title">Fleet Overview</h4>
        </div>
        <div className="col-md-8 col-12 d-flex flex-wrap justify-content-md-end">
          {/* Calendar Dropdown */}
          <div className="dropdown me-2 mt-2">
            <button
              className="btn btn-sm btn-outline-primary dropdown-toggle p-2"
              type="button"
              data-bs-toggle="dropdown"
            >
              <span className="calendar-range-text">{selectedRange}</span>{" "}
              <i className="fa fa-calendar" />
            </button>
            <div className="dropdown-menu p-4" style={{ minWidth: 300 }}>
              <div ref={calendarRef} className="calendar-inline" />
              <div className="mt-2 text-end">
                <button className="btn btn-sm btn-success me-2" data-bs-toggle="dropdown">
                  Save
                </button>
                <button className="btn btn-sm btn-secondary" data-bs-toggle="dropdown">
                  Cancel
                </button>
              </div>
            </div>
          </div>

          {/* Filter Button */}
          <button
            className="btn btn-outline-secondary btn-sm me-2 mt-2"
            onClick={() => setShowFilters(true)}
          >
            Filters
          </button>

          {/* Rearranging Buttons */}
          <div className="mt-2 me-2">
            {!rearranging ? (
              <button className="btn btn-sm p-2" onClick={() => setRearranging(true)}>
                Rearrange
              </button>
            ) : (
              <>
                <button className="btn btn-sm p-2 me-2" onClick={() => {
                  console.log('Saved');
                  setRearranging(false);
                }}>
                  Save
                </button>
                <button className="btn btn-sm p-2" onClick={() => {
                  console.log('Cancelled');
                  setRearranging(false);
                }}>
                  Cancel
                </button>
              </>
            )}
          </div>

          {/* Customize Button */}
          <button
            className="btn btn-outline-secondary btn-sm mt-2"
            onClick={() => setShowCustomize(true)}
          >
            Customize
          </button>
        </div>
      </div>

      <hr />

      {/* Filters Offcanvas */}
      <div className={`offcanvas offcanvas-end ${showFilters ? 'show' : ''}`} tabIndex={-1} style={{ visibility: showFilters ? 'visible' : 'hidden' }}>
        <div className="offcanvas-header">
          <h5>Filters</h5>
          <button className="btn-close" onClick={() => setShowFilters(false)} />
        </div>
        <div className="offcanvas-body">
          <p>Select filter options:</p>
          <select className="form-select">
            <option>Bahadurgarh</option>
            <option>Caparo Gujarat</option>
            <option>DE Diamond Electric</option>
            <option>Daido</option>
            <option>Denso International</option>
            <option>E&H</option>
            <option>Eicher Vehicle CNG Data</option>
            <option>IMASEN</option>
          </select>
        </div>
      </div>

      {/* Customize Offcanvas */}
      <div className={`offcanvas offcanvas-end ${showCustomize ? 'show' : ''}`} tabIndex={-1} style={{ visibility: showCustomize ? 'visible' : 'hidden' }}>
        <div className="offcanvas-header">
          <h5>Customize Dashboard</h5>
          <button className="btn-close" onClick={() => setShowCustomize(false)} />
        </div>
        <div className="offcanvas-body">
          <p>Select dashboard widgets:</p>

          {Object.keys(widgets).map((key) => (
            <div className="form-check form-switch" key={key}>
              <input
                className="form-check-input"
                type="checkbox"
                id={key}
                checked={widgets[key]}
                onChange={handleWidgetChange}
              />
              <label className="form-check-label" htmlFor={key}>
                {key.replace(/([A-Z])/g, ' $1')}
              </label>
            </div>
          ))}

          <div className="mt-3 text-end">
            <button className="btn btn-sm btn-danger me-2" onClick={resetWidgets}>
              Reset
            </button>
            <button className="btn btn-sm btn-success me-2" onClick={saveWidgets}>
              Save
            </button>
            <button className="btn btn-sm btn-secondary" onClick={() => setShowCustomize(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
