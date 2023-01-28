import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const testURL = "https://api.sampleapis.com/coffee/hot";
  const [recipes, setRecipes] = useState([]);
  const getRecipeData = async () => {
    try {
      const response = await fetch(testURL);
      const data = await response.json();
      // console.log(data);
      setRecipes(data);
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
                <Link key={idx} to={`/recipes/${recipe.id}`}>
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
