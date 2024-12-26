import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Testimonials from "@/components/home/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Testimonials />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;