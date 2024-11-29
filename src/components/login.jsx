import React from "react";
import "./style.css";

export const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 login-page">
      <div className="p-4 rounded w-25 border login-form">
        <h2 className="text-center mb-4">Login Page</h2>
        <form>
          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter your email"
              className="form-control rounded-0"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="form-control rounded-0"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
