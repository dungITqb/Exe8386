import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import backgroundImage from "../asserts/background.avif";
import { FaStar } from "react-icons/fa";

const courts = [
  {
    name: "Sân 1",
    description:
      "Sân pickleball Hòa Xuân, Đà Nẵng, với mặt sân chất lượng, không gian thoáng đãng, tiện ích đầy đủ, là nơi lý tưởng để trải nghiệm và thi đấu pickleball.",
    price: "90.000 ~ 140.000 VND",
    address: "123 Đường ABC, Quận 1",
    images: [
      "https://baobariavungtau.com.vn/dataimages/202405/original/images1948391_Pickleball3.jpg",
      "https://www.thethaothientruong.vn/uploads/san-pickleball-tphcm-2(1).JPG",
    ],
  },
  {
    name: "Sân 2",
    price: "100.000 ~ 150.000 VND",
    description:
      "Sân Pickleball Mỹ An, Đà Nẵng – Mặt sân hiện đại, không gian năng động, nơi kết nối đam mê pickleball.",
    address: "456 Đường XYZ, Quận 2",
    images: [
      "https://baobariavungtau.com.vn/dataimages/202405/original/images1948391_Pickleball3.jpg",
      "https://www.thethaothientruong.vn/uploads/san-pickleball-tphcm-2(1).JPG",
    ],
  },
  {
    name: "Sân 3",
    price: "90.000 ~ 140.000 VND",
    description:
      "Sân Pickleball Sơn Trà, Đà Nẵng – Chất lượng hàng đầu, môi trường lý tưởng, trải nghiệm pickleball đỉnh cao.",
    address: "789 Đường DEF, Quận 3",
    images: [
      "https://baobariavungtau.com.vn/dataimages/202405/original/images1948391_Pickleball3.jpg",
      "https://www.thethaothientruong.vn/uploads/san-pickleball-tphcm-2(1).JPG",
    ],
  },
  {
    name: "Sân 4",
    price: "100.000 ~ 150.000 VND",
    description:
      "Sân Pickleball Ngũ Hành Sơn, Đà Nẵng – Sân đẹp, tiện nghi chuẩn, điểm đến lý tưởng cho mọi trận đấu pickleball.",
    address: "101 Đường GHI, Quận 4",
    images: [
      "https://baobariavungtau.com.vn/dataimages/202405/original/images1948391_Pickleball3.jpg",
      "https://www.thethaothientruong.vn/uploads/san-pickleball-tphcm-2(1).JPG",
    ],
  },
];

const CourtDetails = () => {
  const { id } = useParams();
  const court = courts[parseInt(id)];
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  if (!court) {
    return (
      <div style={{ padding: "1rem", maxWidth: "1200px", margin: "0 auto" }}>
        Sân không tồn tại
      </div>
    );
  }

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <div
        style={{
          padding: "1rem",
          maxWidth: "800px",
          margin: "50px auto",
          backgroundColor: "rgba(232, 227, 227, 0.8)",
          borderRadius: "27px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div style={{ flex: 1, textAlign: "left" }}>
            <h2
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              {court.name}
            </h2>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              {court.description}
            </p>
          </div>
          <div style={{ flex: 1, textAlign: "right" }}>
            <div>
              {[...Array(5)].map((_, index) => {
                const currentRating = index + 1;
                return (
                  <FaStar
                    key={index}
                    size={30}
                    style={{ cursor: "pointer", transition: "color 0.2s" }}
                    color={
                      currentRating <= (hover || rating) ? "#FFD700" : "#b0b0b0"
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(currentRating)}
                  />
                );
              })}
            </div>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                marginTop: "0.5rem",
              }}
            >
              Địa chỉ: {court.address}
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#008000",
              }}
            >
              {court.price}
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "1rem",
            justifyContent: "center",
          }}
        >
          {court.images.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`Ảnh ${idx + 1}`}
              style={{
                width: "48%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
                border: "2px solid #ddd",
              }}
            />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1rem",
          }}
        >
          <Link
            to="/booking"
            style={{
              backgroundColor: "rgb(233 113 49)",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "10px",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Đặt sân
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourtDetails;
