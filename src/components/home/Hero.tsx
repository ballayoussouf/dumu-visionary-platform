import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pattern-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/50" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -right-64 -top-64 w-[800px] h-[800px] rounded-full bg-dulu-beige/30 blur-3xl" 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -left-64 -bottom-64 w-[800px] h-[800px] rounded-full bg-dulu-blue/10 blur-3xl" 
        />
      </div>

      {/* Images */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <motion.img 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.9 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src="/lovable-uploads/848da8ec-0c7d-4500-8c7d-4975ae4038c9.png"
          alt="Digital Solutions"
          className="rounded-l-3xl w-[500px] h-[400px] object-cover shadow-2xl"
        />
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute -left-20 -bottom-20"
        >
          <img 
            src="/lovable-uploads/df3d82f6-22fc-4811-b954-509f5cdba4a9.png"
            alt="Tech Innovation"
            className="rounded-2xl w-[300px] h-[250px] object-cover shadow-xl"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block pt-20 md:pt-0" // Added padding-top for mobile
          >
            <span className="inline-flex items-center rounded-full bg-dulu-beige px-4 py-1 text-sm font-medium text-dulu-orange mb-6">
              🚀 Solutions innovantes pour votre entreprise
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Solutions numériques{" "}
            <span className="text-dulu-orange relative">
              innovantes
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 318 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M317 11C217.5 11 118.5 1 1 1" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <br />pour votre entreprise
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8"
          >
            Experts en Media Buying et automatisation des réponses clients. 
            Propulsez votre entreprise vers le futur avec <i><b>Flow by Dulu</b></i>.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/fastcom-pro">
              <Button size="lg" className="bg-dulu-orange hover:bg-dulu-orange/90 text-lg px-8">
                Découvrir nos services
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <a href="#contact">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Contactez-nous
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8"
          >
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;