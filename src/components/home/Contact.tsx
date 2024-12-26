import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
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
            Contactez-nous
          </h2>
          <p className="text-gray-600">
            Prêt à transformer votre présence numérique ? Contactez-nous dès aujourd'hui.
          </p>
        </motion.div>

        <motion.div 
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <Input
                  id="name"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Sujet
              </label>
              <Input
                id="subject"
                placeholder="Sujet de votre message"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Votre message"
                className="min-h-[150px]"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button type="submit" className="w-full bg-dulu-orange hover:bg-dulu-orange/90">
                Envoyer le message
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;