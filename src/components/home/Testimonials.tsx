import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      name: t("testimonials.clients.client1.name"),
      role: t("testimonials.clients.client1.role"),
      content: t("testimonials.clients.client1.content"),
      rating: 5
    },
    {
      name: t("testimonials.clients.client2.name"),
      role: t("testimonials.clients.client2.role"),
      content: t("testimonials.clients.client2.content"),
      rating: 5
    },
    {
      name: t("testimonials.clients.client3.name"),
      role: t("testimonials.clients.client3.role"),
      content: t("testimonials.clients.client3.content"),
      rating: 5
    }
  ];

  const partners = [
    {
      name: "TechCam",
      logo: "/lovable-uploads/271a2b32-44f0-45f1-a906-11dda9b39fa8.png"
    },
    {
      name: "InnovCorp",
      logo: "/lovable-uploads/409f827e-a8f3-44f0-bc43-76da555be71c.png"
    },
    {
      name: "StartupAfrica",
      logo: "/lovable-uploads/909b9624-9087-456e-af62-43a0449a899a.png"
    },
    {
      name: "DigitalCMR",
      logo: "/lovable-uploads/b2bb0fd6-226c-49ca-b58c-00dea7a7a57f.png"
    },
    {
      name: "AfricaTech",
      logo: "/lovable-uploads/b6cbd019-d4c0-4ce9-85a0-8d105d30205c.png"
    },
    {
      name: "CamerTech",
      logo: "/lovable-uploads/a93ce0b1-39ea-4ca8-b352-9c3075175a91.png"
    }
  ];

  const plugin = useRef(
    Autoplay({ 
      delay: 2000, 
      stopOnInteraction: false,
      rootNode: (scrollTo) => scrollTo.parentElement
    })
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
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
            {t("testimonials.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-dulu-orange text-dulu-orange" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">{testimonial.content}</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">{t("testimonials.partners")}</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent>
              {[...partners, ...partners].map((partner, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/6">
                  <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center space-y-2 h-full">
                    <img 
                      src={partner.logo} 
                      alt={`Logo ${partner.name}`}
                      className="max-h-16 w-auto object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700">{partner.name}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;