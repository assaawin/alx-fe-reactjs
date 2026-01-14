import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
      }}
    >
      <Header />
      <MainContent />
      <UserProfile
        name="Asaanwin"
        age="27"
        bio="Loves hiking and photography"
      />
      <Footer />
    </div>
  );
}

export default App;
