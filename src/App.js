import "./App.css";
import { Routes, Route } from "react-router-dom";
// COMPONENTS
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// PAGES
import Home from "./pages/Home";
import Create from "./pages/Create";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
