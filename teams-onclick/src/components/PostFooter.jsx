import styles from "../styles/Post.module.css";
import { Smile, Heart, ThumbsUp } from "lucide-react";

export default function PostFooter() {
  return (
    <>
      <div className={styles.seeMore}>see more</div>
      <div className={styles.emoji}>
        <Smile size={20} color="#fbbf24" />
        <Heart size={20} color="red" />
        <ThumbsUp size={20} color="#3b82f6" />
      </div>
      <div className={styles.reply}>
        <img src="/user1.jpg" className={styles.replyAvatar} />
        <input
          type="text"
          placeholder="Reply..."
          className={styles.replyInput}
        />
      </div>
    </>
  );
}
