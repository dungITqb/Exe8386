import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [district, setDistrict] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    onSearch({ district, date });
  };

  return (
    <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Nhập quận/huyện"
        value={district}
        onChange={(e) => setDistrict(e.target.value)}
        style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
      />
      <button
        onClick={handleSearch}
        style={{ backgroundColor: '#2563eb', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem', border: 'none', cursor: 'pointer' }}
      >
        Tìm kiếm
      </button>
    </div>
  );
};

export default Search;