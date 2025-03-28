import React from 'react';
import Navbar from '../shared/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-[#f76d4ef7] flex items-center justify-center">
      <Navbar></Navbar>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg">
          Welcome to our website! We are passionate about providing the best recipes and culinary inspiration for food enthusiasts. Explore, cook, and enjoy!
        </p>
        <div className="mt-6">
          <button className="px-6 py-2 bg-[#f76d4ef7] text-white rounded-lg shadow hover:bg-[#e65c3df7] transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;