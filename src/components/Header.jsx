import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#3CB371",
    color: "white",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const buttonStyle = {
    backgroundColor: "white",
    color: "#2563eb",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <header style={headerStyle}>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Pickleball Booking
        </h1>
      </Link>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/login" style={buttonStyle}>
          Đăng nhập
        </Link>
        <Link to="/register" style={buttonStyle}>
          Đăng ký
        </Link>
      </div>
    </header>
  );
};

export default Header;
