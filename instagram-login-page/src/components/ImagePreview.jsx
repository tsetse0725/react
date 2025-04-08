import styles from "@/styles/ImagePreview.module.css";

const ImagePreview = () => {
  return (
    <div className={styles.container}>
      <img src="/insta-preview.png" alt="Preview" className={styles.image} />
    </div>
  );
};

export default ImagePreview;
