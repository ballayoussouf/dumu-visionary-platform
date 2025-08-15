import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Smartphone, Star, Shield, Zap, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const DuluBeta = () => {
  const [downloadingAndroid, setDownloadingAndroid] = useState(false);

  const handleAndroidDownload = () => {
    setDownloadingAndroid(true);
    setTimeout(() => {
      window.open("https://drive.google.com/file/d/139mstBBYc8mwhHX2s2U3buN7tZXFtdAK/view?usp=drive_link", "_blank");
      setDownloadingAndroid(false);
    }, 1500);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    "Interface conversationnelle intuitive",
    "Reconnaissance vocale avancée", 
    "Analyses financières intelligentes",
    "Conseils personnalisés en temps réel",
    "Synchronisation multi-appareils",
    "Sécurité de niveau bancaire"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 overflow-hidden relative">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${80 + i * 20}px`,
              height: `${80 + i * 20}px`,
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.header 
          className="text-center py-16"
          {...fadeInUp}
        >
          <motion.div 
            className="inline-block w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-2xl mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            D
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-4">
            DULU Finance Manager
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-6 font-light">
            Gérez vos finances avec l'intelligence conversationnelle
          </p>
          
          <motion.div 
            className="inline-block bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider"
            animate={{ boxShadow: ["0 0 20px rgba(255,107,107,0.5)", "0 0 30px rgba(254,202,87,0.8)", "0 0 20px rgba(255,107,107,0.5)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Version Beta
          </motion.div>
        </motion.header>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Rejoignez la révolution financière
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Découvrez une nouvelle façon de gérer vos finances personnelles grâce à notre assistant intelligent. 
              Parlez simplement à votre téléphone pour enregistrer vos dépenses, analyser vos habitudes et recevoir des conseils personnalisés.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Star className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-8 relative overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
                <motion.div
                  className="h-full w-full bg-gradient-to-r from-transparent via-white to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                Télécharger la Beta
              </h3>

              <div className="space-y-6">
                {/* Android Download */}
                <Button
                  onClick={handleAndroidDownload}
                  disabled={downloadingAndroid}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-center gap-4">
                    <Smartphone className="w-8 h-8" />
                    <span>Télécharger pour Android</span>
                    {downloadingAndroid && (
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    )}
                  </div>
                </Button>

                {/* iOS Coming Soon */}
                <Button
                  disabled
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 opacity-60 text-white p-6 text-lg font-semibold rounded-xl cursor-not-allowed"
                >
                  <div className="flex items-center justify-center gap-4">
                    <Smartphone className="w-8 h-8" />
                    <span>iOS - En cours de développement</span>
                  </div>
                </Button>
              </div>

              {/* Installation Instructions */}
              <Card className="bg-black/20 border-green-400/50 border-l-4 p-6 mt-8">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Instructions d'installation
                </h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  <strong>Android:</strong> Activez "Sources inconnues" dans les paramètres de sécurité avant d'installer l'APK.<br />
                  <strong>iOS:</strong> Version bientôt disponible - restez connectés !
                </p>
              </Card>

              {/* Version Info */}
              <Card className="bg-black/20 p-6 mt-6">
                <h3 className="text-white font-semibold text-xl mb-4 text-center">
                  Informations de version
                </h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-white font-semibold">Version</div>
                    <div className="text-white/80">1.0.0 Beta</div>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Build</div>
                    <div className="text-white/80">2025.01.001</div>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Dernière MAJ</div>
                    <div className="text-white/80">15 Jan 2025</div>
                  </div>
                </div>
              </Card>
            </Card>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Pourquoi choisir DULU Finance Manager ?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Interface Intuitive", desc: "Parlez naturellement pour gérer vos finances" },
              { icon: TrendingUp, title: "Analyses Avancées", desc: "Insights personnalisés pour optimiser vos dépenses" },
              { icon: Shield, title: "Sécurité Maximale", desc: "Protection de niveau bancaire pour vos données" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <benefit.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-3">{benefit.title}</h4>
                  <p className="text-white/80">{benefit.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default DuluBeta;