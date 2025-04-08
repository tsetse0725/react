import Image from "next/image";
import styles from "@/styles/Home.module.css";

const ProductCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={props.image}
          alt={props.title}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.price}>{props.price}</p>
      <button className={styles.button}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
