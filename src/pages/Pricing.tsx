import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Facebook, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import FreeAdsForm from "@/components/pricing/FreeAdsForm";

const Pricing = () => {
  const { t } = useTranslation();
  const [showFreeAdsForm, setShowFreeAdsForm] = useState(false);

  useEffect(() => {
    console.log("Tracking Lead event for pricing page");
    // @ts-ignore
    if (window.fbq) {
      // @ts-ignore
      window.fbq('track', 'Lead');
    }
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const handleCallClick = () => {
    window.location.href = "tel:+237693997244";
    console.log("Initiating call to +237693997244");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              <div className="flex justify-center space-x-4 mb-6">
                <Facebook className="w-8 h-8 text-[#1877F2]" />
                <Instagram className="w-8 h-8 text-[#E4405F]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t("pricing.title")}
              </h1>
              <p className="text-xl text-gray-600">
                {t("pricing.subtitle")}
              </p>
            </motion.div>

            {/* Free Ads Offer Section */}
            <section className="py-12 bg-gradient-to-r from-dulu-orange/10 to-dulu-orange/20">
              <div className="container mx-auto px-4">
                <motion.div 
                  className="text-center max-w-2xl mx-auto"
                  initial="initial"
                  animate="animate"
                  variants={fadeInUp}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {t("pricing.freeAds.title")}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    {t("pricing.freeAds.subtitle")}
                  </p>
                  <Button 
                    onClick={() => setShowFreeAdsForm(true)}
                    className="bg-dulu-orange hover:bg-dulu-orange/90 text-white px-8 py-6 text-lg"
                  >
                    {t("pricing.freeAds.cta")}
                  </Button>
                </motion.div>
              </div>
            </section>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Standard Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="relative h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{t("pricing.standardPlan.title")}</CardTitle>
                    <CardDescription>{t("pricing.standardPlan.description")}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{t("pricing.standardPlan.price")}</span>
                      <div className="text-sm text-gray-500">{t("pricing.standardPlan.priceEuro")}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {(t("pricing.standardPlan.features", { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-dulu-orange shrink-0 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-dulu-orange hover:bg-dulu-orange/90"
                      onClick={handleCallClick}
                    >
                      {t("pricing.standardPlan.cta")}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* FastCom Pro Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="relative h-full hover:shadow-lg transition-shadow border-dulu-orange">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-dulu-orange text-white px-3 py-1 rounded-full text-sm">
                      {t("pricing.proPlan.badge")}
                    </span>
                  </div>
                  <CardHeader>
                    <CardTitle>{t("pricing.proPlan.title")}</CardTitle>
                    <CardDescription>{t("pricing.proPlan.description")}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{t("pricing.proPlan.price")}</span>
                      <div className="text-sm text-gray-500">{t("pricing.proPlan.priceEuro")}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {(t("pricing.proPlan.features", { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-dulu-orange shrink-0 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-dulu-orange hover:bg-dulu-orange/90"
                      onClick={handleCallClick}
                    >
                      {t("pricing.proPlan.cta")}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-6">{t("pricing.benefits.title")}</h2>
              <p className="text-gray-600">{t("pricing.benefits.subtitle")}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {(t("pricing.benefits.items", { returnObjects: true }) as Array<{ title: string; description: string }>).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FreeAdsForm open={showFreeAdsForm} onOpenChange={setShowFreeAdsForm} />
    </div>
  );
};

export default Pricing;
