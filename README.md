# Smart Recipe Recommendation  

## Table of Contents  
- [Project Overview](#project-overview)  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Contributing](#contributing)  

## Project Overview  
The *Smart Recipe Recommendation* system is an AI-powered web application that helps users discover recipes based on the ingredients they have. Many people, especially students and busy professionals, struggle with meal planning and often have random ingredients at home but don’t know what to cook. This app provides recipe suggestions along with estimated cooking time and a health score to encourage healthier eating habits.  

*Outcome:* A user-friendly recipe recommendation system that simplifies meal planning by generating recipe ideas based on available ingredients.  

## Features  
- *Ingredient-Based Recipe Suggestions*  
  - Users can input available ingredients, and the system will generate relevant recipe suggestions.  
  - AI-powered matching ensures smart recipe recommendations.  

- *Estimated Cooking Time*  
  - Each recipe includes an estimated cooking time to help users plan their meals efficiently.  

- *Health Score for Recipes*  
  - Provides a health score for each recipe, considering factors like calorie content, nutritional value, and balance of ingredients.  

- *Step-by-Step Cooking Instructions*  
  - Clear and easy-to-follow steps for cooking each suggested recipe.  

## Technologies Used  
- *Frontend:* React.js, Tailwind CSS  
- *Backend:* Node.js, Express.js  
- *AI Integration:* OpenAI API (for recipe recommendation)  

## Installation  
### Prerequisites  
- *Node.js* (v14 or above)  
- *npm* or *yarn*  
- *MongoDB* instance  

### Steps  
#### 1. Clone the Repository  
```sh
git clone https://github.com/RiteshPx/recipe-suggestion.git  
cd recipe-suggestion
## Backend Setup

sh
cd new-back  
npm install


Configure environment variables in a .env file:


PORT=4000  
GOOGLE_AI_API_KEY = your_api_key


Start the backend server:

sh
node server.js


---

## Frontend Setup

sh
cd ../frontend  
npm install


Configure environment variables in a .env file:


REACT_APP_API_BASE_URL=http://localhost:4000


Start the frontend development server:

sh
npm run start


---

## Usage

### 1. Enter Ingredients
Users can enter the available ingredients in the input field.

### 2. Receive Recipe Suggestions
The system processes the input and displays a list of recipe options.

Each recipe includes:
- Estimated cooking time
- Health score

### 3. View Recipe Details
Users can click on a recipe to view step-by-step cooking instructions.

---

## Contributing

Contributions are welcome! Please follow these steps:

### 1. Fork the Repository

### 2. Create a Feature Branch

sh
git checkout -b feature/YourFeature


### 3. Commit Your Changes

sh
git commit -m "Add Your Feature"


### 4. Push to the Branch

sh
git push origin feature/YourFeature


### 5. Open a Pull Request
