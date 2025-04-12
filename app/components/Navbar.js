'use client';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

export default function Navbar() {
  const [location, setLocation] = useState('Mumbai');

  const locations = ['Mumbai', 'Navi Mumbai', 'Hyderabad', 'Chennai'];

  return (
    <nav className="bg-white shadow-md px-4 py-3 w-full">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-600">CARFINDER</div>

        {/* Search Input */}
        <div className="w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Location Dropdown */}
        <div>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Wishlist Heart Icon */}
        <div className="text-purple-600 hover:text-purple-800 cursor-pointer">
          <FaHeart size={24} />
        </div>
      </div>
    </nav>
  );
}
