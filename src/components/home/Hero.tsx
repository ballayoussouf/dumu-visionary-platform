import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pattern-bg">
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/50" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up [--animation-delay:200ms] opacity-0">
            Solutions numériques{" "}
            <span className="text-dulu-orange">innovantes</span> pour votre entreprise
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-up [--animation-delay:400ms] opacity-0">
            Experts en Media Buying et automatisation des réponses clients. 
            Propulsez votre entreprise vers le futur avec DULU.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up [--animation-delay:600ms] opacity-0">
            <Button className="bg-dulu-orange hover:bg-dulu-orange/90 text-lg px-8 py-6">
              Découvrir nos services
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6">
              Contactez-nous
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;