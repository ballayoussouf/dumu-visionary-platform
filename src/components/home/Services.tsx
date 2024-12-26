import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, MessageSquareMore } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos Services
          </h2>
          <p className="text-gray-600">
            Des solutions sur mesure pour optimiser votre présence numérique et automatiser vos interactions clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Media Buying */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-dulu-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader>
              <div className="w-12 h-12 bg-dulu-orange/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="text-dulu-orange" size={24} />
              </div>
              <CardTitle>Media Buying</CardTitle>
              <CardDescription>
                Optimisez vos campagnes publicitaires sur Meta et LinkedIn
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Stratégies publicitaires personnalisées</li>
                <li>• Optimisation des conversions</li>
                <li>• Analyse de performance détaillée</li>
                <li>• Ciblage précis de votre audience</li>
              </ul>
              <Button variant="outline" className="w-full">
                En savoir plus
              </Button>
            </CardContent>
            </Card>
          </motion.div>

          {/* Automatisation */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-dulu-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader>
              <div className="w-12 h-12 bg-dulu-blue/10 rounded-lg flex items-center justify-center mb-4">
                <MessageSquareMore className="text-dulu-blue" size={24} />
              </div>
              <CardTitle>Automatisation des réponses</CardTitle>
              <CardDescription>
                Gérez efficacement vos communications clients
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Réponses automatisées intelligentes</li>
                <li>• Intégration multi-canaux</li>
                <li>• Personnalisation des messages</li>
                <li>• Suivi et analyse des interactions</li>
              </ul>
              <Button variant="outline" className="w-full">
                En savoir plus
              </Button>
            </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
