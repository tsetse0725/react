import styles from "../styles/Post.module.css";

export default function PostContent({ type, content }) {
  return type === "code" ? (
    <pre className={styles.code}>
      <code>{content}</code>
    </pre>
  ) : (
    <img src={content} className={styles.image} />
  );
}
