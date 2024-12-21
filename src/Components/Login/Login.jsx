import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../LoginSignup/LoginSignup.css"; // Reuse the same CSS for styling

export const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8080/page/login?email=${formData.username}&password=${formData.password}`
      );
      console.log("Login successful:", response.data);
      navigate("/home");
    } catch (error) {
      console.error("Error during login:", error);
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      {/* Left Section */}
      <div className="signup-left">
        <div className="overlay">
          <div className="logo"></div>
          <p className="subtitle">Welcome back! Login to continue</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="signup-right">
        <div className="form-container">
          <h2>Login</h2>
          <p className="form-description">Enter your credentials below</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            {error && <p className="error">{error}</p>}
            <div className="button-container">
              <button type="submit" className="btn">Login</button>
            </div>
            <hr className="divider" />
          </form>
          <p className="login-link">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};
