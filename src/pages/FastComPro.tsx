import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const FastComPro = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">FastCom Pro</h1>
            <p className="text-xl text-gray-600">Solution avancée pour l'automatisation du media buying et la gestion des réponses</p>
          </div>

          {/* Image Section */}
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
              alt="FastCom Pro Interface" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Media Buying Intelligent</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Optimisation automatique des campagnes publicitaires</li>
                <li>• Analyse en temps réel des performances</li>
                <li>• Ajustement dynamique des budgets</li>
                <li>• Ciblage précis des audiences</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Automatisation des Réponses</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Réponses instantanées aux messages clients</li>
                <li>• Personnalisation avancée des réponses</li>
                <li>• Gestion multicanale des communications</li>
                <li>• Suivi détaillé des conversations</li>
              </ul>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Pourquoi choisir FastCom Pro ?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Gain de Temps</h3>
                <p className="text-gray-600">Automatisez vos tâches répétitives et concentrez-vous sur votre stratégie</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">ROI Optimisé</h3>
                <p className="text-gray-600">Maximisez vos résultats grâce à notre algorithme d'optimisation</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Support 24/7</h3>
                <p className="text-gray-600">Une équipe d'experts à votre disposition pour vous accompagner</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-[#9b87f5] p-12 rounded-xl">
            <h2 className="text-3xl font-bold text-white mb-6">Prêt à optimiser votre communication ?</h2>
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-[#9b87f5] hover:bg-gray-100"
              onClick={() => window.location.href = "tel:+237693997244"}
            >
              <Phone className="mr-2 h-5 w-5" />
              Appelez-nous maintenant
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FastComPro;