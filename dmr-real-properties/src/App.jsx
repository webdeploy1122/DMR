import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import OurWorks from "./components/Ourworks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <OurWorks />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;