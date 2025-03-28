import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg">
          Welcome to our website! We are passionate about providing the best recipes and culinary inspiration for food enthusiasts. Explore, cook, and enjoy!
        </p>
        <div className="mt-6">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;