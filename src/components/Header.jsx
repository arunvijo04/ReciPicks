import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Recipicks</h1>
        <nav className="flex gap-4">
          <Link to="/recipes" className="hover:underline">Recipes</Link>
          <Link to="/tips" className="hover:underline">Cooking Tips</Link>
          <Link to="/tutorials" className="hover:underline">Tutorials</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
