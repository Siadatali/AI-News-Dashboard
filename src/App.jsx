import { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Header from "./components/Header.jsx";
import NewsGrid from "./components/newsgrid.jsx";
import Footer from "./components/footer.jsx";
import styles from "./App.module.css";

// 🔹 Component for search-based news (home + search results)
function SearchPage({ query: propQuery }) {
  const { query: paramQuery } = useParams(); // from URL
  const query = paramQuery || propQuery;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&apiKey=f884d83c970b4e91ab1ed2a96cac7086`
        );
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching search news:", error);
        setArticles([]);
      }
      setLoading(false);
    };

    fetchNews();
  }, [query]);

  if (loading) return <div className={styles.loading}></div>;
  if (articles.length === 0)
    return (
      <p className={styles.noArticles}>No articles found for "{query}".</p>
    );

  return <NewsGrid articles={articles} />;
}

// 🔹 Component for category-based news
function CategoryPage() {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategoryNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f884d83c970b4e91ab1ed2a96cac7086`
        );
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching category news:", error);
        setArticles([]);
      }
      setLoading(false);
    };

    fetchCategoryNews();
  }, [category]);

  if (loading) return <div className={styles.loading}></div>;
  if (articles.length === 0)
    return <p className={styles.noArticles}>No {category} news found.</p>;

  return (
    <>
      <h2 style={{ margin: "1rem 0", textAlign: "center" }}>
        {category.charAt(0).toUpperCase() + category.slice(1)} News
      </h2>
      <NewsGrid articles={articles} />
    </>
  );
}

function App() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Header />

      <Routes>
        {/* Default home → loads technology news */}
        <Route path="/" element={<SearchPage query="technology" />} />

        {/* Category pages */}
        <Route path="/category/:category" element={<CategoryPage />} />

        {/* Search results */}
        <Route path="/search/:query" element={<SearchPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
