// HOOKS
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      className="
      min-h-screen w-screen bg-neutral-100
      flex flex-col items-center justify-center
      "
    >
      <h1 className="font-Satisfy text-6xl sm:text-8xl ">Brew Time</h1>
      <h1 className="invisible sm:visible sm:mt-16 font-Hind text-3xl">
        Experience the art of pour over coffee like never before
      </h1>
      <div className="text-2xl font-Hind font-light sm:text-5xl sm:mt-16 w-full flex justify-center gap-4 sm:gap-8">
        <Link
          className="text-center text-white w-32 sm:w-56  bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full"
          to="/create"
        >
          Create
        </Link>
        <Link
          className="text-center text-white w-32 sm:w-56  bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full"
          to="/recipes"
        >
          Recipes
        </Link>
      </div>
    </div>
  );
};

export default Home;
