import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Target, MessageSquareMore, Image, Users, PlayCircle, PieChart, FileSpreadsheet, CheckCircle2, MessageSquare, Bot, Zap } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";

const FastComPro = () => {
  const mediaFeatures = [
    {
      icon: MessageSquareMore,
      title: "Conception du message publicitaire",
      description: "Rédaction de messages impactants, optimisés pour captiver l'audience cible et rendre l'offre irrésistible."
    },
    {
      icon: Target,
      title: "Titres publicitaires accrocheurs",
      description: "Création de titres engageants et persuasifs, parfaitement adaptés à vos objectifs de campagne."
    },
    {
      icon: Image,
      title: "Visuels créatifs",
      description: "Élaboration de visuels percutants qui renforcent votre message et captent l'attention."
    },
    {
      icon: Users,
      title: "Ciblage précis",
      description: "Paramétrage détaillé pour atteindre votre audience idéale (âge, sexe, intérêts, géolocalisation)."
    },
    {
      icon: PlayCircle,
      title: "Lancement optimisé",
      description: "Mise en ligne professionnelle avec tous les réglages techniques nécessaires."
    },
    {
      icon: PieChart,
      title: "Optimisation du budget",
      description: "Suivi quotidien et ajustements stratégiques pour maximiser votre retour sur investissement."
    },
    {
      icon: FileSpreadsheet,
      title: "Rapports détaillés",
      description: "Analyse complète des performances : ROI, CPC, CTR, conversions et plus encore."
    },
    {
      icon: Phone,
      title: "Conseils de conversion (Offert)",
      description: "Conseils pratiques pour convertir efficacement les leads générés en clients."
    }
  ];

  const autoFeatures = [
    {
      icon: Bot,
      title: "Réponses Automatisées",
      description: "Système intelligent qui répond instantanément aux messages de vos clients 24h/24 et 7j/7."
    },
    {
      icon: MessageSquare,
      title: "Messages Personnalisés",
      description: "Réponses adaptées selon le type de demande et le profil du client."
    },
    {
      icon: Zap,
      title: "Traitement Rapide",
      description: "Gestion efficace des demandes clients avec des réponses instantanées et pertinentes."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-32">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Hero Section */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">FastCom Pro</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformez votre présence publicitaire avec notre expertise en Media Buying et 
              automatisation des réponses clients. Une approche complète qui maximise vos conversions.
            </p>
            <Button 
              size="lg"
              className="bg-dulu-orange hover:bg-dulu-orange/90"
              onClick={() => window.location.href = "tel:+237693997244"}
            >
              <Phone className="mr-2 h-5 w-5" />
              Contactez-nous maintenant
            </Button>
          </motion.div>

          {/* Main Image */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Media Buying Excellence"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
              <div className="text-white p-8 max-w-2xl">
                <h2 className="text-3xl font-bold mb-4">Excellence en Media Buying</h2>
                <p className="text-lg">
                  Notre expertise transforme vos campagnes publicitaires en véritables moteurs de croissance
                </p>
              </div>
            </div>
          </motion.div>

          {/* Media Buying Features */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Services Media Buying</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-dulu-orange/10 rounded-lg flex items-center justify-center mb-4">
                        {<feature.icon className="text-dulu-orange" size={24} />}
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Automation Features */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Automatisation des Réponses</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {autoFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-dulu-orange/10 rounded-lg flex items-center justify-center mb-4">
                        {<feature.icon className="text-dulu-orange" size={24} />}
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-dulu-orange/10 p-8 md:p-12 rounded-xl text-center space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">Prêt à transformer votre stratégie publicitaire ?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez comment notre expertise en Media Buying et automatisation peut rendre votre offre irrésistible 
              et maximiser vos conversions.
            </p>
            <Button 
              size="lg"
              className="bg-dulu-orange hover:bg-dulu-orange/90"
              onClick={() => window.location.href = "tel:+237693997244"}
            >
              <Phone className="mr-2 h-5 w-5" />
              Appelez-nous maintenant
            </Button>
          </motion.div>

          {/* Benefits Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Pourquoi choisir notre expertise ?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Optimisation continue des campagnes",
                "Ciblage précis de votre audience",
                "Messages publicitaires impactants",
                "Maximisation du ROI",
                "Rapports détaillés et transparents",
                "Support dédié et réponses automatisées 24/7"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
                >
                  <CheckCircle2 className="text-dulu-orange h-6 w-6 shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FastComPro;