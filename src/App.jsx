import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css";
export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="pt-20">
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
}
