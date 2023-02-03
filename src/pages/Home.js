// HOOKS
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserToken } from "../utils/authToken";

const Home = () => {
  const token = getUserToken();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <div
      className="
      h-full py-60 sm:h-screen w-screen bg-neutral-100
      flex flex-col items-center justify-center
      "
    >
      <h1 className="font-Satisfy text-6xl sm:text-8xl ">Brew Time</h1>
      <h1 className="invisible sm:visible sm:mt-16 font-Hind text-3xl">
        Experience the art of pour over coffee like never before
      </h1>
      <div className="text-2xl font-Hind font-light sm:text-5xl sm:mt-16 w-full flex justify-center gap-4 sm:gap-8">
        <Link className="form-btn" to="/create">
          Create
        </Link>
        <Link className="form-btn" to="/recipes">
          Recipes
        </Link>
      </div>
    </div>
  );
};

export default Home;
