const RecipeForm = ({ recipeForm, handleChange, handleSubmit }) => {
  return (
    <form
      className="w-full h-3/4 py-8 grid place-items-center text-center sm:text-left"
      onSubmit={handleSubmit}
    >
      <div className="form-item mt-4">
        <label htmlFor="recipeName" className="form-label">
          Recipe Name
        </label>
        <input
          className="form-field"
          placeholder="Recipe Name"
          type="text"
          name="recipeName"
          id="recipeName"
          onChange={handleChange}
          value={recipeForm.recipeName}
        />
      </div>
      <div className="form-item">
        <label htmlFor="roast" className="form-label">
          Roast
        </label>
        <select
          name="roast"
          id="roast"
          className="form-field"
          onChange={handleChange}
          value={recipeForm.roast}
        >
          <option disabled value="Select Roast">
            Select Roast
          </option>
          <option value="light" id="roast-0">
            Light Roast
          </option>
          <option value="medium" id="roast-1">
            Medium Roast
          </option>
          <option value="dark" id="roast-2">
            Dark Roast
          </option>
        </select>
      </div>
      <div className="form-item">
        <label htmlFor="size" className="form-label">
          Serving Size
        </label>
        <select
          name="size"
          id="size"
          className="form-field"
          onChange={handleChange}
          value={recipeForm.size}
        >
          <option disabled value="Select Serving Size">
            Select Serving Size
          </option>
          <option value="225" id="size-0">
            Single
          </option>
          <option value="450" id="size-1">
            Double
          </option>
          <option value="300" id="size-2">
            Tetsu
          </option>
        </select>
      </div>
      <div className="form-item">
        <label htmlFor="balance" className="form-label">
          Balance
        </label>
        <select
          name="balance"
          id="balance"
          className="form-field"
          onChange={handleChange}
          value={recipeForm.balance}
        >
          <option disabled value="Select Balance">
            Select Balance
          </option>
          <option value="standard" id="balance-0">
            Standard
          </option>
          <option value="sweeter" id="balance-1">
            Sweeter
          </option>
          <option value="brighter" id="balance-2">
            Brighter
          </option>
        </select>
      </div>
      <div className="form-item">
        <label htmlFor="strength" className="form-label">
          Strength
        </label>
        <select
          name="strength"
          id="strength"
          className="form-field"
          onChange={handleChange}
          value={recipeForm.strength}
        >
          <option disabled value="Select Strength">
            Select Strength
          </option>
          <option value="light" id="strength-0">
            Light
          </option>
          <option value="medium" id="strength-1">
            Medium
          </option>
          <option value="strong" id="strength-2">
            Strong
          </option>
        </select>
      </div>
      <div>
        <button
          className="form-btn hover:bg-blue-700"
          type="submit"
          name="button-1675104395386"
          access="false"
          id="button-1675104395386"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;
