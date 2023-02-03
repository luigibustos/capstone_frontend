// HOOKS
import { setUserToken, clearUserToken } from "../utils/authToken";
import { useState, useContext } from "react";
import { UserContext } from "../data";

// COMPONENTS
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginFrom";

const Auth = () => {
  const [registered, setRegistered] = useState(true);

  const { setAuth, setUser } = useContext(UserContext);

  const testRegisterURL = "http://localhost:4000/auth/register";
  const testLoginURL = "http://localhost:4000/auth/login";

  const registerUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const newUser = await fetch(testRegisterURL, configs);
      const parsedUser = await newUser.json();

      setUserToken(parsedUser.token);
      setUser(parsedUser.user);
      setAuth(parsedUser.isLoggedIn);

      return parsedUser;
    } catch (error) {
      console.log(error);
      clearUserToken();
      setAuth(false);
    }
  };

  const loginUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const loggedUser = await fetch(testLoginURL, configs);
      const currentUser = await loggedUser.json();

      setUserToken(currentUser.token);
      setUser(currentUser.user);
      setAuth(currentUser.isLoggedIn);

      return currentUser;
    } catch (error) {
      console.log(error);
      clearUserToken();
      setAuth(false);
    }
  };

  return (
    <section className="h-screen w-screen grid place-items-center">
      <div className="grid place-content-center">
        {registered ? (
          <LoginForm signIn={loginUser} />
        ) : (
          <RegisterForm signUp={registerUser} />
        )}
        <div className="mt-4">
          <p>
            {registered
              ? "Don't have an account? "
              : "Already have an account? "}
            <span
              className="text-blue-500 hover:text-blue-700 duration-500 cursor-pointer"
              onClick={() => {
                setRegistered(!registered);
              }}
            >
              {registered ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Auth;
