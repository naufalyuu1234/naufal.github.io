import { useState, useEffect } from "react";
import { FiMenu, FiX, FiRefreshCw, FiMoon, FiSun } from "react-icons/fi";
import IconButton from "./ui/IconButton";
import NavLink from "./NavLink";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Handle refresh with loading state
  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate refresh delay
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, [isMenuOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900/80 backdrop-blur-lg shadow-sm border-b border-gray-200 dark:border-gray-700"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and mobile menu button */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span
                className="w-8 h-8 rounded-full bg-gray-900 dark:bg-purple-600 flex items-center justify-center text-white font-bold text-lg"
                aria-hidden="true"
              >
                N
              </span>
              <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
                Noval
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-1">
            <ul className="flex space-x-1">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/blog">Blog</NavLink>
            </ul>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-1">
              <IconButton
                icon={isRefreshing ? () => null : FiRefreshCw}
                label="Refresh page"
                onClick={handleRefresh}
                isLoading={isRefreshing}
              />
              <IconButton
                icon={darkMode ? FiSun : FiMoon}
                label={`Switch to ${darkMode ? "light" : "dark"} mode`}
                onClick={toggleDarkMode}
              />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <IconButton
                icon={isMenuOpen ? FiX : FiMenu}
                label={isMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="pt-2 pb-3 space-y-1 px-4 bg-white dark:bg-gray-800 shadow-lg">
          <ul className="flex flex-col space-y-2">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>
              Projects
            </NavLink>
            <NavLink to="/blog" onClick={() => setIsMenuOpen(false)}>
              Blog
            </NavLink>
          </ul>

          <div className="pt-4 pb-2 border-t border-gray-200 dark:border-gray-700 flex justify-center space-x-4">
            <IconButton
              icon={isRefreshing ? () => null : FiRefreshCw}
              label="Refresh page"
              onClick={handleRefresh}
              isLoading={isRefreshing}
              className="text-gray-700 dark:text-gray-200"
            />
            <IconButton
              icon={darkMode ? FiSun : FiMoon}
              label={`Switch to ${darkMode ? "light" : "dark"} mode`}
              onClick={toggleDarkMode}
              className="text-gray-700 dark:text-gray-200"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
