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
          <a href="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/c5315432-6614-460a-8aba-cb35e74a138e.png" 
              alt="Flow by Dulu Logo" 
              className="h-8 w-auto"
            />
            <span className="font-heading text-xl font-bold text-dulu-purple">
              Flow by Dulu
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-dulu-purple transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-600 hover:text-dulu-purple transition-colors">
              À propos
            </a>
            <a href="#contact" className="text-gray-600 hover:text-dulu-purple transition-colors">
              Contact
            </a>
            <LanguageSwitch />
            <Button className="bg-dulu-purple hover:bg-dulu-purple/90">
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
                className="text-gray-600 hover:text-dulu-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-dulu-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                À propos
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-dulu-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <LanguageSwitch />
              <Button className="bg-dulu-purple hover:bg-dulu-purple/90 w-full">
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