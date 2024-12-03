import React from "react";
import { useParams } from "react-router-dom";

const recipes = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    ingredients: ["Spaghetti", "Meat", "Tomato Sauce"],
    steps: ["Boil spaghetti", "Cook meat", "Mix with sauce"],
  },
  {
    id: 2,
    name: "Chicken Curry",
    ingredients: ["Chicken", "Curry Powder", "Coconut Milk"],
    steps: ["Cook chicken", "Add spices", "Pour coconut milk"],
  },
  {
    id: 3,
    name: "Pan Cakes",
    ingredients: ["Chicken", "Curry Powder", "Coconut Milk"],
    steps: ["Cook chicken", "Add spices", "Pour coconut milk"],
  },
];

function RecipeDetails() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold">{recipe.name}</h2>
      <h3 className="text-lg font-semibold mt-4">Ingredients</h3>
      <ul className="list-disc list-inside">
        {recipe.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      <h3 className="text-lg font-semibold mt-4">Steps</h3>
      <ol className="list-decimal list-inside">
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetails;
