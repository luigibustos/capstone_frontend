import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const RecipeDetails = () => {
  const { id } = useParams();
  const testURL = `http://localhost:4000/recipes/${id}`;
  const [recipeDetails, setRecipeDetails] = useState([]);

  const getRecipeDetailsData = async () => {
    try {
      const response = await fetch(testURL);
      const data = await response.json();
      console.log("Single Recipe", data);
      setRecipeDetails(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRecipeDetailsData();
  }, []);

  const loaded = () => {
    console.log(recipeDetails.pours);
    return (
      <div className="min-h-screen w-full bg-purple-400 pt-14 text-center text-3xl px-8">
        <p>{recipeDetails.recipeName}</p>
        <p>Serving Size: {recipeDetails.servingSize}</p>
        <p>Roast: {recipeDetails.roast}</p>
        <p>Balance: {recipeDetails.balance}</p>
        <p>Strength: {recipeDetails.strength}</p>
        <p>Coffee Amount: {recipeDetails.coffeeAmount} grams</p>
        <p>Water Amount: {recipeDetails.waterAmount} grams</p>
        <p>Water Temperature: {recipeDetails.waterTemp} F</p>
        {recipeDetails.pours ? (
          recipeDetails.pours.map((pour, idx) => {
            return <p key={idx}>{pour.amount}</p>;
          })
        ) : (
          <p>Loading...</p>
        )}
        <Link to="/recipes">Recipes Page</Link>
      </div>
    );
  };

  const loading = () => {
    return <p>Loading...</p>;
  };

  return recipeDetails ? loaded() : loading();
};

export default RecipeDetails;
