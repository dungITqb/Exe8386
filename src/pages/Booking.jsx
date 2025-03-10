import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../asserts/background.avif";

const Booking = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment");
  };

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "30vh",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(232, 227, 227, 0.8)",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "500px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}
        >
          Đặt sân
        </h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem", textAlign: "left" }}>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              Ngày
            </label>
            <input
              type="date"
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #e5e7eb",
                borderRadius: "0.5rem",
                fontSize: "1rem",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "1rem", textAlign: "left" }}>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              Giờ
            </label>
            <input
              type="time"
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #e5e7eb",
                borderRadius: "0.5rem",
                fontSize: "1rem",
              }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#fb923c",
              color: "white",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              width: "283px",
              height: "40px",
              border: "none",
              fontSize: "1rem",
              fontWeight: "bold",
              display: "block",
              margin: "0 auto",
            }}
          >
            Xác nhận đặt
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
