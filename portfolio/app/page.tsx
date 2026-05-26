import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="overflow-hidden transition-colors duration-300">
      
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

    </main>
  );
}