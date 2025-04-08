import Input from "./Input";
import Button from "./Button";
import styles from "@/styles/LoginCard.module.css";

const LoginCard = () => {
  return (
    <div className={styles.card}>
      <Input type="text" placeholder="Email or phone number" />
      <Input type="password" placeholder="Password" />
      <Button text="Log In" />
      <a href="#" className={styles.forgot}>
        Forgot password?
      </a>
      <hr className={styles.divider} />
      <Button text="Create new account" variant="green" />
    </div>
  );
};

export default LoginCard;
