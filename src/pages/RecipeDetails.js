import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const RecipeDetails = () => {
  const { id } = useParams();
  const testURL = `https://api.sampleapis.com/coffee/hot/${id}`;
  const [recipeDetails, setRecipeDetails] = useState([]);
  const getRecipeDetailsData = async () => {
    try {
      const response = await fetch(testURL);
      const data = await response.json();
      // console.log(data);
      setRecipeDetails(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRecipeDetailsData();
  }, []);

  const loaded = () => {
    return (
      <div className="min-h-screen w-full bg-purple-400 pt-14 text-center px-8">
        <h1 className="text-6xl">{recipeDetails.title}</h1>
        <p className="text-4xl">{recipeDetails.description}</p>
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
