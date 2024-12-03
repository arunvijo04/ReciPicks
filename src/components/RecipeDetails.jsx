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
    <div className="container mx-auto py-8 px-4">
      {recipe && (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Recipe Header */}
          <div className="relative">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white">
              <h2 className="text-3xl font-bold">{recipe.title}</h2>
            </div>
          </div>

          {/* Recipe Content */}
          <div className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Ingredients */}
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-semibold text-pink-600 mb-4">
                  Ingredients
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  {recipe.extendedIngredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="text-gray-700 text-sm flex items-center"
                    >
                      <span className="inline-block w-4 h-4 mr-2 rounded-full bg-green-400"></span>
                      {ingredient.original}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions */}
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-semibold text-pink-600 mb-4">
                  Instructions
                </h3>
                {recipe.analyzedInstructions.length > 0 ? (
                  <ol className="list-decimal list-inside space-y-3 text-gray-700 text-sm">
                    {recipe.analyzedInstructions[0].steps.map((step, index) => (
                      <li key={index} className="leading-relaxed">
                        {step.step}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-gray-500">No instructions available</p>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 p-4 text-center">
            <p className="text-sm text-gray-600">
              Preparation time: {recipe.readyInMinutes} minutes | Servings:{" "}
              {recipe.servings}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
