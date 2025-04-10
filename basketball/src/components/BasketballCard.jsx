import BasketballImage from "./BasketballImage";
import BasketballText from "./BasketballText";

export default function BasketballCard({ image, title, description }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "5%",
        padding: "10px",
        flex: "1 1 400px",
        maxWidth: "450px",
        boxSizing: "border-box",
      }}
    >
      <BasketballImage src={image} alt={title} />
      <BasketballText title={title} description={description} />
    </div>
  );
}
