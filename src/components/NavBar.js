import { NavLink } from "react-router-dom";

const NavBar = () => {
  const activeClassName = "text-blue-700";
  const navList = [
    {
      item: "Home",
      to: "/",
    },
    {
      item: "Create",
      to: "/create",
    },
    {
      item: "Recipes",
      to: "/recipes",
    },
  ];

  return (
    <nav className="h-14 w-full fixed top-0 left-0 right-0 bg-neutral-100 drop-shadow-lg flex items-center justify-between">
      <div className="px-5">Brew Time</div>
      <ul className=" h-full flex px-5 flex-row gap-6 items-center justify-center sm:justify-end">
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
