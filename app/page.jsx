import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <section>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
    </section>
  );
}
