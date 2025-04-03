import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Сайн байна уу.</h1>
      <p className={styles.p}>Энэ бол миний шинэ хуудас.</p>
    </div>
  );
}
