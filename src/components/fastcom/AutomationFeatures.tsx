import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, MessageSquare, Zap } from "lucide-react";
import { motion } from "framer-motion";

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

const AutomationFeatures = () => {
  return (
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
  );
};

export default AutomationFeatures;