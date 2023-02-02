// HOOKS
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./data";
import { useState } from "react";

// COMPONENTS
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// PAGES
import Home from "./pages/Home";
import Create from "./pages/Create";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import Auth from "./pages/Auth";

function App() {
  const { Provider: UserInfo } = UserContext;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <div className="">
      <UserInfo
        value={{
          isAuthenticated,
          setAuth: setIsAuthenticated,
          currentUser,
          setUser: setCurrentUser,
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
        <Footer />
      </UserInfo>
    </div>
  );
}

export default App;
