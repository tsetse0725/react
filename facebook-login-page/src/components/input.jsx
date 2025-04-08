import styles from "@/styles/Input.module.css";

const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={styles.input}
    />
  );
};

export default Input;
