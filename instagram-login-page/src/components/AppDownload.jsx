import styles from "@/styles/AppDownload.module.css";

const AppDownload = () => {
  return (
    <div className={styles.container}>
      <p className={styles.getApp}>Get the app.</p>
      <div className={styles.buttons}>
        <img src="/google-play.png" alt="Google Play" />
        <img src="/microsoft.png" alt="Microsoft" />
      </div>
    </div>
  );
};

export default AppDownload;
