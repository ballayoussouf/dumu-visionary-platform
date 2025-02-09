import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    try {
      await emailjs.sendForm(
        'service_jbs06wl',
        'template_agzvq6k',
        form.current,
        'HzSqYcuScnzmGGruq'
      );

      toast({
        title: t("contact.form.success.title"),
        description: t("contact.form.success.description"),
      });

      if (form.current) {
        form.current.reset();
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: t("contact.form.error.title"),
        description: t("contact.form.error.description"),
        variant: "destructive"
      });
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-gray-600">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <motion.div 
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto"
        >
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.form.fullName")}
                </label>
                <Input
                  id="user_name"
                  name="user_name"
                  placeholder={t("contact.form.fullName")}
                  required
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.form.email")}
                </label>
                <Input
                  id="user_email"
                  name="user_email"
                  type="email"
                  placeholder="votre@email.com"
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                {t("contact.form.subject")}
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder={t("contact.form.subject")}
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                {t("contact.form.message")}
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder={t("contact.form.message")}
                className="min-h-[150px]"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button type="submit" className="w-full bg-dulu-orange hover:bg-dulu-orange/90">
                {t("contact.form.submit")}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;