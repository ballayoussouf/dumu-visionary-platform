import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jean Dupont",
    role: "CEO, TechCam",
    content: "DULU a transformé notre approche du marketing digital. Leur expertise en Media Buying est incomparable.",
    rating: 5
  },
  {
    name: "Marie Kouam",
    role: "Directrice Marketing, InnovCorp",
    content: "L'automatisation mise en place par DULU nous a permis d'améliorer notre réactivité client de 300%.",
    rating: 5
  },
  {
    name: "Paul Biya",
    role: "Fondateur, StartupAfrica",
    content: "Une équipe professionnelle qui comprend vraiment les enjeux du marché africain.",
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

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de nous et pourquoi ils continuent de nous faire confiance pour leurs projets digitaux.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
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
          ))}
        </div>

        {/* Partners Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Nos Partenaires</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24"
              >
                <img 
                  src={partner.logo} 
                  alt={`Logo ${partner.name}`}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;