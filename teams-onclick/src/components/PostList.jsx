import Post from "./Post";
import styles from "../styles/Post.module.css";
import { PlusCircle } from "lucide-react";

export default function PostList({ posts }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Team Posts</h2>

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}

      <button className={styles.postButton}>
        <PlusCircle
          size={18}
          style={{ marginRight: "6px", verticalAlign: "middle" }}
        />
        Start a post
      </button>
    </div>
  );
}
