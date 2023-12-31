/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* about */}
      <About />
      {/* skill */}
      <Skill />
      {/* contact */}
      <Contact />
      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
