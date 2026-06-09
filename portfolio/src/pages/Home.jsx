import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Stats from "../components/Stats";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MouseGlow from "../components/MouseGlow";

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