import LoginCard from "./LoginCard";
import styles from "@/styles/LoginLayout.module.css";

const LoginLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h1 className={styles.logo}>facebook</h1>
        <p className={styles.description}>
          Connect with friends and the world around you on Facebook.
        </p>
      </div>
      <div className={styles.right}>
        <LoginCard />
        <p className={styles.createPage}>
          <a href="#" className={styles.boldLink}>
            Create a Page
          </a>{" "}
          for a celebrity, brand or business.
        </p>
      </div>
    </div>
  );
};

export default LoginLayout;
