import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Download, 
  Phone, 
  Apple, 
  Star, 
  Shield, 
  Camera, 
  QrCode, 
  CreditCard, 
  CheckCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PhotodropBeta = () => {
  const [downloadingAndroid, setDownloadingAndroid] = useState(false);

  const handleAndroidDownload = () => {
    setDownloadingAndroid(true);
    setTimeout(() => {
      window.open("https://dulu-finance.duckdns.org/photodrop/photodrop-pilot-release.apk", "_blank");
      setDownloadingAndroid(false);
    }, 1500);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    "Scanner QR intégré avec flash",
    "Partage sécurisé de médias",
    "Paiements mobiles (Orange/MTN Money)", 
    "Gestion des prix personnalisés",
    "Interface photographe et client",
    "Téléchargements haute qualité"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-500 overflow-hidden relative">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: `${60 + i * 25}px`,
              height: `${60 + i * 25}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + i * 0.5,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.header 
          className="text-center py-12 sm:py-16 lg:py-20"
          {...fadeInUp}
        >
          <div className="flex justify-center mb-6">
            <motion.div 
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/20 overflow-hidden"
              animate={{ 
                scale: [1, 1.05, 1],
                rotateY: [0, 180, 360]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Camera className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </motion.div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white via-cyan-100 to-teal-100 bg-clip-text text-transparent mb-4 sm:mb-6 drop-shadow-lg">
            PhotoDrop QR
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            Partagez et monétisez vos médias en toute simplicité
          </p>
          
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold uppercase tracking-wider shadow-lg border border-white/30"
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(255,107,107,0.5)", 
                "0 0 30px rgba(254,202,87,0.8)", 
                "0 0 40px rgba(255,107,107,0.7)",
                "0 0 20px rgba(255,107,107,0.5)"
              ] 
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Star className="w-4 h-4" />
            Version Beta
            <Star className="w-4 h-4" />
          </motion.div>
        </motion.header>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Left Content */}
          <motion.div 
            className="text-white order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              La révolution du partage photo
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
              PhotoDrop QR permet aux photographes de partager leurs créations avec leurs clients via des codes QR. 
              Les clients peuvent scanner, prévisualiser et acheter les médias en toute sécurité avec les paiements mobiles locaux.
            </p>

            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start sm:items-center text-sm sm:text-base lg:text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mr-3 sm:mr-4 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span className="leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Download Section */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-4 sm:p-6 lg:p-8 relative overflow-hidden shadow-2xl">
              {/* Animated border gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 rounded-t-lg">
                <motion.div
                  className="h-full w-32 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center mb-6 sm:mb-8">
                Télécharger la Beta
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {/* Android Download */}
                <Button
                  onClick={handleAndroidDownload}
                  disabled={downloadingAndroid}
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white p-4 sm:p-6 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-emerald-400/30"
                >
                  <div className="flex items-center justify-center gap-3 sm:gap-4">
                    <img 
                      src="/lovable-uploads/e80f4e96-1392-4390-ae86-06fe85b1bbd2.png" 
                      alt="Android" 
                      className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" 
                    />
                    <span className="flex-1 text-center">Télécharger pour Android</span>
                    {downloadingAndroid && (
                      <motion.div
                        className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full flex-shrink-0"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    )}
                  </div>
                </Button>

                {/* iOS Coming Soon */}
                <Button
                  disabled
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 opacity-60 text-white p-4 sm:p-6 text-base sm:text-lg font-semibold rounded-xl cursor-not-allowed border border-blue-400/30"
                >
                  <div className="flex items-center justify-center gap-3 sm:gap-4">
                    <img 
                      src="/lovable-uploads/8d2cbd3a-0ab2-4ddb-bb5e-3af244ab7177.png" 
                      alt="iOS" 
                      className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" 
                    />
                    <span className="flex-1 text-center">iOS - En cours de développement</span>
                  </div>
                </Button>
              </div>

              {/* Installation Instructions */}
              <Card className="bg-black/20 border-emerald-400/50 border-l-4 p-4 sm:p-6 mt-6 sm:mt-8 backdrop-blur-sm">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm sm:text-base">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  Instructions d'installation
                </h4>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                  <strong>Android:</strong> Activez "Sources inconnues" dans les paramètres de sécurité avant d'installer l'APK.<br />
                  <strong>iOS:</strong> Version bientôt disponible - restez connectés !
                </p>
              </Card>

              {/* Version Info */}
              <Card className="bg-black/20 p-4 sm:p-6 mt-4 sm:mt-6 backdrop-blur-sm">
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-4 text-center">
                  Informations de version
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="bg-white/5 p-3 rounded-lg">
                    <div className="text-white font-semibold text-sm sm:text-base">Version</div>
                    <div className="text-white/80 text-sm">1.0.0 Beta</div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg">
                    <div className="text-white font-semibold text-sm sm:text-base">Build</div>
                    <div className="text-white/80 text-sm">2025.01.001</div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg">
                    <div className="text-white font-semibold text-sm sm:text-base">Dernière MAJ</div>
                    <div className="text-white/80 text-sm">28 Août 2025</div>
                  </div>
                </div>
              </Card>
            </Card>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.section 
          className="mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-12 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
            Pourquoi choisir PhotoDrop QR ?
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: QrCode, title: "Scanner QR Avancé", desc: "Scanner intégré avec flash pour tous vos besoins" },
              { icon: CreditCard, title: "Paiements Locaux", desc: "Orange Money et MTN Money intégrés" },
              { icon: Shield, title: "Partage Sécurisé", desc: "Protection maximale de vos médias précieux" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-4 sm:p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-lg">
                  <div className="bg-gradient-to-br from-white/20 to-white/5 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 border border-white/20">
                    <benefit.icon className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">{benefit.title}</h4>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed">{benefit.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default PhotodropBeta;