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
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute inset-0 flex">
        <div className="w-[20%] h-full bg-blue-600"></div>
        <div className="flex-1"></div>
      </div>
      <div className="absolute inset-0">
        <div className="w-full h-[20%] bg-red-600"></div>
        <div className="w-full h-[20%] bg-red-600 absolute top-1/2 -translate-y-1/2"></div>
        <div className="w-full h-[20%] bg-red-600 absolute bottom-0"></div>
      </div>
      <div className="absolute inset-0">
        <div className="h-full w-[20%] bg-red-600"></div>
        <div className="h-full w-[20%] bg-red-600 absolute left-1/2 -translate-x-1/2"></div>
        <div className="h-full w-[20%] bg-red-600 absolute right-0"></div>
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