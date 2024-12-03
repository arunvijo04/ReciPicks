import React from "react";
import { Link } from "react-router-dom";

const recipes = [
  { id: 1, name: "Spaghetti Bolognese" },
  { id: 2, name: "Chicken Curry" },
  { id: 3, name: "Pancakes" },
];

function RecipeList() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Recipes</h2>
      <ul className="grid gap-4">
        {recipes.map((recipe) => (
          <li key={recipe.id} className="p-4 bg-white shadow-md rounded-md">
            <Link to={`/recipe/${recipe.id}`} className="text-blue-600 hover:underline">
              {recipe.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
