import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  
  // Fonction pour gérer les liens de section
  const getSectionLink = (section: string) => {
    return location.pathname === "/" ? `#${section}` : `/#${section}`;
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-dulu-orange mb-4">DULU Sarl</h3>
            <p className="text-gray-400">
              Solutions numériques innovantes pour votre entreprise
            </p>
            <p className="text-gray-400 mt-2">RC/DLA/2018/B/3820</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="/fastcom-pro" className="text-gray-400 hover:text-dulu-orange transition-colors">
                  FastCom Pro
                </a>
              </li>
              <li>
                <a href={getSectionLink("services")} className="text-gray-400 hover:text-dulu-orange transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href={getSectionLink("about")} className="text-gray-400 hover:text-dulu-orange transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href={getSectionLink("contact")} className="text-gray-400 hover:text-dulu-orange transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/cgv" className="text-gray-400 hover:text-dulu-orange transition-colors">
                  Conditions générales de ventes (CGV)
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-dulu-orange transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} />
                <span>Rue Mandessi Bell Bali-Douala</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <span>+237 693997244</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <span>gaston.effa@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-dulu-orange transition-colors"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-dulu-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-dulu-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DULU Sarl. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;