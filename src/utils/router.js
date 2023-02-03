// HOOKS
import { Routes, Route } from "react-router-dom";

// PAGES
import Auth from "../pages/Auth";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Recipes from "../pages/Recipes";
import RecipeDetails from "../pages/RecipeDetails";

export default (
  <Routes>
    <Route path="/" element={<Auth />} />
    <Route path="/home" element={<Home />} />
    <Route path="/create" element={<Create />} />
    <Route path="/recipes" element={<Recipes />} />
    <Route path="/recipes/:id" element={<RecipeDetails />} />
  </Routes>
);
