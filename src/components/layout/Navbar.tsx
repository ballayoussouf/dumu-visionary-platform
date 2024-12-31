import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitch from "../ui/LanguageSwitch";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  
  const getSectionLink = (section: string) => {
    return location.pathname === "/" ? `#${section}` : `/#${section}`;
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/930be020-4ff6-4f76-ab03-259e6dbe37ac.png" 
              alt="Flow by Dulu Logo" 
              className="h-16 w-auto"
            />
            <span className="font-heading text-2xl font-bold text-[#9b87f5]">Flow by Dulu</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-[#9b87f5] transition-colors">
              {t("nav.home")}
            </Link>
            <Link to="/fastcom-pro" className="text-gray-600 hover:text-[#9b87f5] transition-colors">
              {t("nav.fastcomPro")}
            </Link>
            <a href={getSectionLink("services")} className="text-gray-600 hover:text-[#9b87f5] transition-colors">
              {t("nav.services")}
            </a>
            <a href={getSectionLink("about")} className="text-gray-600 hover:text-[#9b87f5] transition-colors">
              {t("nav.about")}
            </a>
            <a href={getSectionLink("contact")} className="text-gray-600 hover:text-[#9b87f5] transition-colors">
              {t("nav.contact")}
            </a>
            <LanguageSwitch />
            <a href={getSectionLink("contact")} className="inline-block">
              <Button className="bg-[#9b87f5] hover:bg-[#9b87f5]/90">
                {t("nav.getStarted")}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-[#9b87f5] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.home")}
              </Link>
              <Link
                to="/fastcom-pro"
                className="text-gray-600 hover:text-[#9b87f5] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.fastcomPro")}
              </Link>
              <a
                href={getSectionLink("services")}
                className="text-gray-600 hover:text-[#9b87f5] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.services")}
              </a>
              <a
                href={getSectionLink("about")}
                className="text-gray-600 hover:text-[#9b87f5] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.about")}
              </a>
              <a
                href={getSectionLink("contact")}
                className="text-gray-600 hover:text-[#9b87f5] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.contact")}
              </a>
              <LanguageSwitch />
              <a 
                href={getSectionLink("contact")} 
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                <Button className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 w-full">
                  {t("nav.getStarted")}
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;