import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      className="
      h-screen w-screen pt-14 bg-neutral-100
      flex flex-col items-center justify-center
      "
    >
      <h1 className="text-5xl sm:text-8xl mb-16">Brew Time</h1>
      <div className="text-2xl sm:text-5xl w-full flex justify-center gap-4 sm:gap-8">
        <Link
          className="w-32 sm:w-56 text-center bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
          to="/create"
        >
          Create
        </Link>
        <Link
          className="w-32 sm:w-56 text-center bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
          to="/recipes"
        >
          Recipes
        </Link>
      </div>
    </div>
  );
};

export default Home;
