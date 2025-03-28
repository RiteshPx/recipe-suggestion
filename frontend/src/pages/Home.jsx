import React from "react";


const Home = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered Upload Button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-bold mb-4"></h1>
        <button className="bg-green-500 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md">
          Suggest
        </button>
      </div>
    </div>
  );
};

export default Home;