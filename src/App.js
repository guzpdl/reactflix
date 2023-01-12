import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <div className="App bg-dark">
      <Container>
        <NavBar />
        <AppRoutes />
        <Footer />
      </Container>
    </div>
  );
};

export default App;
