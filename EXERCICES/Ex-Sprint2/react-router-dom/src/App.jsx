import { useState } from 'react';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
    <Layout />
    <Home />
    <About />
    <Contact />
    </>
  )
}

export default App;
