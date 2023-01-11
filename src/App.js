import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
