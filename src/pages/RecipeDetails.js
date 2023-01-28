import { useParams } from "react-router-dom";
const RecipeDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="min-h-screen pt-14 bg-purple-400">
      <h1>Recipe Detail Page</h1>
    </div>
  );
};

export default RecipeDetails;
