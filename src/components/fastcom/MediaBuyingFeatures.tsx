import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Target, MessageSquareMore, Image, Users, PlayCircle, PieChart, FileSpreadsheet, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MediaBuyingFeatures = () => {
  const { t } = useTranslation();

  const mediaFeatures = [
    {
      icon: MessageSquareMore,
      title: t("fastcomPro.mediaBuying.features.messageDesign"),
      description: "Rédaction de messages impactants, optimisés pour captiver l'audience cible et rendre l'offre irrésistible."
    },
    {
      icon: MessageSquareMore,
      title: t("fastcomPro.mediaBuying.features.titleDesign"),
      description: "Création de titres accrocheurs et engageants, adaptés à l'objectif de la campagne."
    },
    {
      icon: Image,
      title: t("fastcomPro.mediaBuying.features.imageDesign"),
      description: "Élaboration ou sélection de visuels créatifs et percutants, renforçant le message."
    },
    {
      icon: Target,
      title: t("fastcomPro.mediaBuying.features.targeting"),
      description: "Paramétrage précis pour atteindre efficacement la bonne audience (âge, sexe, intérêts, géolocalisation, etc.)."
    },
    {
      icon: Facebook,
      title: t("fastcomPro.mediaBuying.features.campaign"),
      description: "Mise en ligne des annonces avec tous les réglages techniques nécessaires."
    },
    {
      icon: PieChart,
      title: t("fastcomPro.mediaBuying.features.budget"),
      description: "Suivi quotidien et ajustements stratégiques pour maximiser le ROI."
    },
    {
      icon: FileSpreadsheet,
      title: t("fastcomPro.mediaBuying.features.report"),
      description: "Analyse complète des performances : ROI, CPC, CTR, conversions, etc."
    },
    {
      icon: Phone,
      title: t("fastcomPro.mediaBuying.features.phoneAdvice"),
      description: "Conseils pratiques pour convertir efficacement les leads générés."
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center">{t("fastcomPro.mediaBuying.title")}</h2>
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
  );
};

export default MediaBuyingFeatures;