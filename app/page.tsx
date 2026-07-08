import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Illustration from "@/components/Illustration";
import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";
import CtaSection from "@/components/CtaSection";
import WhatsAppBotAccess from "@/components/WhatsAppBotAccess";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Illustration />
        <WhatsAppBotAccess />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
