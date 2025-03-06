import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Calendar, Users } from 'lucide-react';

const Navbar = () => {
  const navStyle = {
    backgroundColor: '#1e40af',
    color: 'white',
    padding: '0.75rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        <Home size={20} />
        <span>Trang chủ</span>
      </Link>
      <Link to="/booking" style={linkStyle}>
        <Calendar size={20} />
        <span>Booking</span>
      </Link>
      <Link to="/auto-matching" style={linkStyle}>
        <Users size={20} />
        <span>Automatching</span>
      </Link>
    </nav>
  );
};

export default Navbar;