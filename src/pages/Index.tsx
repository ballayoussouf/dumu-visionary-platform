import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import AutomationRoadmap from "@/components/home/AutomationRoadmap";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    console.log("Tracking ViewContent event for homepage");
    // @ts-ignore
    if (window.fbq) {
      // @ts-ignore
      window.fbq('track', 'ViewContent');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <AutomationRoadmap />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;