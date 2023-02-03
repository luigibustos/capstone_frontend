// HOOKS
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserToken } from "../utils/authToken";

const RecipeDetails = () => {
  const { id } = useParams();
  const token = getUserToken();
  const navigate = useNavigate();
  const URL = `https://capstone-project-backend.herokuapp.com/recipes/${id}`;
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  const getRecipeDetailsData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setRecipeDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateRecipe = async () => {
    try {
      const response = await fetch(URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(),
      });
      const updatedRecipe = await response.json();
      console.log(updatedRecipe);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRecipe = async () => {
    try {
      const response = await fetch(URL, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const deletedRecipe = await response.json();
      console.log(deletedRecipe);
      navigate("/recipes");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipeDetailsData();
  }, []);

  const loaded = () => {
    return (
      <div className="min-h-full sm:h-screen w-screen bg-neutral-50 px-8 py-20 uppercase grid auto-rows-min gap-4 sm:gap-10 ease-in duration-200">
        <div className="grid place-content-center gap-4 mt-10">
          <h1 className="text-center text-3xl sm:text-5xl">
            {recipeDetails.recipeName}
          </h1>
          <p className="text-center sm:text-xl">
            {recipeDetails.servingSize} Serving
          </p>
        </div>
        <div className="flex justify-around items-center gap-2 sm:text-3xl mt-2">
          <div className="h-full flex flex-col justify-center gap-2 sm:gap-4 rounded-md shadow-md bg-neutral-100 p-4">
            <p>Coffee Amt: {recipeDetails.coffeeAmount} G</p>
            <p>Water Amt: {recipeDetails.waterAmount} G</p>
            <p>Water Temp: {recipeDetails.waterTemp} F</p>
          </div>
          <div className="h-full flex flex-col justify-center gap-2 sm:gap-4 rounded-md shadow-md bg-neutral-100 p-4">
            <p>Roast: {recipeDetails.roast}</p>
            <p>Balance: {recipeDetails.balance}</p>
            <p>Strength: {recipeDetails.strength}</p>
          </div>
        </div>
        <div className="h-full w-full flex flex-col sm:flex-row sm:flex-wrap justify-around items-center gap-3 sm:text-3xl mt-2">
          {recipeDetails.pours ? (
            recipeDetails.pours.map((pour, idx) => {
              return (
                <div
                  key={idx}
                  className={`text-center p-2 rounded-md shadow-md ${
                    selectedIndexes.includes(idx)
                      ? "bg-blue-200"
                      : "bg-neutral-100"
                  } w-full sm:w-auto sm:px-6 hover:cursor-pointer sm:hover:-translate-y-1`}
                  onClick={() => {
                    if (selectedIndexes.includes(idx)) {
                      setSelectedIndexes(
                        selectedIndexes.filter((i) => i !== idx)
                      );
                    } else {
                      setSelectedIndexes([...selectedIndexes, idx]);
                    }
                  }}
                >
                  Pour {idx + 1}:
                  <br />
                  {pour.amount} G of Water
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="flex flex-row flex-wrap  gap-6 sm:gap-14 justify-around items-center mt-4">
          <span
            className="rounded-lg text-center text-xs sm:text-base uppercase bg-amber-200 p-2 shadow-sm hover:bg-amber-400 duration-300 ease-in cursor-pointer w-36"
            onClick={() => setSelectedIndexes([])}
          >
            Reset
          </span>
          <Link
            to="/recipes"
            className="rounded-lg text-center text-xs sm:text-base uppercase bg-green-200 p-2 shadow-sm hover:bg-green-400 duration-300 ease-in w-36"
          >
            Recipes Page
          </Link>
          <span
            onClick={deleteRecipe}
            className="rounded-lg text-center text-xs sm:text-base uppercase bg-red-200 p-2 shadow-sm hover:bg-red-400 duration-300 ease-in cursor-pointer w-36"
          >
            Delete
          </span>
        </div>
      </div>
    );
  };

  const loading = () => {
    return <p>Loading...</p>;
  };

  return recipeDetails ? loaded() : loading();
};

export default RecipeDetails;
