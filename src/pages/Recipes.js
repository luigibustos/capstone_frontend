import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const recipes = [
    {
      recipeName: "Recipe 1",
      roast: "Light",
      balance: "Standard",
      strenght: "Lighter",
    },
    {
      recipeName: "Recipe 2",
      roast: "Medium",
      balance: "Sweeter",
      strenght: "Stronger",
    },
    {
      recipeName: "Recipe 3",
      roast: "Dark",
      balance: "Brighter",
      strenght: "Strongest",
    },
    {
      recipeName: "Recipe 4",
      roast: "Medium",
      balance: "Sweeter",
      strenght: "Lighter",
    },
    {
      recipeName: "Recipe 4",
      roast: "Medium",
      balance: "Sweeter",
      strenght: "Lighter",
    },
    {
      recipeName: "Recipe 4",
      roast: "Medium",
      balance: "Sweeter",
      strenght: "Lighter",
    },
    {
      recipeName: "Recipe 4",
      roast: "Medium",
      balance: "Sweeter",
      strenght: "Lighter",
    },
    {
      recipeName: "Recipe 4",
      roast: "Medium",
      balance: "Sweeter",
      strenght: "Lighter",
    },
    {
      recipeName: "Recipe 4",
      roast: "Medium",
      balance: "Sweeter",
      strenght: "Lighter",
    },
    {
      recipeName: "Recipe 4",
      roast: "Medium",
      balance: "Sweeter",
      strenght: "Lighter",
    },
  ];
  return (
    <div className="min-h-screen w-screen p-14 bg-neutral-100">
      <h1 className="text-center font-Hind text-3xl sm:text-5xl my-10">
        Recipes Page
      </h1>
      <div className="w-full flex flex-wrap justify-center content-start gap-3 sm:gap-6">
        {recipes.map((recipe, idx) => {
          return (
            <Link key={idx} to={`/recipes/${idx}`}>
              <RecipeCard recipe={recipe} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
