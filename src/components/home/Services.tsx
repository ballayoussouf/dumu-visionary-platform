import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, MessageSquareMore, Target, FileSpreadsheet, Phone, Bot, Share2, UserCog, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
            <Card className="flex flex-col min-h-[500px] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-dulu-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="text-dulu-orange" size={24} />
                </div>
                <CardTitle>Media Buying Expert</CardTitle>
                <CardDescription>
                  Optimisez vos campagnes publicitaires et maximisez votre ROI
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-3 text-gray-600 mb-6 flex-grow">
                  <li className="flex items-start">
                    <Target className="mr-2 h-5 w-5 text-dulu-orange shrink-0" />
                    <span>Conception de messages publicitaires impactants</span>
                  </li>
                  <li className="flex items-start">
                    <MessageSquareMore className="mr-2 h-5 w-5 text-dulu-orange shrink-0" />
                    <span>Création de titres et visuels accrocheurs</span>
                  </li>
                  <li className="flex items-start">
                    <FileSpreadsheet className="mr-2 h-5 w-5 text-dulu-orange shrink-0" />
                    <span>Optimisation continue et rapports détaillés</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="mr-2 h-5 w-5 text-dulu-orange shrink-0" />
                    <span>Conseils de conversion téléphonique offerts</span>
                  </li>
                </ul>
                <Link to="/fastcom-pro" className="mt-auto w-full">
                  <Button className="w-full bg-dulu-orange hover:bg-dulu-orange/90">
                    Découvrir l'offre complète
                  </Button>
                </Link>
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
            <Card className="flex flex-col min-h-[500px] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-dulu-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquareMore className="text-dulu-blue" size={24} />
                </div>
                <CardTitle>Automatisation des réponses</CardTitle>
                <CardDescription>
                  Gérez efficacement vos communications clients
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-3 text-gray-600 mb-6 flex-grow">
                  <li className="flex items-start">
                    <Bot className="mr-2 h-5 w-5 text-dulu-blue shrink-0" />
                    <span>Réponses automatisées intelligentes</span>
                  </li>
                  <li className="flex items-start">
                    <Share2 className="mr-2 h-5 w-5 text-dulu-blue shrink-0" />
                    <span>Intégration multi-canaux</span>
                  </li>
                  <li className="flex items-start">
                    <UserCog className="mr-2 h-5 w-5 text-dulu-blue shrink-0" />
                    <span>Personnalisation des messages</span>
                  </li>
                  <li className="flex items-start">
                    <LineChart className="mr-2 h-5 w-5 text-dulu-blue shrink-0" />
                    <span>Suivi et analyse des interactions</span>
                  </li>
                </ul>
                <Link to="/fastcom-pro" className="mt-auto w-full">
                  <Button className="w-full bg-dulu-blue hover:bg-dulu-blue/90">
                    Découvrir l'offre complète
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;