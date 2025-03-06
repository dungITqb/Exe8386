import React from 'react';

const Booking = () => {
  const containerStyle = {
    padding: '1rem',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.25rem',
    marginBottom: '1rem',
  };

  const buttonStyle = {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0.5rem',
    borderRadius: '0.25rem',
    width: '100%',
    border: 'none',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Đặt sân</h1>
      <form style={formStyle}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Ngày</label>
          <input type="date" style={inputStyle} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Giờ</label>
          <input type="time" style={inputStyle} />
        </div>
        <button type="submit" style={buttonStyle}>Xác nhận đặt sân</button>
      </form>
    </div>
  );
};

export default Booking;
