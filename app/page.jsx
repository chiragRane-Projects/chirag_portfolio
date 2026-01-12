import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TheDuality from "@/components/methodology";
import TheTriad from "@/components/methodology";
import Methodology from "@/components/methodology";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <div id="projects">
      <Projects/>
    </div>
    <Skills/>
    <TheDuality/>
    <Footer/>
    <ContactForm/>
    </>
  );
}
