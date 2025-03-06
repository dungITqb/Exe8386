import React from 'react';

const Payment = () => {
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
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Thanh toán</h1>
      <form style={formStyle}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Thẻ tín dụng</label>
          <input type="text" style={inputStyle} placeholder="1234 5678 9012 3456" />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Ngày hết hạn</label>
          <input type="text" style={inputStyle} placeholder="MM/YY" />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>CVV</label>
          <input type="text" style={inputStyle} placeholder="123" />
        </div>
        <button type="submit" style={buttonStyle}>Thanh toán</button>
      </form>
    </div>
  );
};

export default Payment;
