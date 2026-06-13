import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Technologies from "../components/Technologies.jsx";
import Projects from "../components/Projects.jsx";
import Education from "../components/Education.jsx";
import Stats from "../components/Stats.jsx";
import Contact from "../components/contact.jsx";
import Footer from "../components/Footer.jsx";
import MouseGlow from "../components/MouseGLow.jsx";

export default function Home() {
  return (
    <>
      <MouseGlow />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Stats />
        <Technologies />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}