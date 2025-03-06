import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CourtDetails from './pages/CourtDetails';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import AutoMatching from './pages/AutoMatching';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Header />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/court/:id" element={<CourtDetails />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/auto-matching" element={<AutoMatching />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
