import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Globe, Trash2, ChevronLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import photodropLogo from "@/assets/photodrop-logo.png";

const PhotodropDeleteAccount = () => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const content = {
    fr: {
      title: "Suppression de Compte — PhotoDrop QR",
      subtitle: "Demandez la suppression de votre compte et de vos données",
      description: "Si vous souhaitez supprimer votre compte PhotoDrop QR et toutes les données associées, veuillez remplir le formulaire ci-dessous. Nous traiterons votre demande dans les plus brefs délais.",
      warning: "Cette action est irréversible. Toutes vos données, y compris vos photos et vidéos, seront définitivement supprimées.",
      form: {
        name: "Nom complet",
        email: "Adresse e-mail",
        phone: "Numéro de téléphone (utilisé dans l'app)",
        reason: "Raison de la suppression (optionnel)",
        reasonPlaceholder: "Pourquoi souhaitez-vous supprimer votre compte ?",
        submit: "Envoyer la demande",
        submitting: "Envoi en cours..."
      },
      success: {
        title: "Demande envoyée",
        description: "Nous avons bien reçu votre demande de suppression. Vous recevrez une confirmation par e-mail."
      },
      error: {
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer."
      },
      backToApp: "Retour à l'application",
      contact: "Contact : gaston.effa@gmail.com"
    },
    en: {
      title: "Account Deletion — PhotoDrop QR",
      subtitle: "Request deletion of your account and data",
      description: "If you wish to delete your PhotoDrop QR account and all associated data, please fill out the form below. We will process your request as soon as possible.",
      warning: "This action is irreversible. All your data, including your photos and videos, will be permanently deleted.",
      form: {
        name: "Full name",
        email: "Email address",
        phone: "Phone number (used in the app)",
        reason: "Reason for deletion (optional)",
        reasonPlaceholder: "Why do you want to delete your account?",
        submit: "Submit request",
        submitting: "Submitting..."
      },
      success: {
        title: "Request sent",
        description: "We have received your deletion request. You will receive a confirmation email."
      },
      error: {
        title: "Error",
        description: "An error occurred. Please try again."
      },
      backToApp: "Back to app",
      contact: "Contact: gaston.effa@gmail.com"
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_jbs06wl',
        'template_agzvq6k',
        form.current,
        'HzSqYcuScnzmGGruq'
      );

      toast({
        title: content[language].success.title,
        description: content[language].success.description,
      });

      if (form.current) {
        form.current.reset();
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: content[language].error.title,
        description: content[language].error.description,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-rose-600 to-pink-500 relative">
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
                    ? 'bg-white text-red-600 hover:bg-white/90' 
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
                    ? 'bg-white text-red-600 hover:bg-white/90' 
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
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-pink-100 to-rose-100 bg-clip-text text-transparent mb-4">
            {content[language].title}
          </h1>
          
          <p className="text-white/90 text-lg font-semibold mb-2">
            {content[language].subtitle}
          </p>
          
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
            {content[language].description}
          </p>
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-6 sm:p-8 lg:p-12 max-w-2xl mx-auto">
            {/* Warning Banner */}
            <div className="mb-8 p-4 bg-red-500/20 border border-red-300/30 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
              <p className="text-white text-sm leading-relaxed">
                {content[language].warning}
              </p>
            </div>

            {/* Form */}
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="subject" value="PhotoDrop QR - Demande de suppression de compte / Account Deletion Request" />
              
              <div>
                <label htmlFor="user_name" className="block text-white font-semibold mb-2">
                  {content[language].form.name} *
                </label>
                <Input
                  id="user_name"
                  name="user_name"
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  placeholder={content[language].form.name}
                />
              </div>

              <div>
                <label htmlFor="user_email" className="block text-white font-semibold mb-2">
                  {content[language].form.email} *
                </label>
                <Input
                  id="user_email"
                  name="user_email"
                  type="email"
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="user_phone" className="block text-white font-semibold mb-2">
                  {content[language].form.phone} *
                </label>
                <Input
                  id="user_phone"
                  name="user_phone"
                  type="tel"
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  placeholder="+237 6XX XXX XXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  {content[language].form.reason}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 min-h-[120px]"
                  placeholder={content[language].form.reasonPlaceholder}
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-white text-red-600 hover:bg-white/90 font-semibold py-6 text-lg"
              >
                <Trash2 className="w-5 h-5 mr-2" />
                {isSubmitting ? content[language].form.submitting : content[language].form.submit}
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-white/20 text-center">
              <p className="text-white font-semibold">
                {content[language].contact}
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default PhotodropDeleteAccount;
