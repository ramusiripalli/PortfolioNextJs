import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden">
      
      <Navbar />

      <Hero />

      <Projects />

    </main>
  );
}