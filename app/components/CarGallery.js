"use client";
import React, { useState } from "react";

// Car data
const carData = [
  {
    id: 1,
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    owner: "First",
    kmDriven: 15000,
    fuel: "Petrol",
    transmission: "Automatic",
    price: 15000,
    image: "/images/toyota_corolla.jpg",
  },
  {
    id: 2,
    brand: "Honda",
    model: "Civic",
    year: 2019,
    owner: "Second",
    kmDriven: 25000,
    fuel: "Diesel",
    transmission: "Manual",
    price: 13000,
    image: "/images/honda_civic.webp",
  },
  {
    id: 3,
    brand: "Hyundai",
    model: "Creta",
    year: 2021,
    owner: "First",
    kmDriven: 10000,
    fuel: "Petrol",
    transmission: "Automatic",
    price: 18000,
    image: "/images/hyundai_creta.webp",
  },
  {
    id: 4,
    brand: "Maruti",
    model: "Swift",
    year: 2018,
    owner: "Second",
    kmDriven: 30000,
    fuel: "Petrol",
    transmission: "Manual",
    price: 9000,
    image: "/images/maruti_swift.webp",
  },
  {
    id: 5,
    brand: "Kia",
    model: "Seltos",
    year: 2022,
    owner: "First",
    kmDriven: 8000,
    fuel: "Diesel",
    transmission: "Automatic",
    price: 20000,
    image: "/images/kia_seltos.jpg",
  },
  {
    id: 6,
    brand: "Ford",
    model: "EcoSport",
    year: 2017,
    owner: "Third",
    kmDriven: 50000,
    fuel: "Petrol",
    transmission: "Manual",
    price: 11000,
    image: "/images/ford_ecosport.avif",
  },
  {
    id: 7,
    brand: "Tata",
    model: "Nexon EV",
    year: 2021,
    owner: "First",
    kmDriven: 12000,
    fuel: "Petrol",
    transmission: "Automatic",
    price: 16000,
    image: "/images/tata_nexon.webp",
  },
  {
    id: 8,
    brand: "Mahindra",
    model: "XUV300",
    year: 2020,
    owner: "Second",
    kmDriven: 18000,
    fuel: "Diesel",
    transmission: "Manual",
    price: 17000,
    image: "/images/mahindra_xuv300.WEBP",
  },
  {
    id: 9,
    brand: "Volkswagen",
    model: "Polo",
    year: 2019,
    owner: "Second",
    kmDriven: 22000,
    fuel: "Petrol",
    transmission: "Manual",
    price: 12500,
    image: "/images/volkswagen_polo.jpg",
  },
  {
    id: 10,
    brand: "BMW",
    model: "520d",
    year: 2018,
    owner: "First",
    kmDriven: 20000,
    fuel: "Diesel",
    transmission: "Automatic",
    price: 8000,
    image: "/images/BMW520d.WEBP",
  },
  {
    id: 11,
    brand: "Nissan",
    model: "Magnite",
    year: 2022,
    owner: "First",
    kmDriven: 9000,
    fuel: "Petrol",
    transmission: "Automatic",
    price: 15500,
    image: "/images/nissan_magnite.avif",
  },
  {
    id: 12,
    brand: "Skoda",
    model: "Rapid",
    year: 2019,
    owner: "Second",
    kmDriven: 24000,
    fuel: "Diesel",
    transmission: "Manual",
    price: 13500,
    image: "/images/skoda_rapid.webp",
  },
];

// Utility to get unique dropdown values
const getUniqueOptions = (data, key) => [...new Set(data.map((car) => car[key]))];

const CarGallery = () => {
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    fuel: "",
    transmission: "",
    owner: "",
    year: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredCars = carData.filter((car) =>
    Object.entries(filters).every(([key, value]) => !value || String(car[key]) === value)
  );

  return (
    <div className="px-4 py-6 max-w-screen-xl mx-auto bg-purple-50 min-h-screen">
      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        {["brand", "model", "fuel", "transmission", "owner", "year"].map((key) => (
          <select
            key={key}
            name={key}
            value={filters[key]}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">All {key.charAt(0).toUpperCase() + key.slice(1)}</option>
            {getUniqueOptions(carData, key)
              .sort((a, b) => (key === "year" ? b - a : a.localeCompare(b)))
              .map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
          </select>
        ))}
      </div>

      {/* Car Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white border rounded-xl overflow-hidden shadow-md transform hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-48 sm:h-52 md:h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                  {car.brand} {car.model}
                </h2>
                <p className="text-sm text-gray-600">
                  {car.year} • {car.owner} Owner
                </p>
                <p className="text-sm text-gray-600">
                  {car.kmDriven.toLocaleString()} Km • {car.fuel} • {car.transmission}
                </p>
                <p className="text-purple-600 font-bold text-base md:text-lg mt-2">
                  ${car.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-sm">
            No cars match your filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default CarGallery;
