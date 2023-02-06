import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMugHot,
  faSquarePlus,
  faList,
  faBook,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { getUserToken } from "../utils/authToken";

const NavBar = () => {
  const token = getUserToken();
  const navigate = useNavigate();
  const activeClassName = "text-blue-700";
  const navList = [
    {
      item: "Create",
      to: "/create",
      icon: faSquarePlus,
    },
    {
      item: "Recipes",
      to: "/recipes",
      icon: faList,
    },
    {
      item: "Resources",
      to: "/home",
      icon: faBook,
    },
  ];

  const handleLogout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  const logout = () => {
    return (
      <button className="text-xl" onClick={handleLogout}>
        <FontAwesomeIcon
          className="text-xl sm:hidden"
          icon={faRightFromBracket}
        />
        <span className="text-xl hidden sm:block">Logout</span>
      </button>
    );
  };
  return (
    <nav className="h-14 w-full fixed top-0 left-0 right-0 bg-neutral-100 drop-shadow-lg flex items-center justify-between z-10">
      <NavLink
        to="/home"
        className="px-8 font-Satisfy text-xl sm:text-2xl font-bold"
      >
        Brew Time{" "}
        <span>
          <FontAwesomeIcon
            className="text-xl hidden sm:inline-block"
            icon={faMugHot}
          />
        </span>
      </NavLink>
      <ul className=" h-full px-8 font-Hind flex flex-row gap-5 sm:gap-6 items-center justify-center sm:justify-end">
        {token
          ? navList.map((navItem, idx) => {
              return (
                <li key={idx}>
                  <NavLink
                    to={navItem.to}
                    className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }
                  >
                    <FontAwesomeIcon
                      className="text-xl sm:hidden"
                      icon={navItem.icon}
                    />
                    <span className="text-xl hidden sm:block">
                      {navItem.item}
                    </span>
                  </NavLink>
                </li>
              );
            })
          : null}
        {token ? logout() : null}
      </ul>
    </nav>
  );
};

export default NavBar;
