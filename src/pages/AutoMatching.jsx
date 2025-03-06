import React from 'react';

const AutoMatching = () => {
  const containerStyle = {
    padding: '1rem',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const cardStyle = {
    backgroundColor: 'white',
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  };

  const buttonStyle = {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0.5rem',
    borderRadius: '0.25rem',
    width: '100%',
    border: 'none',
    marginTop: '0.5rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Tự động ghép đôi người chơi</h1>
      <div style={cardStyle}>
        <p style={{ color: '#4b5563' }}>Đang tìm kiếm người chơi phù hợp...</p>
        <button style={buttonStyle}>Bắt đầu ghép đôi</button>
      </div>
    </div>
  );
};

export default AutoMatching;
