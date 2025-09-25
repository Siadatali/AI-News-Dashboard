import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Insight Hub. All rights reserved.</p>
      <p>
        Built with <strong>React</strong> |{" "}
        <a
          href="https://github.com/Siadatali"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
      <p>
        News provided by{" "}
        <a
          href="https://newsapi.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NewsAPI.org
        </a>
      </p>
    </footer>
  );
}

export default Footer;
