const RecipeCard = ({ recipe }) => {
  return (
    <div className="h-80 sm:h-96 p-5 bg-green-400 aspect-square rounded-lg drop-shadow-xl">
      <p>{recipe.recipeName}</p>
      <p>{recipe.roast}</p>
      <p>{recipe.balance}</p>
      <p>{recipe.strenght}</p>
    </div>
  );
};
export default RecipeCard;
