import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams(); // Recipe ID from URL params
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "b6ffbbb6e7d14956851e4b23a864624c"; // Replace with your Spoonacular API key
  const API_URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch recipe details");
        }
        const data = await response.json();
        setRecipe(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-8">Loading recipe...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-8">{error}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      {recipe && (
        <>
          <h2 className="text-3xl font-bold text-pink-600">{recipe.title}</h2>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full max-w-lg mx-auto rounded-md shadow-lg mt-6"
          />
          <h3 className="text-lg font-semibold mt-8">Ingredients</h3>
          <ul className="list-disc list-inside">
            {recipe.extendedIngredients.map((ing, index) => (
              <li key={index}>
                {ing.originalString}
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mt-8">Instructions</h3>
          <ol className="list-decimal list-inside">
            {recipe.analyzedInstructions.length > 0 ? (
              recipe.analyzedInstructions[0].steps.map((step, index) => (
                <li key={index}>{step.step}</li>
              ))
            ) : (
              <p>No instructions available</p>
            )}
          </ol>
        </>
      )}
    </div>
  );
}

export default RecipeDetails;
