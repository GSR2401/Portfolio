import NodeGraphBackground from "./components/background/NodeGraphBackground";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Publications from "./components/Publications";
import Writing from "./components/Writing";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NodeGraphBackground />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Publications />
        <Writing />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
