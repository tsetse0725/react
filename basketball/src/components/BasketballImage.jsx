export default function BasketballImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        height: "200px",
        objectFit: "contain",
        display: "block",
      }}
    />
  );
}
