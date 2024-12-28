import { useIsMobile } from "@/hooks/use-mobile";
import { Send } from "lucide-react";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const WhatsAppButton = () => {
  const isMobile = useIsMobile();
  const phoneNumber = "237693997244";
  const defaultMessage = "Hello ! Je souhaite avoir plus d'information sur vos services...";
  const [message, setMessage] = useState(defaultMessage);
  
  const getWhatsAppUrl = () => {
    console.log("WhatsApp button clicked, isMobile:", isMobile);
    const encodedMessage = encodeURIComponent(message);
    return isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="fixed bottom-6 right-2 sm:right-6 w-20 h-20 p-0 bg-transparent hover:bg-transparent shadow-none transition-all duration-300 hover:scale-110 z-50"
          size="icon"
          variant="default"
        >
          <img 
            src="/lovable-uploads/2fd8c564-0b10-4ea6-9e82-059e2a5b6ee1.png"
            alt="WhatsApp"
            className="w-full h-full"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4" side="left" align="end">
        <div className="space-y-4">
          <h4 className="font-medium">Envoyez-nous un message</h4>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[100px] resize-none"
          />
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full"
          >
            <Button className="w-full bg-[#25D366] hover:bg-[#1da851]">
              <Send className="mr-2 h-4 w-4" />
              Envoyer sur WhatsApp
            </Button>
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default WhatsAppButton;