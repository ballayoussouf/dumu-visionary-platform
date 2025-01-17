import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const FrenchFlag = () => (
    <div className="w-4 h-3 relative flex mr-2">
      <div className="w-1/3 h-full bg-blue-600"></div>
      <div className="w-1/3 h-full bg-white"></div>
      <div className="w-1/3 h-full bg-red-600"></div>
    </div>
  );

  const EnglishFlag = () => (
    <div className="w-4 h-3 relative flex mr-2">
      <div className="absolute inset-0 bg-[#012169]"></div>
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 w-full h-full">
          <div className="absolute transform rotate-45 bg-white h-[2px] w-full top-1/2 -translate-y-1/2"></div>
          <div className="absolute transform -rotate-45 bg-white h-[2px] w-full top-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      <div className="absolute inset-0">
        <div className="absolute transform rotate-45 bg-[#C8102E] h-[1px] w-full top-1/2 -translate-y-1/2"></div>
        <div className="absolute transform -rotate-45 bg-[#C8102E] h-[1px] w-full top-1/2 -translate-y-1/2"></div>
      </div>
      <div className="absolute inset-0">
        <div className="absolute bg-white h-full w-[2px] left-1/2 -translate-x-1/2"></div>
        <div className="absolute bg-white w-full h-[2px] top-1/2 -translate-y-1/2"></div>
      </div>
      <div className="absolute inset-0">
        <div className="absolute bg-[#C8102E] h-full w-[1px] left-1/2 -translate-x-1/2"></div>
        <div className="absolute bg-[#C8102E] w-full h-[1px] top-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="flex items-center">
          <Globe className="h-4 w-4" />
          <span className="ml-2 flex items-center">
            {i18n.language === 'fr' ? <FrenchFlag /> : <EnglishFlag />}
            {i18n.language.toUpperCase()}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage('fr')} className="flex items-center">
          <FrenchFlag />
          Français
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('en')} className="flex items-center">
          <EnglishFlag />
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitch;