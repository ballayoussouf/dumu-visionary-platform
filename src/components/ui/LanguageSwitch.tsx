import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Flag } from "lucide-react";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const getFlagColor = (language: string) => {
    return language === 'fr' ? 'text-blue-600' : 'text-red-600';
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="flex items-center">
          <Globe className="h-4 w-4" />
          <span className="ml-2 flex items-center">
            <Flag className={`h-4 w-4 mr-1 ${getFlagColor(i18n.language)}`} />
            {i18n.language.toUpperCase()}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage('fr')} className="flex items-center">
          <Flag className="h-4 w-4 mr-2 text-blue-600" />
          Français
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('en')} className="flex items-center">
          <Flag className="h-4 w-4 mr-2 text-red-600" />
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitch;