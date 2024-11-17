import React from 'react';

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4 px-5">
      {/* Headings */}
      <h1 className="font-semibold text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans">
        <span className="text-black">You </span>
        <span className="text-gray-500">Learn </span>
        <span className="text-black">a </span>
        <span className="text-black">lot </span>
        <span className="text-black">more </span>
      </h1>
      <h1 className="font-semibold text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans">
        <span className="text-black">when </span>
        <span className="text-black">you </span>
        <span className="text-gray-500">Lose </span>
      </h1>
      <h1 className="font-semibold text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans">
        <span className="text-black">than </span>
        <span className="text-black">when </span>
        <span className="text-black">you </span>
        <span className="text-gray-500">Win 🤝</span>
      </h1>
    </div>
  );
};

export default Home;
