import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex items-center pattern-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/50" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -right-64 -top-64 w-[800px] h-[800px] rounded-full bg-dulu-beige/30 blur-3xl" 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -left-64 -bottom-64 w-[800px] h-[800px] rounded-full bg-dulu-blue/10 blur-3xl" 
        />
      </div>

      {/* Main image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block z-10">
        <motion.img 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.9 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src="/lovable-uploads/d221e0db-4859-4aa4-aa74-2646794e530b.png"
          alt="Digital Solutions"
          className="rounded-l-3xl w-[500px] h-[400px] object-cover shadow-2xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block pt-20 md:pt-0"
          >
            <span className="inline-flex items-center rounded-full bg-dulu-beige px-4 py-1 text-sm font-medium text-dulu-orange mb-6">
              {t("hero.badge")}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {t("hero.title")}{" "}
            <span className="text-dulu-orange relative">
              {t("hero.highlight")}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 318 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M317 11C217.5 11 118.5 1 1 1" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <br />
            {t("hero.subtitle")}
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 mb-8 pr-4 lg:pr-8 xl:pr-12"
          >
            {t("hero.description")}
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/fastcom-pro">
              <Button size="lg" className="bg-dulu-orange hover:bg-dulu-orange/90 text-lg px-8">
                {t("hero.cta.discover")}
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <a href="#contact">
              <Button size="lg" variant="outline" className="text-lg px-8">
                {t("hero.cta.contact")}
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8"
          >
            <div>
              <div className="text-3xl font-bold text-dulu-orange">20+</div>
              <div className="text-gray-600">{t("hero.stats.clients")}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-dulu-blue">98%</div>
              <div className="text-gray-600">{t("hero.stats.satisfaction")}</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-3xl font-bold text-dulu-orange">24/7</div>
              <div className="text-gray-600">{t("hero.stats.support")}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;