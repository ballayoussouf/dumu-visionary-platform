import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const About = () => {
  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Innovation africaine, <br />
              <span className="text-dulu-orange">impact mondial</span>
            </h2>
            <p className="text-gray-600 mb-6">
              DULU Sarl est née de la vision de transformer le paysage numérique africain. 
              Basée à Douala, notre entreprise combine expertise technique et compréhension 
              profonde des besoins locaux pour offrir des solutions numériques innovantes.
            </p>
            <p className="text-gray-600 mb-8">
              Notre mission est de propulser les entreprises africaines vers le futur 
              numérique en leur fournissant des outils et services de pointe, adaptés 
              à leurs besoins spécifiques.
            </p>
            <Button className="bg-dulu-orange hover:bg-dulu-orange/90">
              Notre histoire
            </Button>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div 
              animate={{ rotate: [6, 7, 6] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-dulu-orange/10 rounded-3xl" 
            />
            <motion.div 
              animate={{ rotate: [-6, -7, -6] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-dulu-blue/10 rounded-3xl" 
            />
            <div className="relative bg-white p-8 rounded-3xl shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "5+", label: "Années d'expérience", color: "text-dulu-orange" },
                  { value: "100+", label: "Clients satisfaits", color: "text-dulu-blue" },
                  { value: "50+", label: "Projets réussis", color: "text-dulu-orange" },
                  { value: "24/7", label: "Support client", color: "text-dulu-blue" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={statsVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.4, delay: 0.2 * index }}
                    className="text-center p-4"
                  >
                    <h3 className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;