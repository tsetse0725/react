import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import styles from "../styles/Post.module.css";

export default function Post({ post }) {
  return (
    <div className={styles.post}>
      <PostHeader
        username={post.username}
        profilePic={post.profilePic}
        time={post.time}
      />
      <h4>{post.title}</h4>
      <PostContent type={post.type} content={post.content} />
      <PostFooter />
    </div>
  );
}
