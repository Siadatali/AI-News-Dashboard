import NewsCard from "./NewsCard.jsx";
import styles from "./newsGridd.module.css";

function NewsGrid({ articles }) {
  return (
    <div className={styles.grid}>
      {articles.map((article, index) => (
        <NewsCard
          key={index}
          title={article.title}
          description={article.description}
          imageUrl={article.urlToImage}
          source={article.source?.name || "Unknown"}
          content={article.content}
          url={article.url} // ✅ added
        />
      ))}
    </div>
  );
}

export default NewsGrid;
