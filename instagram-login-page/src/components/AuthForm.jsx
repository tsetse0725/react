import styles from "@/styles/AuthForm.module.css";
import InstagramLogo from "./InstagramLogo";

const AuthForm = () => {
  return (
    <div className={styles.card}>
      <InstagramLogo />
      <input
        type="text"
        placeholder="Phone number, username, or email"
        className={styles.input}
      />
      <input type="password" placeholder="Password" className={styles.input} />
      <button className={styles.loginBtn}>Log in</button>

      <div className={styles.orSection}>
        <div className={styles.line}></div>
        <span className={styles.or}>OR</span>
        <div className={styles.line}></div>
      </div>

      <a href="#" className={styles.facebookLogin}>
        Log in with Facebook
      </a>
      <a href="#" className={styles.forgot}>
        Forgot password?
      </a>
    </div>
  );
};

export default AuthForm;
