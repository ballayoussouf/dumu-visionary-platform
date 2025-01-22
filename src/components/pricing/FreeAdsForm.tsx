import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import Confetti from 'react-confetti';
import { motion } from "framer-motion";

interface FreeAdsFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FreeAdsForm = ({ open, onOpenChange }: FreeAdsFormProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!form.current) return;

    try {
      const templateParams = {
        subject: "Nouveau Prospect - Pubs Gratuites - Flow By Dulu",
        user_name: form.current.user_name.value,
        user_email: form.current.user_email.value,
        message: `Numéro de téléphone: ${form.current.phone.value}`
      };

      await emailjs.send(
        'service_jbs06wl',
        'template_agzvq6k',
        templateParams,
        'HzSqYcuScnzmGGruq'
      );

      setShowSuccess(true);
      
      toast({
        title: t("pricing.freeAds.form.success.title"),
        description: t("pricing.freeAds.form.success.description"),
      });

      // Réinitialiser le formulaire
      if (form.current) {
        form.current.reset();
      }

      // Attendre 3 secondes avant de fermer le modal
      setTimeout(() => {
        setShowSuccess(false);
        onOpenChange(false);
      }, 3000);

    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: t("contact.form.error.title"),
        description: t("contact.form.error.description"),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        {showSuccess && (
          <>
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              recycle={false}
              numberOfPieces={200}
            />
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 z-50"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
              <p className="text-xl font-semibold text-center">
                {t("pricing.freeAds.form.success.title")}
              </p>
            </motion.div>
          </>
        )}
        <DialogHeader>
          <DialogTitle>{t("pricing.freeAds.form.title")}</DialogTitle>
        </DialogHeader>
        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              name="user_name"
              placeholder={t("pricing.freeAds.form.name")}
              required
            />
          </div>
          <div>
            <Input
              name="user_email"
              type="email"
              placeholder={t("pricing.freeAds.form.email")}
              required
            />
          </div>
          <div>
            <Input
              name="phone"
              type="tel"
              placeholder={t("pricing.freeAds.form.phone")}
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-dulu-orange hover:bg-dulu-orange/90"
            disabled={isSubmitting}
          >
            {t("pricing.freeAds.form.submit")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FreeAdsForm;