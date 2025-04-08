import ProductCard from "@/components/Product-card";

const Home = () => {
  const renderProduct = () => {
    return (
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#f9fafb",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProductCard
          image="/apple-watch.png"
          title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
          price="$599"
        />
      </main>
    );
  };

  return renderProduct();
};

export default Home;
