import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CategoryPage() {
  const { category } = useParams(); // get category from URL
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=f884d83c970b4e91ab1ed2a96cac7086`
        );
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, [category]);

  if (loading) return <p>Loading {category} news...</p>;

  return (
    <div className="news-container">
      <h2 style={{ marginBottom: "1rem" }}>
        {category.charAt(0).toUpperCase() + category.slice(1)} News
      </h2>
      {articles.length === 0 ? (
        <p>No news found.</p>
      ) : (
        articles.map((a, idx) => (
          <div key={idx} className="news-card">
            <h3>{a.title}</h3>
            <p>{a.description}</p>
            <a href={a.url} target="_blank" rel="noreferrer">
              Read more
            </a>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryPage;
