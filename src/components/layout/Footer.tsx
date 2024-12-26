import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-dulu-orange mb-4">DULU</h3>
            <p className="text-gray-400">
              Solutions numériques innovantes pour votre entreprise
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-dulu-orange transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-dulu-orange transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-dulu-orange transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} />
                <span>Douala, Cameroun</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <span>+237 123 456 789</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <span>contact@dulu.com</span>
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