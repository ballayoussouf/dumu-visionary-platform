import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitch from "../ui/LanguageSwitch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/930be020-4ff6-4f76-ab03-259e6dbe37ac.png" 
              alt="Flow by Dulu Logo" 
              className="h-16 w-auto"
            />
            <span className="font-heading text-2xl font-bold text-[#9b87f5]">Flow by Dulu</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/fastcom-pro" className="text-gray-600 hover:text-[#9b87f5] transition-colors">
              FastCom Pro
            </a>
            <a href="#services" className="text-gray-600 hover:text-[#9b87f5] transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-600 hover:text-[#9b87f5] transition-colors">
              À propos
            </a>
            <a href="#contact" className="text-gray-600 hover:text-[#9b87f5] transition-colors">
              Contact
            </a>
            <LanguageSwitch />
            <Button className="bg-[#9b87f5] hover:bg-[#9b87f5]/90">
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
                href="/fastcom-pro"
                className="text-gray-600 hover:text-[#9b87f5] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FastCom Pro
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-[#9b87f5] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-[#9b87f5] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                À propos
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-[#9b87f5] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <LanguageSwitch />
              <Button className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 w-full">
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