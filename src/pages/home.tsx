import { About } from "../components/about";
import { Contact } from "../components/contact";
import { DarkModeToggle } from "../components/DarkModeToggle";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

export default function Home() {
    return(
    <div className="min-h-screen">
      <Navbar />
      <DarkModeToggle />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
    )
}