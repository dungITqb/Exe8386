import React from 'react';
import { useParams, Link } from 'react-router-dom';

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

const CourtDetails = () => {
  const { id } = useParams();
  const court = courts[parseInt(id)];

  // Kiểm tra nếu court không tồn tại
  if (!court) {
    return <div style={{ padding: '1rem', maxWidth: '1200px', margin: '0 auto' }}>Sân không tồn tại</div>;
  }

  return (
    <div style={{ padding: '1rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{court.name}</h1>
      <p style={{ color: '#4b5563', marginBottom: '0.5rem' }}>Giá: {court.price}</p>
      <p style={{ color: '#4b5563', marginBottom: '1rem' }}>Địa chỉ: {court.address}</p>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        {court.images.map((image, idx) => (
          <img key={idx} src={image} alt={`Ảnh ${idx + 1} của ${court.name}`} style={{ width: '50%', borderRadius: '0.25rem' }} />
        ))}
      </div>
      <Link
        to="/booking" // Điều hướng đến trang đặt sân
        style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '0.25rem',
          textDecoration: 'none',
          display: 'inline-block'
        }}
      >
        Book
      </Link>
    </div>
  );
};

export default CourtDetails;