import FloatingBackground from "@/components/FloatingBackground";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Hobbies from "@/components/Hobbies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <FloatingBackground />
      <div className="relative z-10">
        <Hero />
        <Skills />
        <Hobbies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
