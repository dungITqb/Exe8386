import React, { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../asserts/background.avif";
import { FaSearch } from "react-icons/fa";

const courts = [
  {
    name: "Sân A",
    price: "90.000 ~ 140.000 VND",
    address: "123 Đường ABC, Quận 1",
    images: [
      "https://baobariavungtau.com.vn/dataimages/202405/original/images1948391_Pickleball3.jpg",
    ],
  },
  {
    name: "Sân B",
    price: "100.000 ~ 150.000 VND",
    address: "456 Đường XYZ, Quận 2",
    images: [
      "https://www.thethaothientruong.vn/uploads/san-pickleball-tphcm-2(1).JPG",
    ],
  },
  {
    name: "Sân c",
    price: "90.000 ~ 140.000 VND",
    address: "123 Đường ABC, Quận 1",
    images: [
      "https://baobariavungtau.com.vn/dataimages/202405/original/images1948391_Pickleball3.jpg",
    ],
  },
  {
    name: "Sân d",
    price: "100.000 ~ 150.000 VND",
    address: "456 Đường XYZ, Quận 2",
    images: [
      "https://www.thethaothientruong.vn/uploads/san-pickleball-tphcm-2(1).JPG",
    ],
  },
  {
    name: "Sân e",
    price: "90.000 ~ 140.000 VND",
    address: "123 Đường ABC, Quận 1",
    images: [
      "https://baobariavungtau.com.vn/dataimages/202405/original/images1948391_Pickleball3.jpg",
    ],
  },
  {
    name: "Sân f",
    price: "100.000 ~ 150.000 VND",
    address: "456 Đường XYZ, Quận 2",
    images: [
      "https://www.thethaothientruong.vn/uploads/san-pickleball-tphcm-2(1).JPG",
    ],
  },
];

const Home = () => {
  const [filteredCourts, setFilteredCourts] = useState(courts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredCourts(
      courts.filter(
        (court) =>
          court.name.toLowerCase().includes(value) ||
          court.address.toLowerCase().includes(value)
      )
    );
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "2rem",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "150vh",
      }}
    >
      {/* Bọc thanh tìm kiếm trong khung trắng */}
      <div
        className="search-box-container"
        style={{
          background: "white",
          borderRadius: "15px",
          padding: "1rem",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "80%",
          maxWidth: "800px",
          marginBottom: "2rem",
          marginTop: "-5rem",
        }}
      >
        {/* Thanh tìm kiếm */}
        <div
          className="search-bar"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
            Welcome to Pickleball Booking
          </span>
          <div
            className="search-input"
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "0.5rem",
              flex: 1,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <FaSearch style={{ marginRight: "0.5rem", color: "#ccc" }} />
            <input
              type="text"
              placeholder="Tìm kiếm sân theo tên hoặc địa chỉ"
              style={{
                border: "none",
                outline: "none",
                flex: 1,
                padding: "0.5rem",
                borderRadius: "5px",
                height: "5px",
                fontWeight: "bold",
              }}
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "0.5rem",
              marginRight: "0.5rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              height: "20px",
              fontWeight: "bold",
              color: "#757575",
            }}
          />
          <button
            style={{
              background: "#ff7f50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "0.5rem 1rem",
              cursor: "pointer",
            }}
          >
            Tìm kiếm
          </button>
        </div>
      </div>

      {/* Danh sách sân */}
      <div
        className="court-list"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        {filteredCourts.map((court, index) => (
          <div
            key={index}
            className="court-card"
            style={{
              width: "45%",
              background: "white",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src={court.images[0]}
              alt={court.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ margin: "0.5rem 0" }}>{court.name}</h3>
              <p style={{ margin: "0.5rem 0", color: "gray" }}>
                {court.address}
              </p>
              <p style={{ margin: "0.5rem 0", fontWeight: "bold" }}>
                {court.price}
              </p>
              <Link
                to={`/court/${index}`}
                style={{
                  background: "#ff7f50",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "0.5rem 1rem",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                Chi tiết
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
