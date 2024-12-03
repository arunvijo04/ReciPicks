import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [search, setSearch] = useState("");

  const API_KEY = "b6ffbbb6e7d14956851e4b23a864624c"; // Replace with your Spoonacular API key
  const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=10&query=${search}&includeIngredients=${ingredients.join(",")}`;

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        setRecipes(data.results); // Set the fetched recipes
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [API_URL]);

  const handleAddIngredient = (ingredient) => {
    if (!ingredients.includes(ingredient)) {
      setIngredients([...ingredients, ingredient]);
    }
  };

  const handleRemoveIngredient = (ingredient) => {
    setIngredients(ingredients.filter((item) => item !== ingredient));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  if (loading) {
    return <div className="text-center mt-8">Loading recipes...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-8">{error}</div>;
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Pantry</h2>
        <input
          type="text"
          placeholder="Add ingredients"
          className="w-full mb-4 p-2 border rounded"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value) {
              handleAddIngredient(e.target.value);
              e.target.value = "";
            }
          }}
        />
        <div className="flex flex-wrap">
          {ingredients.map((ingredient, index) => (
            <span
              key={index}
              className="bg-green-200 text-green-800 px-2 py-1 rounded-full m-1 cursor-pointer"
              onClick={() => handleRemoveIngredient(ingredient)}
            >
              {ingredient} &times;
            </span>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4">
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search recipes..."
            className="flex-1 p-2 border rounded mr-2"
            value={search}
            onChange={handleSearch}
          />
          <button
            onClick={() => setSearch("")}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Clear
          </button>
        </div>

        <h1 className="text-2xl font-bold mb-4">You can make {recipes.length} recipes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{recipe.title}</h2>
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeList;
