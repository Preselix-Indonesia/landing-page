import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Illustration from "@/components/Illustration";
import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";
import CtaSection from "@/components/CtaSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Illustration />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
