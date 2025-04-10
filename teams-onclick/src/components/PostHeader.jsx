import styles from "../styles/Post.module.css";

export default function PostHeader({ username, profilePic, time }) {
  return (
    <div className={styles.header}>
      <img src={profilePic} className={styles.avatar} />
      <div>
        <b>{username}</b>
        <div className={styles.time}>{time}</div>
      </div>
    </div>
  );
}
