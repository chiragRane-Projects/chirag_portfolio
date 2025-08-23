import AboutMe from "@/components/AboutMe";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Techstack from "@/components/Techstack";

export default function Home() {
  return (
    <section>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Techstack/>
      <ContactForm/>
      <Footer/>
    </section>
  );
}
