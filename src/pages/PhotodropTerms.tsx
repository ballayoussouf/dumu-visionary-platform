import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Shield, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import photodropLogo from "@/assets/photodrop-logo.png";

const PhotodropTerms = () => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const content = {
    fr: {
      title: "Politique de Confidentialité — PhotoDrop QR",
      lastUpdated: "Dernière mise à jour : 29 septembre 2025",
      sections: [
        {
          title: "1. Présentation",
          content: "PhotoDrop QR (ci-après « PhotoDrop », « nous ») collecte et traite certaines informations personnelles afin de fournir, sécuriser et améliorer le service mobile et web. Nous nous engageons à protéger vos données conformément aux lois applicables."
        },
        {
          title: "2. Responsable du traitement",
          content: "Pour toute question : gaston.effa@gmail.com"
        },
        {
          title: "3. Données collectées",
          content: "• Données d'identification : numéro de téléphone, nom (si fourni), adresse e-mail (optionnel).\n• Contenu utilisateur : photos, vidéos et métadonnées (date, lieu si fourni).\n• Données de paiement : nous utilisons PawaPay ; nous ne stockons pas les numéros de carte ou données sensibles de paiement sur nos serveurs. Seules des références de transaction sont conservées pour le suivi.\n• Données techniques et d'usage : type d'appareil, OS, identifiants anonymes, logs, adresse IP, données d'utilisation (pages vues, actions).\n• Localisation : uniquement si vous l'autorisez expressément (pour géolocaliser une photo)."
        },
        {
          title: "4. Finalités du traitement",
          content: "• Fournir le service (authentification, upload, accès média).\n• Paiements et facturation.\n• Amélioration et analyses (analytics).\n• Sécurité, lutte contre la fraude et gestion des abus."
        },
        {
          title: "5. Base légale",
          content: "Traitement nécessaire à l'exécution du contrat (fourniture du service), au respect d'obligations légales, et au consentement lorsque requis (ex. géolocalisation)."
        },
        {
          title: "6. Partage des données",
          content: "• Prestataires : Supabase (hébergement, DB), PawaPay (paiements), services d'analytique — contractuellement limités à l'usage nécessaire.\n• Transferts internationaux : possibles ; nous mettons en place des garanties contractuelles.\n• Divulgations légales : si la loi l'exige."
        },
        {
          title: "7. Durée de conservation",
          content: "Les données de compte et transactions : conservation pendant la durée nécessaire (ex. 5 ans pour la comptabilité selon réglementation locale) ; contenus utilisateur : jusqu'à suppression par le photographe, sauf obligations légales."
        },
        {
          title: "8. Sécurité",
          content: "Transmissions chiffrées (HTTPS/TLS). Accès restreint au personnel autorisé. Mesures techniques et organisationnelles en place."
        },
        {
          title: "9. Droits des utilisateurs",
          content: "Droit d'accès, rectification, suppression, portabilité, opposition au traitement, limitation. Pour exercer ces droits : gaston.effa@gmail.com"
        },
        {
          title: "10. Cookies & tracking",
          content: "Utilisation limitée de cookies et technologies similaires pour analytics et performance. Consentement requis pour tracking non essentiel."
        },
        {
          title: "11. Modifications",
          content: "Nous pouvons mettre à jour la présente politique ; nous informerons les utilisateurs des changements importants."
        }
      ],
      contact: "Contact : gaston.effa@gmail.com",
      backToApp: "Retour à l'application"
    },
    en: {
      title: "Privacy Policy — PhotoDrop QR",
      lastUpdated: "Last updated: September 29, 2025",
      sections: [
        {
          title: "1. Introduction",
          content: "PhotoDrop QR (hereinafter \"PhotoDrop\", \"we\") collects and processes certain personal information in order to provide, secure and improve the mobile and web service. We are committed to protecting your data in accordance with applicable laws."
        },
        {
          title: "2. Data Controller",
          content: "For any questions: gaston.effa@gmail.com"
        },
        {
          title: "3. Data Collected",
          content: "• Identification data: phone number, name (if provided), email address (optional).\n• User content: photos, videos and metadata (date, location if provided).\n• Payment data: we use PawaPay; we do not store card numbers or sensitive payment data on our servers. Only transaction references are kept for tracking.\n• Technical and usage data: device type, OS, anonymous identifiers, logs, IP address, usage data (pages viewed, actions).\n• Location: only if you expressly authorize it (to geolocate a photo)."
        },
        {
          title: "4. Processing Purposes",
          content: "• Provide the service (authentication, upload, media access).\n• Payments and billing.\n• Improvement and analytics.\n• Security, fraud prevention and abuse management."
        },
        {
          title: "5. Legal Basis",
          content: "Processing necessary for the execution of the contract (service provision), compliance with legal obligations, and consent when required (e.g. geolocation)."
        },
        {
          title: "6. Data Sharing",
          content: "• Service providers: Supabase (hosting, DB), PawaPay (payments), analytics services — contractually limited to necessary use.\n• International transfers: possible; we implement contractual safeguards.\n• Legal disclosures: if required by law."
        },
        {
          title: "7. Retention Period",
          content: "Account and transaction data: retention for the necessary period (e.g. 5 years for accounting according to local regulations); user content: until deletion by the photographer, except legal obligations."
        },
        {
          title: "8. Security",
          content: "Encrypted transmissions (HTTPS/TLS). Restricted access to authorized personnel. Technical and organizational measures in place."
        },
        {
          title: "9. User Rights",
          content: "Right of access, rectification, deletion, portability, objection to processing, limitation. To exercise these rights: gaston.effa@gmail.com"
        },
        {
          title: "10. Cookies & Tracking",
          content: "Limited use of cookies and similar technologies for analytics and performance. Consent required for non-essential tracking."
        },
        {
          title: "11. Modifications",
          content: "We may update this policy; we will inform users of important changes."
        }
      ],
      contact: "Contact: gaston.effa@gmail.com",
      backToApp: "Back to app"
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-500 relative">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: `${40 + i * 20}px`,
              height: `${40 + i * 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-15, 15, -15],
              rotate: [0, 180, 360],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 6 + i * 0.5,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8">
        {/* Header */}
        <motion.header 
          className="text-center mb-8"
          {...fadeInUp}
        >
          <div className="flex items-center justify-between mb-6">
            <Link to="/photodrop-beta">
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                {content[language].backToApp}
              </Button>
            </Link>

            {/* Language Toggle */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
              <Button
                variant={language === 'fr' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('fr')}
                className={`rounded-full px-4 ${
                  language === 'fr' 
                    ? 'bg-white text-emerald-600 hover:bg-white/90' 
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <Globe className="w-4 h-4 mr-2" />
                FR
              </Button>
              <Button
                variant={language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('en')}
                className={`rounded-full px-4 ${
                  language === 'en' 
                    ? 'bg-white text-emerald-600 hover:bg-white/90' 
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <Globe className="w-4 h-4 mr-2" />
                EN
              </Button>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <motion.div 
              className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/20"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img 
                src={photodropLogo} 
                alt="PhotoDrop QR Logo" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-100 to-teal-100 bg-clip-text text-transparent mb-4">
            {content[language].title}
          </h1>
          
          <p className="text-white/90 text-sm sm:text-base">
            {content[language].lastUpdated}
          </p>
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              {content[language].sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="border-l-4 border-emerald-400 pl-6"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-emerald-400" />
                    {section.title}
                  </h2>
                  <div className="text-white/90 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-center pt-8 border-t border-white/20"
              >
                <p className="text-white font-semibold text-lg">
                  {content[language].contact}
                </p>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default PhotodropTerms;