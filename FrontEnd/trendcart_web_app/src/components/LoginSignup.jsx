import React, { useState } from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phoneNumber || phoneNumber.length < 10) {
      setError("Please enter a valid phone number");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "An error occurred");
      }

      setMessage(data.message);
      setError("");
    } catch (err) {
      setError(err.message || "An error occurred");
      setMessage("");
    }
  };

  return (
    <div className="login-container">
      <div className="promo-section">
        <div className="promo-image">
          <img
            src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg"
            alt="Promo character"
          />
        </div>
      </div>

      <div className="login-form-container">
        <h2 className="login-title">
          Login <span>or</span> Signup
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="phone-input">
            <span className="country-code">+91</span>
            <input
              type="tel"
              placeholder="Mobile Number*"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <p className="terms-text">
            By continuing, I agree to the{" "}
            <a href="/terms" className="terms-link">
              Terms of Use
            </a>{" "}
            &{" "}
            <a href="/privacy" className="terms-link">
              Privacy Policy
            </a>
          </p>

          <button type="submit" className="continue-btn">
            CONTINUE
          </button>

          {error && <p className="error-message">{error}</p>}
          {message && <p className="success-message">{message}</p>}
        </form>

        <div className="help-section">
          <p>
            Have trouble logging in?{" "}
            <a href="/help" className="help-link">
              Get help
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
