import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Innovation africaine, <br />
              <span className="text-dulu-orange">impact mondial</span>
            </h2>
            <p className="text-gray-600 mb-6">
              DULU Sarl est née de la vision de transformer le paysage numérique africain. 
              Basée à Douala, notre entreprise combine expertise technique et compréhension 
              profonde des besoins locaux pour offrir des solutions numériques innovantes.
            </p>
            <p className="text-gray-600 mb-8">
              Notre mission est de propulser les entreprises africaines vers le futur 
              numérique en leur fournissant des outils et services de pointe, adaptés 
              à leurs besoins spécifiques.
            </p>
            <Button className="bg-dulu-orange hover:bg-dulu-orange/90">
              Notre histoire
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-dulu-orange/10 rounded-3xl transform rotate-6" />
            <div className="absolute inset-0 bg-dulu-blue/10 rounded-3xl transform -rotate-6" />
            <div className="relative bg-white p-8 rounded-3xl shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4">
                  <h3 className="text-4xl font-bold text-dulu-orange mb-2">5+</h3>
                  <p className="text-gray-600">Années d'expérience</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-4xl font-bold text-dulu-blue mb-2">100+</h3>
                  <p className="text-gray-600">Clients satisfaits</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-4xl font-bold text-dulu-orange mb-2">50+</h3>
                  <p className="text-gray-600">Projets réussis</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-4xl font-bold text-dulu-blue mb-2">24/7</h3>
                  <p className="text-gray-600">Support client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;