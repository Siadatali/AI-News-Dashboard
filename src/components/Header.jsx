import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

const categories = [
  "technology",
  "sports",
  "business",
  "health",
  "science",
  "entertainment",
];

function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query}`);
      setQuery(""); // clear search box after submit
    }
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div
        className={styles.logo}
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        📰 Insight Hub
      </div>

      {/* Categories */}
      <nav className={styles.nav}>
        {categories.map((cat) => (
          <NavLink
            key={cat}
            to={`/category/${cat}`}
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </NavLink>
        ))}
      </nav>

      {/* Search + Dark Mode */}
      <div className={styles.rightControls}>
        <form onSubmit={handleSubmit} className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search news..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.searchBox}
          />
          <button type="submit" className={styles.searchIconBtn}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
