import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRight, Bot, MessageSquare, Zap, CheckCircle } from "lucide-react";

const AutomationRoadmap = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: t("automation.steps.request"),
      description: t("automation.steps.requestDesc")
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: t("automation.steps.ai"),
      description: t("automation.steps.aiDesc")
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t("automation.steps.process"),
      description: t("automation.steps.processDesc")
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: t("automation.steps.delivery"),
      description: t("automation.steps.deliveryDesc")
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("automation.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("automation.subtitle")}
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-dulu-orange/20 -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-lg p-6 shadow-lg relative z-10">
                  <div className="bg-dulu-orange/10 rounded-full p-4 inline-block mb-4">
                    <div className="text-dulu-orange">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="absolute top-1/2 -right-4 w-6 h-6 text-dulu-orange -translate-y-1/2 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationRoadmap;