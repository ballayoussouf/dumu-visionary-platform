import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const location = useLocation();
  const { t } = useTranslation();
  
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
              {t("footer.description")}
            </p>
            <p className="text-gray-400 mt-2">{t("footer.rcNumber")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/fastcom-pro" className="text-gray-400 hover:text-dulu-orange transition-colors">
                  FastCom Pro
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-dulu-orange transition-colors">
                  {t("nav.pricing")}
                </Link>
              </li>
              <li>
                <a href={getSectionLink("services")} className="text-gray-400 hover:text-dulu-orange transition-colors">
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a href={getSectionLink("about")} className="text-gray-400 hover:text-dulu-orange transition-colors">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href={getSectionLink("contact")} className="text-gray-400 hover:text-dulu-orange transition-colors">
                  {t("nav.contact")}
                </a>
              </li>
              <li>
                <Link to="/cgv" className="text-gray-400 hover:text-dulu-orange transition-colors">
                  {t("footer.termsOfService")}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-dulu-orange transition-colors">
                  {t("footer.privacyPolicy")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} />
                <span>{t("footer.address")}</span>
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
            <h4 className="font-heading text-lg font-semibold mb-4">{t("footer.followUs")}</h4>
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
          <p>&copy; {new Date().getFullYear()} DULU Sarl. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;