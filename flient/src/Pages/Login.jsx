import React from "react";
import eglogo from "../assets/Images/eglogo.png";
export default function Login() {
  return (
    <>
      <div className="login-form-container">
        <div className="login-form-top position-absolute w-100 h-100" />
        <div className="login-form-bottom position-absolute w-100 h-100" />
        <div className="login-form-center text-center">
          <h3 className="fw-bold text-decoration-underline">Please Sign In</h3>
          <img src={eglogo} style={{ height: 100, width: 200 }} />
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email or Username"
                required=""
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required=""
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
