const RecipeCard = ({ recipe }) => {
  return (
    <div className="h-80 sm:h-96 p-5 aspect-square recipe-card grid grid-cols-3 grid-row-3 items-center justify-center content-center gap-y-12 gap-x-8 hover:translate-y-1">
      <p className="col-span-3 text-2xl text-center">{recipe.recipeName}</p>
      <p className="col-span-3 text-xl text-center rounded-lg uppercase bg-amber-200 p-2 shadow-sm">
        {recipe.servingSize}
      </p>
      <p className=" w-full h-full rounded-lg text-center text-xs sm:text-base uppercase bg-green-200 p-2 shadow-sm">
        Roast: {recipe.roast}
      </p>
      <p className="w-full h-full rounded-lg text-center text-xs sm:text-base uppercase bg-red-200 p-2 shadow-sm">
        Bal: {recipe.balance}
      </p>
      <p className="w-full h-full rounded-lg text-center text-xs sm:text-base uppercase bg-blue-200 p-2 shadow-sm">
        str: {recipe.strength}
      </p>
    </div>
  );
};
export default RecipeCard;
