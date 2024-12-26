import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pattern-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/50" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-64 -top-64 w-[800px] h-[800px] rounded-full bg-dulu-beige/30 blur-3xl" />
        <div className="absolute -left-64 -bottom-64 w-[800px] h-[800px] rounded-full bg-dulu-blue/10 blur-3xl" />
      </div>

      {/* Images */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?auto=format&fit=crop&w=600"
          alt="Digital Solutions"
          className="rounded-l-3xl w-[500px] h-[400px] object-cover shadow-2xl opacity-90"
        />
        <div className="absolute -left-20 -bottom-20">
          <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400"
            alt="Tech Innovation"
            className="rounded-2xl w-[300px] h-[250px] object-cover shadow-xl"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          <div className="inline-block">
            <span className="inline-flex items-center rounded-full bg-dulu-beige px-4 py-1 text-sm font-medium text-dulu-orange mb-6 animate-fade-up [--animation-delay:100ms] opacity-0">
              🚀 Solutions innovantes pour votre entreprise
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up [--animation-delay:200ms] opacity-0">
            Solutions numériques{" "}
            <span className="text-dulu-orange relative">
              innovantes
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 318 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M317 11C217.5 11 118.5 1 1 1" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <br />pour votre entreprise
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 animate-fade-up [--animation-delay:400ms] opacity-0">
            Experts en Media Buying et automatisation des réponses clients. 
            Propulsez votre entreprise vers le futur avec DULU.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up [--animation-delay:600ms] opacity-0">
            <Button size="lg" className="bg-dulu-orange hover:bg-dulu-orange/90 text-lg px-8">
              Découvrir nos services
              <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Contactez-nous
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 animate-fade-up [--animation-delay:800ms] opacity-0">
            <div>
              <div className="text-3xl font-bold text-dulu-orange">500+</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-dulu-blue">98%</div>
              <div className="text-gray-600">Taux de satisfaction</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-3xl font-bold text-dulu-orange">24/7</div>
              <div className="text-gray-600">Support client</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;