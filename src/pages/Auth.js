import { setUserToken, clearUserToken } from "../utils/authToken";
import { useContext } from "react";
import { UserContext } from "../data";

// COMPONENTS
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginFrom";

const Auth = (props) => {
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
      console.log("Parsed User", parsedUser);
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
      // if (currentUser.token) {
      console.log("Current User Token", typeof currentUser.token);
      // localStorage.setItem("token", currentUser.token);
      setUserToken(currentUser.token);
      setUser(currentUser.user);
      setAuth(currentUser.isLoggedIn);
      return currentUser;
      // }
      // else {
      //   throw `Server Error: ${currentUser.statusText}`;
      // }
    } catch (error) {
      console.log(error);
      clearUserToken();
      setAuth(false);
    }
  };

  console.log(localStorage);
  console.log(localStorage.length);
  // clearUserToken();
  return (
    <section className="h-screen w-screen pt-14">
      <RegisterForm signUp={registerUser} />
      <LoginForm signIn={loginUser} />
    </section>
  );
};

export default Auth;
