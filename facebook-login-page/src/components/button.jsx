import styles from "@/styles/Button.module.css";

const Button = (props) => {
  return (
    <button className={props.variant === "green" ? styles.green : styles.blue}>
      {props.text}
    </button>
  );
};

export default Button;
