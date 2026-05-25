import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden">
      
      <Navbar />

      <Hero />
      <Skills />
      <Experience />
      <Projects />

    </main>
  );
}