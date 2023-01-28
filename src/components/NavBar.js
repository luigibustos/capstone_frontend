import { NavLink } from "react-router-dom";

const NavBar = () => {
  const activeClassName = "text-blue-700";
  const navList = [
    {
      item: "Create",
      to: "/create",
    },
    {
      item: "Recipes",
      to: "/recipes",
    },
    {
      item: "Resources",
      to: "/",
    },
  ];

  return (
    <nav className="h-14 w-full fixed top-0 left-0 right-0 bg-neutral-100 drop-shadow-lg flex items-center justify-between z-10">
      <NavLink
        to="/"
        className="px-8 font-Satisfy text-xl sm:text-2xl font-bold"
      >
        Brew Time
      </NavLink>
      <ul className=" h-full px-8 font-Hind flex flex-row gap-4 sm:gap-6 items-center justify-center sm:justify-end">
        {navList.map((navItem, idx) => {
          return (
            <li key={idx}>
              <NavLink
                to={navItem.to}
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                {navItem.item}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
