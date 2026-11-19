import NavBar from "./components/NavBar";
import Accueil from "./components/Accueil";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      <Accueil />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;