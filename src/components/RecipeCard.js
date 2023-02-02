const RecipeCard = ({ recipe }) => {
  // console.log(recipe.pours);
  return (
    <div className="h-80 sm:h-96 p-5 bg-green-400 aspect-square rounded-lg drop-shadow-xl">
      <p>{recipe.recipeName}</p>
      <p>Serving Size: {recipe.servingSize}</p>
      <p>Roast: {recipe.roast}</p>
      <p>Balance: {recipe.balance}</p>
      <p>Strength: {recipe.strength}</p>
      <p>Coffee Amount: {recipe.coffeeAmount} grams</p>
      <p>Water Amount: {recipe.waterAmount} grams</p>
      <p>Water Temperature: {recipe.waterTemp} F</p>
      {recipe.pours.map((pour, idx) => {
        return (
          <p key={idx}>
            Pour # {idx + 1} : {pour.amount} grams
          </p>
        );
      })}
      <p>{recipe.owner ? recipe.owner.username : null}</p>
    </div>
  );
};
export default RecipeCard;
