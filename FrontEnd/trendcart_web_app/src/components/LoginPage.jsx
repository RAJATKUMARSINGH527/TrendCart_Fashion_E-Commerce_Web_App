import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login-cont">
      <h1 className="login-heading">PLEASE LOG IN</h1>
      <p className="login-subtext">Login to view items in your wishlist.</p>

      <div className="device-icon">
        <div className="phone-outline"></div>
        <div className="menu-dots">≡</div>
      </div>
      <Link to="/login">
        <button className="login-btn">LOGIN</button>
      </Link>

      {/* <div className="notification-bell"> */}

      {/* </div> */}
    </div>
  );
};

export default LoginPage;
