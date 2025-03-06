import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const courts = [
  {
    name: 'Sân 1',
    price: '200,000 VND/giờ',
    address: '123 Đường ABC, Quận 1',
    images: [
      'https://baobariavungtau.com.vn/dataimages/202405/original/images1948391_Pickleball3.jpg',
      'https://www.thethaothientruong.vn/uploads/san-pickleball-tphcm-2(1).JPG'
    ]
  },
  {
    name: 'Sân 2',
    price: '250,000 VND/giờ',
    address: '456 Đường XYZ, Quận 2',
    images: [
      'https://baobariavungtau.com.vn/dataimages/202405/original/images1948391_Pickleball3.jpg',
      'https://www.thethaothientruong.vn/uploads/san-pickleball-tphcm-2(1).JPG'
    ]
  },
  {
    name: 'Sân 3',
    price: '300,000 VND/giờ',
    address: '789 Đường DEF, Quận 3',
    images: [
      'https://baobariavungtau.com.vn/dataimages/202405/original/images1948391_Pickleball3.jpg',
      'https://www.thethaothientruong.vn/uploads/san-pickleball-tphcm-2(1).JPG'
    ]
  },
  {
    name: 'Sân 4',
    price: '350,000 VND/giờ',
    address: '101 Đường GHI, Quận 4',
    images: [
      'https://baobariavungtau.com.vn/dataimages/202405/original/images1948391_Pickleball3.jpg',
      'https://www.thethaothientruong.vn/uploads/san-pickleball-tphcm-2(1).JPG'
    ]
  }
];

const Home = () => {
  const [filteredCourts, setFilteredCourts] = useState(courts);

  const handleSearch = ({ district, date }) => {
    const filtered = courts.filter(court => {
      const matchesDistrict = district ? court.address.toLowerCase().includes(district.toLowerCase()) : true;
      // Giả sử ngày không ảnh hưởng đến kết quả tìm kiếm vì chưa có dữ liệu về lịch đặt
      return matchesDistrict;
    });
    setFilteredCourts(filtered);
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Chào mừng đến với Pickleball Booking</h1>

      {/* Component Search */}
      <Search onSearch={handleSearch} />

      {/* Danh sách các sân */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filteredCourts.map((court, index) => (
          <div key={index} style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'semibold', marginBottom: '0.5rem' }}>{court.name}</h2>
            <p style={{ color: '#4b5563', marginBottom: '1rem' }}>Địa chỉ: {court.address}</p>
            <Link to={`/court/${index}`} style={{ backgroundColor: '#2563eb', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem', textDecoration: 'none' }}>
              Chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;