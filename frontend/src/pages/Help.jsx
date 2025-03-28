import React from 'react'

const Help = () => {
  return (
    <div>
      <h1>Help Page</h1>
      <p>Welcome to the Recipe Suggest and Health Score Help Page!</p>
      <h2>How to Use the Website</h2>
      <ul>
        <li>
          <strong>Search Recipes:</strong> Use the search bar to find recipes based on ingredients or dish names.
        </li>
        <li>
          <strong>Get Suggestions:</strong> Our website will suggest recipes based on your preferences.
        </li>
        <li>
          <strong>Health Score:</strong> Each recipe comes with a health score to help you make informed choices.
        </li>
      </ul>
      <h2>FAQs</h2>
      <p>
        <strong>Q:</strong> How is the health score calculated?<br />
        <strong>A:</strong> The health score is calculated based on the nutritional value of the recipe, including calories, fat, protein, and other factors.
      </p>
      <p>
        <strong>Q:</strong> Can I save my favorite recipes?<br />
        <strong>A:</strong> Yes, you can create an account and save your favorite recipes for easy access.
      </p>
      <h2>Contact Us</h2>
      <p>If you have any questions or need further assistance, feel free to contact us at support@recipesuggest.com.</p>
    </div>
  );
};

export default Help;