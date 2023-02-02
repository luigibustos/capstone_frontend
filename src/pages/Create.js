// HOOKS
import { useState, useEffect } from "react";
import { getUserToken } from "../utils/authToken";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import RecipeForm from "../components/RecipeForm";

const Create = () => {
  const token = getUserToken();
  const navigate = useNavigate();
  const testURL = "http://localhost:4000/recipes";
  const [recipeForm, setRecipeForm] = useState({
    recipeName: "",
    roast: "Select Roast",
    size: "Select Serving Size",
    balance: "Select Balance",
    strength: "Select Strength",
  });

  class Recipe {
    constructor(recipeName, roast, size, balance, strength) {
      this.recipeName = recipeName;
      this.roast = roast;
      this.balance = balance;
      this.strength = strength;
      this.size = size;
      this.servingSize =
        size === "225" ? "Single" : size === "450" ? "Double" : "Tetsu";
      this.waterTemp =
        roast === "light" ? "200" : roast === "medium" ? "190" : "180";
      this.waterAmount = size;
      this.coffeeAmount = (size * 0.0733).toFixed(1);
      this.pours = [];
    }

    calcBalance() {
      switch (this.balance) {
        case "standard":
          this.pours.push({ amount: (this.size * 0.2).toFixed(1) });
          this.pours.push({ amount: (this.size * 0.2).toFixed(1) });
          break;
        case "sweeter":
          this.pours.push({ amount: (this.size * (50 / 3) * 0.01).toFixed(1) });
          this.pours.push({ amount: (this.size * (70 / 3) * 0.01).toFixed(1) });
          break;
        case "brighter":
          this.pours.push({ amount: (this.size * (70 / 3) * 0.01).toFixed(1) });
          this.pours.push({ amount: (this.size * (50 / 3) * 0.01).toFixed(1) });
          break;
        default:
          console.error(
            `Invalid balance: ${this.balance}. Allowed values are 'standard', 'sweeter', and 'brighter'`
          );
          break;
      }
      return this;
    }

    calcStrength() {
      switch (this.strength) {
        case "light":
          this.pours.push({ amount: (this.size * 0.6).toFixed(1) });
          break;
        case "medium":
          this.pours.push({ amount: (this.size * 0.3).toFixed(1) });
          this.pours.push({ amount: (this.size * 0.3).toFixed(1) });
          break;
        case "strong":
          this.pours.push({ amount: (this.size * 0.2).toFixed(1) });
          this.pours.push({ amount: (this.size * 0.2).toFixed(1) });
          this.pours.push({ amount: (this.size * 0.2).toFixed(1) });
          break;
        default:
          console.error(
            `Invalid strength: ${this.strength}. Allowed values are 'light', 'medium', and 'strong'`
          );
      }
      return this;
    }
  }

  const createRecipe = async (completeRecipe) => {
    try {
      await fetch(testURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(completeRecipe),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setRecipeForm({ ...recipeForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentState = { ...recipeForm };
    const newRecipe = new Recipe(
      currentState.recipeName,
      currentState.roast,
      currentState.size,
      currentState.balance,
      currentState.strength
    );
    newRecipe.calcBalance().calcStrength();
    console.log("New Recipe: ", newRecipe);
    createRecipe(newRecipe);
    setRecipeForm({
      recipeName: "",
      roast: "Select Roast",
      size: "Select Serving Size",
      balance: "Select Balance",
      strength: "Select Strength",
    });
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <div className="h-screen w-screen bg-neutral-100 pt-14">
      {token ? (
        <RecipeForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          recipeForm={recipeForm}
        />
      ) : null}
    </div>
  );
};

export default Create;
