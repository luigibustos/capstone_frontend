const Create = () => {
  return (
    <div className="max-h-screen w-screen pt-14 bg-neutral-100">
      <div className="w-full py-32 grid place-items-center gap-2 text-center sm:text-left">
        <div className="form-item mt-4">
          <label htmlFor="recipeName" className="form-label">
            Recipe Name
          </label>
          <input
            className="form-field"
            type="text"
            placeholder="Recipe Name"
            name="recipeName"
            access="false"
            id="recipeName"
          />
        </div>
        <div className="form-item">
          <label htmlFor="roast" className="form-label">
            Roast
          </label>
          <select name="roast" id="roast" className="form-field">
            <option disabled="null" defaultValue="null">
              Roast
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
          <select name="size" id="size" className="form-field">
            <option disabled="null" defaultValue="null">
              Serving Size
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
          <select name="balance" id="balance" className="form-field">
            <option disabled="null" defaultValue="null">
              Balance
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
          <select name="strength" id="strength" className="form-field">
            <option disabled="null" defaultValue="null">
              Strength
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
      </div>
    </div>
  );
};

export default Create;
