import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TheDuality from "@/components/methodology";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ContactForm from "@/components/ContactForm";
import Services from "@/components/Services";
import Education from "@/components/Education";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education/>
      <div id="projects">
        <Projects />
      </div>
      <Skills />
      <Services />
      <TheDuality />
      <Footer />
      <ContactForm />
    </>
  );
}
