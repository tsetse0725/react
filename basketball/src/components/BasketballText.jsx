export default function BasketballText({ title, description }) {
  return (
    <div style={{ padding: "8px" }}>
      <h2 style={{ fontWeight: "bold" }}>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
