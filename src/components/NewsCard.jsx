import styles from "./NewsCard.module.css";
import { useState } from "react";
import SummaryModal from "./SummaryModal";

function NewsCard({ title, description, imageUrl, source, content, url }) {
  const [summary, setSummary] = useState("");
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const generateSummary = async () => {
    setLoadingSummary(true);
    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful assistant that summarizes news articles.",
            },
            {
              role: "user",
              content: `Summarize this news article in 2-3 sentences:\n\n${
                content || description
              }`,
            },
          ],
          max_tokens: 120,
        }),
      });

      const data = await res.json();
      if (data?.choices?.[0]?.message?.content) {
        setSummary(data.choices[0].message.content.trim());
      } else {
        setSummary("No summary available.");
      }
      setModalOpen(true);
    } catch (err) {
      console.error(err);
      setSummary("Failed to generate summary.");
      setModalOpen(true);
    }
    setLoadingSummary(false);
  };

  return (
    <>
      <article className={styles.newsCard}>
        <div className={styles.newsImageContainer}>
          <img src={imageUrl} alt={title} className={styles.newsImage} />
        </div>

        <div className={styles.newsContent}>
          <h2 className={styles.newsTitle}>{title}</h2>
          <p className={styles.newsDescription}>{description}</p>

          <div className={styles.summarySection}>
            <button
              onClick={generateSummary}
              className={styles.summaryBtn}
              disabled={loadingSummary}
            >
              {loadingSummary ? "Summarizing..." : "Summarize"}
            </button>
          </div>

          <div className={styles.newsFooter}>
            <span className={styles.newsSource}>{source}</span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.newsButton}
            >
              Read More →
            </a>
          </div>
        </div>
      </article>

      {modalOpen && (
        <SummaryModal summary={summary} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

export default NewsCard;
