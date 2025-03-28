import React from 'react'
import Navbar from '../shared/Navbar';

const Help = () => {
  return (
    <div className="help-page bg-gray-100 min-h-screen p-6">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Help Page</h1>
        <p className="text-gray-600 mb-6">
          Welcome to the Recipe Suggest and Health Score Help Page!
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Use the Website</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li className="mb-2">
            <strong className="text-gray-800">Search Recipes:</strong> Use the search bar to find recipes based on ingredients or dish names.
          </li>
          <li className="mb-2">
            <strong className="text-gray-800">Get Suggestions:</strong> Our website will suggest recipes based on your preferences.
          </li>
          <li className="mb-2">
            <strong className="text-gray-800">Health Score:</strong> Each recipe comes with a health score to help you make informed choices.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">FAQs</h2>
        <p className="text-gray-600 mb-4">
          <strong className="text-gray-800">Q:</strong> How is the health score calculated?<br />
          <strong className="text-gray-800">A:</strong> The health score is calculated based on the nutritional value of the recipe, including calories, fat, protein, and other factors.
        </p>
        <p className="text-gray-600 mb-6">
          <strong className="text-gray-800">Q:</strong> Can I save my favorite recipes?<br />
          <strong className="text-gray-800">A:</strong> Yes, you can create an account and save your favorite recipes for easy access.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions or need further assistance, feel free to contact us at <a href="mailto:support@recipesuggest.com" className="text-blue-500 underline">support@recipesuggest.com</a>.
        </p>
      </div>
    </div>
  );
};

export default Help;