import { useState } from "react";
import RecipeForm from "../components/RecipeForm";
const Create = () => {
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
        size === 225 ? "Single" : size === 450 ? "Double" : "Tetsu";
      this.waterTemp =
        roast === "light" ? "200" : roast === "medium" ? "190" : "180";
      this.waterAmount = size;
      this.coffeeAmount = (size * 0.0733).toFixed(1);
      this.pours = {};
    }

    calcBalance() {
      switch (this.balance) {
        case "standard":
          this.pours.firstPour = (this.size * 0.2).toString();
          this.pours.secondPour = (this.size * 0.2).toString();
          break;
        case "sweeter":
          this.pours.firstPour = (this.size * (50 / 3) * 0.01)
            .toFixed(1)
            .toString();
          this.pours.secondPour = (this.size * (70 / 3) * 0.01)
            .toFixed(1)
            .toString();
          break;
        case "brighter":
          this.pours.firstPour = (this.size * (70 / 3) * 0.01)
            .toFixed(1)
            .toString();
          this.pours.secondPour = (this.size * (50 / 3) * 0.01)
            .toFixed(1)
            .toString();
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
          this.pours.thirdPour = (this.size * 0.6).toString();
          break;
        case "medium":
          this.pours.thirdPour = (this.size * 0.3).toString();
          this.pours.fourthPour = (this.size * 0.3).toString();
          break;
        case "strong":
          this.pours.thirdPour = (this.size * 0.2).toString();
          this.pours.fourthPour = (this.size * 0.2).toString();
          this.pours.fifthPour = (this.size * 0.2).toString();
          break;
        default:
          console.error(
            `Invalid strength: ${this.strength}. Allowed values are 'light', 'medium', and 'strong'`
          );
      }
      return this;
    }
  }

  const handleChange = (e) => {
    setRecipeForm({ ...recipeForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentState = { ...recipeForm };
    console.log("currentState", currentState);
    const newRecipe = new Recipe(
      currentState.recipeName,
      currentState.roast,
      currentState.size,
      currentState.balance,
      currentState.strength
    );
    newRecipe.calcBalance().calcStrength();
    console.log(newRecipe);
    setRecipeForm({
      recipeName: "",
      roast: "Select Roast",
      size: "Select Serving Size",
      balance: "Select Balance",
      strength: "Select Strength",
    });
  };

  return (
    <div className="max-h-screen w-screen pt-14 bg-neutral-100">
      <RecipeForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        recipeForm={recipeForm}
      />
    </div>
  );
};

export default Create;
