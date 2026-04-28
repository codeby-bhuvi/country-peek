import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <h1>  <Link to="/" className="nav-link">CountryPeek</Link></h1>

      <div className="header__nav">
        {/* NEW: Favourites Link */}
        <Link to="/favourites" className="nav-link">
          Favourites 
        </Link>

        {/* Theme Toggle */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </header>
  );
}

export default Header;