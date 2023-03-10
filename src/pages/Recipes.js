// HOOKS
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../data";
import { getUserToken } from "../utils/authToken";

// COMPONENTS
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const token = getUserToken();
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  // const currentUserID = currentUser._id;
  // const URL = `https://capstone-project-backend.herokuapp.com/users/${currentUserID}`;
  const [recipes, setRecipes] = useState([]);

  const getUserId = () => {
    if (currentUser) {
      const currentUserID = currentUser._id;
      const URL = `https://capstone-project-backend.herokuapp.com/users/${currentUserID}`;
      getRecipeData(URL);
    } else {
      navigate("/");
    }
  };

  const getRecipeData = async (URL) => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      const userRecipes = await data.recipes;
      setRecipes(userRecipes);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      getUserId();
      // getRecipeData();
    }
  }, []);

  const loading = () => {
    return <p>Loading...</p>;
  };

  return (
    <div className="min-h-screen w-screen p-14 bg-neutral-50">
      <h1 className="text-center font-Hind text-3xl sm:text-5xl my-10 uppercase">
        {currentUser ? currentUser.username : null}'s Recipes
      </h1>
      <div className="w-full flex flex-wrap justify-center content-start gap-4 sm:gap-6">
        {recipes
          ? recipes.map((recipe, idx) => {
              return (
                <Link key={idx} to={`/recipes/${recipe._id}`}>
                  <RecipeCard recipe={recipe} />
                </Link>
              );
            })
          : loading()}
      </div>
    </div>
  );
};

export default Recipes;
