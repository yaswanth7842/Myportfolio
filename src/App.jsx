import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import TechStack from "./pages/TechStack";
import Projects from "./pages/Projects"
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="bg-gradient-to-br from-[#050812] via-[#070d1a] to-[#07172a] text-white">
      <Navbar />

      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Education />
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}
