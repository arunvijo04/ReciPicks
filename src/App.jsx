import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import CookingTips from "./components/CookingTips";
import Tutorials from "./components/Tutorials.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/recipes" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/tips" element={<CookingTips />} />
            <Route path="/tutorials" element={<Tutorials />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
