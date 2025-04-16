'use client';

import { useState } from 'react';

export default function SearchFilter({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="max-w-xl mx-auto mb-8">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>
  );
}
