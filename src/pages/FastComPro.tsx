import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import MediaBuyingFeatures from "@/components/fastcom/MediaBuyingFeatures";
import AutomationFeatures from "@/components/fastcom/AutomationFeatures";
import { useTranslation } from "react-i18next";

const FastComPro = () => {
  const { t } = useTranslation();

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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{t("fastcomPro.title")}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("fastcomPro.subtitle")}
            </p>
            <Button 
              size="lg"
              className="bg-dulu-orange hover:bg-dulu-orange/90"
              onClick={() => window.location.href = "tel:+237693997244"}
            >
              <Phone className="mr-2 h-5 w-5" />
              {t("fastcomPro.contactUs")}
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
                <h2 className="text-3xl font-bold mb-4">{t("fastcomPro.mediaBuying.title")}</h2>
                <p className="text-lg">
                  {t("fastcomPro.mediaBuying.subtitle")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Media Buying Features */}
          <MediaBuyingFeatures />

          {/* Automation Features */}
          <AutomationFeatures />

          {/* Benefits Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">{t("fastcomPro.benefits.title")}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                t("fastcomPro.benefits.optimization"),
                t("fastcomPro.benefits.targeting"),
                t("fastcomPro.benefits.messages"),
                t("fastcomPro.benefits.roi"),
                t("fastcomPro.benefits.reports"),
                t("fastcomPro.benefits.support")
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
                >
                  <Phone className="text-dulu-orange h-6 w-6 shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
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
            <h2 className="text-3xl font-bold text-gray-900">{t("fastcomPro.cta.title")}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("fastcomPro.cta.description")}
            </p>
            <Button 
              size="lg"
              className="bg-dulu-orange hover:bg-dulu-orange/90"
              onClick={() => window.location.href = "tel:+237693997244"}
            >
              <Phone className="mr-2 h-5 w-5" />
              {t("fastcomPro.cta.button")}
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FastComPro;