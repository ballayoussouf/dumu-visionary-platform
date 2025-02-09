import { motion } from "framer-motion";
import { ArrowRight, Database, MessageSquare, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const AutomationRoadmap = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <Database className="w-12 h-12 text-dulu-orange" />,
      title: t("automationRoadmap.step1.title"),
      description: t("automationRoadmap.step1.description"),
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-dulu-orange" />,
      title: t("automationRoadmap.step2.title"),
      description: t("automationRoadmap.step2.description"),
    },
    {
      icon: <ArrowRight className="w-12 h-12 text-dulu-orange" />,
      title: t("automationRoadmap.step3.title"),
      description: t("automationRoadmap.step3.description"),
    },
    {
      icon: <CheckCircle2 className="w-12 h-12 text-dulu-orange" />,
      title: t("automationRoadmap.step4.title"),
      description: t("automationRoadmap.step4.description"),
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

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
            {t("automationRoadmap.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("automationRoadmap.subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm relative"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                className="mb-4"
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <motion.div
                  variants={arrowVariants}
                  className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <ArrowRight />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AutomationRoadmap;