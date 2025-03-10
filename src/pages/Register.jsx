import React from "react";
import backgroundImage from "../asserts/background.avif";

const Register = () => {
  const containerStyle = {
    paddingTop: "0.5rem", // Tăng padding để form rộng hơn
    maxWidth: "1000px", // Tăng chiều rộng form
    margin: "0 auto",
  };

  const formStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Thêm opacity
    padding: "1.5rem", // Tăng padding để form lớn hơn
    borderRadius: "0.75rem",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    width: "600px",
    height: "350px",
  };

  const inputStyle = {
    justifyContent: "center",
    width: "90%",
    padding: "1rem", // Tăng kích thước padding để input lớn hơn
    fontSize: "0.8rem", // Tăng kích thước chữ
    border: "1px solid #e5e7eb",
    borderRadius: "0.5rem",
    marginBottom: "1rem",
    fontWeight: "bold",
    margin: "0 auto", // Căn giữa ô input
  };

  const buttonStyle = {
    background: "#ff7f50",
    color: "white",
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "0.5rem",
    width: "50%",
    border: "none",
    marginTop: "20px",
    display: "block",
    margin: "20px auto",
    fontWeight: "bold",
  };

  const forgotPasswordStyle = {
    marginTop: "10px",
    fontSize: "0.9rem",
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "bold",
    alignSelf: "center",
    marginLeft: "-50px",
    marginRight: "30px",
  };

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "50vh", // Giảm chiều dài tối thiểu
        maxHeight: "90vh", // Giới hạn chiều dài tối đa
        height: "413px", // Cố định chiều cao hợp lý
      }}
    >
      <div style={containerStyle}>
        <form style={formStyle}>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "0.8rem",
              marginTop: "0",
            }}
          >
            Đăng ký
          </h1>
          <div style={{ marginLeft: "40px", marginBottom: "10px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Email
            </label>
            <input type="email" style={inputStyle} placeholder="Enter email" />
          </div>
          <div style={{ marginLeft: "40px", marginBottom: "10px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Mật khẩu
            </label>
            <input
              type="password"
              style={inputStyle}
              placeholder="Enter password"
            />
          </div>
          <div style={{ marginLeft: "40px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Xác nhận mật khẩu
            </label>
            <input
              type="password"
              style={inputStyle}
              placeholder="Enter password"
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <button type="submit" style={buttonStyle}>
              Đăng nhập
            </button>
          </div>
        </form>
      </div>{" "}
    </div>
  );
};

export default Register;
