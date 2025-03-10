import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2025 Pickleball Booking. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
