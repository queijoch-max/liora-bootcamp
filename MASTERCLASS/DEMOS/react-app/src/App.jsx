import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hello from "./components/Hello";

const App = () => {
  return (
    <>
      <Navbar />
      <h1>Welcome to REACT</h1>
      <Hello name="Raph" age="12" />
      <Hello name="Charlotte" age="13" />
      <Hello name="Gilles" age="14" />
      <Footer />
    </>
  );
}

export default App;