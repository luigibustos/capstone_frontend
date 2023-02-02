// HOOKS
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import RecipeCard from "../components/RecipeCard";
import { UserContext } from "../data";

const Recipes = () => {
  const testURL = "http://localhost:4000/recipes";
  const { currentUser } = useContext(UserContext);
  const currentUserID = currentUser._id;
  const [recipes, setRecipes] = useState([]);
  const getRecipeData = async () => {
    try {
      const response = await fetch(testURL);
      const data = await response.json();
      const userRecipes = data.filter((item) => item.owner === currentUserID);
      setRecipes(userRecipes);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRecipeData();
  }, []);

  const loading = () => {
    return <p>Loading...</p>;
  };

  return (
    <div className="min-h-screen w-screen p-14 bg-neutral-100">
      <h1 className="text-center font-Hind text-3xl sm:text-5xl my-10">
        Recipes Page
      </h1>
      <div className="w-full flex flex-wrap justify-center content-start gap-3 sm:gap-6">
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
