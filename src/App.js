import "./App.css";
import { Routes, Route } from "react-router-dom";
// COMPONENTS
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// PAGES
import Home from "./pages/Home";
import Create from "./pages/Create";
import Recipes from "./pages/Recipes";

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
