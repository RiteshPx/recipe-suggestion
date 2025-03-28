import React from 'react'

const RecipetCard = ({ recipe }) => {
    return (
        <div> 
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full sm:w-96">
        <h2 className="text-xl font-semibold mb-2">{recipe.recipe_name}</h2>
        <p className="text-sm text-gray-500 mb-2">Health Score: {recipe.health_score}/10</p>
        <h3 className="font-medium mb-1">Ingredients:</h3>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3 className="font-medium mb-1">Instructions:</h3>
        <ol className="list-decimal list-inside text-sm text-gray-600">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      </div>
    );
  };
  

export default RecipetCard
