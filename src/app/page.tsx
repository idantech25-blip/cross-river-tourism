// Main landing page assembling all components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Attractions from "@/components/Attractions";
import Culture from "@/components/Culture";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Attractions />
      <Culture />
      <Events />
      <Contact />
      <Footer />
    </main>
  );
}

