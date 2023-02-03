// HOOKS
import { UserContext } from "./data";
import { useState } from "react";
import routes from "./utils/router";

// COMPONENTS
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const { Provider: UserInfo } = UserContext;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <div className="">
      <UserInfo
        value={{
          isAuthenticated,
          setAuth: setIsAuthenticated,
          currentUser,
          setUser: setCurrentUser,
        }}
      >
        <NavBar />
        {routes}
        <Footer />
      </UserInfo>
    </div>
  );
}

export default App;
