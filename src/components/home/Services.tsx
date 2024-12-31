import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, MessageSquareMore, Target, FileSpreadsheet, Phone, Bot, Share2, UserCog, LineChart, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  
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
            {t("services.title")}
          </h2>
          <p className="text-gray-600">
            {t("services.subtitle")}
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
                <CardTitle>{t("services.mediaBuying.title")}</CardTitle>
                <CardDescription>
                  {t("services.mediaBuying.subtitle")}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-3 text-gray-600 mb-6 flex-grow">
                  <li className="flex items-start">
                    <Target className="mr-2 h-5 w-5 text-dulu-orange shrink-0" />
                    <span>{t("services.mediaBuying.features.messages")}</span>
                  </li>
                  <li className="flex items-start">
                    <MessageSquareMore className="mr-2 h-5 w-5 text-dulu-orange shrink-0" />
                    <span>{t("services.mediaBuying.features.titles")}</span>
                  </li>
                  <li className="flex items-start">
                    <FileSpreadsheet className="mr-2 h-5 w-5 text-dulu-orange shrink-0" />
                    <span>{t("services.mediaBuying.features.reports")}</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="mr-2 h-5 w-5 text-dulu-orange shrink-0" />
                    <span>{t("services.mediaBuying.features.tips")}</span>
                  </li>
                </ul>
                <Link to="/fastcom-pro" className="mt-auto w-full">
                  <Button className="w-full bg-dulu-orange hover:bg-dulu-orange/90">
                    {t("services.discoverMore")}
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
                <CardTitle>{t("services.automation.title")}</CardTitle>
                <CardDescription>
                  {t("services.automation.subtitle")}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-3 text-gray-600 mb-6 flex-grow">
                  <li className="flex items-start">
                    <Bot className="mr-2 h-5 w-5 text-dulu-blue shrink-0" />
                    <span>{t("services.automation.features.responses")}</span>
                  </li>
                  <li className="flex items-start">
                    <Share2 className="mr-2 h-5 w-5 text-dulu-blue shrink-0" />
                    <span>{t("services.automation.features.integration")}</span>
                  </li>
                  <li className="flex items-start">
                    <UserCog className="mr-2 h-5 w-5 text-dulu-blue shrink-0" />
                    <span>{t("services.automation.features.personalization")}</span>
                  </li>
                  <li className="flex items-start">
                    <LineChart className="mr-2 h-5 w-5 text-dulu-blue shrink-0" />
                    <span>{t("services.automation.features.analytics")}</span>
                  </li>
                  <li className="flex items-start">
                    <UserRound className="mr-2 h-5 w-5 text-dulu-blue shrink-0" />
                    <span>{t("services.automation.features.humanization")}</span>
                  </li>
                </ul>
                <Link to="/fastcom-pro" className="mt-auto w-full">
                  <Button className="w-full bg-dulu-blue hover:bg-dulu-blue/90">
                    {t("services.discoverMore")}
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