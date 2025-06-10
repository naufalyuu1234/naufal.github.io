import { NavLink as RouterLink } from "react-router-dom";

const NavLink = ({ to, children }) => {
  return (
    <li>
      <RouterLink
        to={to}
        className={({ isActive }) => `
          px-3 py-2 rounded-md text-sm font-medium
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
          ${
            isActive
              ? "text-purple-700 dark:text-purple-400 font-semibold bg-purple-50 dark:bg-gray-800"
              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          }
        `}
        end
      >
        {children}
      </RouterLink>
    </li>
  );
};

export default NavLink;
