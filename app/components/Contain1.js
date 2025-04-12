import React from 'react';

const Contain1 = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img
        className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[620px] object-cover"
        src="/images/slide2.jpg"
        alt="Car"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-[2px_2px_5px_rgba(0,0,0,0.8)] animate-fade-in-up">
          Buy your dream car in budget
        </h1>
      </div>
    </div>
  );
};

export default Contain1;
