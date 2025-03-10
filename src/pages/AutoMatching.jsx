import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../asserts/background.avif";

const AutoMatching = () => {
  const navigate = useNavigate();
  const [court, setCourt] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!court || !time) {
      alert("Vui lòng chọn sân và giờ!");
      return;
    }
    navigate("/matching-result");
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
          Tự động ghép đôi
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
              Sân
            </label>
            <select
              value={court}
              onChange={(e) => setCourt(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #e5e7eb",
                borderRadius: "0.5rem",
                fontSize: "1rem",
              }}
            >
              <option value="">Chọn sân</option>
              <option value="Sân A">Sân A</option>
              <option value="Sân B">Sân B</option>
              <option value="Sân C">Sân C</option>
            </select>
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
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              style={{
                width: "95%",
                padding: "0.75rem",
                border: "1px solid #e5e7eb",
                borderRadius: "0.5rem",
                fontSize: "1rem",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
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
            Bắt đầu ghép đôi
          </button>
        </form>
      </div>
    </div>
  );
};

export default AutoMatching;
