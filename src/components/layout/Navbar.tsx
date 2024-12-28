import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitch from "../ui/LanguageSwitch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="font-heading text-2xl font-bold text-dulu-orange">
            DULU
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-dulu-orange transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-600 hover:text-dulu-orange transition-colors">
              À propos
            </a>
            <a href="#contact" className="text-gray-600 hover:text-dulu-orange transition-colors">
              Contact
            </a>
            <LanguageSwitch />
            <Button className="bg-dulu-orange hover:bg-dulu-orange/90">
              Commencer
            </Button>
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
              <a
                href="#services"
                className="text-gray-600 hover:text-dulu-orange transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-dulu-orange transition-colors"
                onClick={() => setIsOpen(false)}
              >
                À propos
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-dulu-orange transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <LanguageSwitch />
              <Button className="bg-dulu-orange hover:bg-dulu-orange/90 w-full">
                Commencer
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;