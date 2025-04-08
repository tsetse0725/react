import AuthForm from "@/components/AuthForm";
import AppDownload from "@/components/AppDownload";
import ImagePreview from "@/components/ImagePreview";

const Home = () => {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "2rem",
        backgroundColor: "#fafafa",
      }}
    >
      <ImagePreview />
      <div>
        <AuthForm />
        <AppDownload />
      </div>
    </main>
  );
};

export default Home;
