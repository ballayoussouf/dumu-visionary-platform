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
          className="fixed bottom-6 right-6 w-16 h-16 p-0 bg-transparent hover:bg-transparent shadow-none transition-all duration-300 hover:scale-110 z-50"
          size="icon"
          variant="default"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="#25D366"
          >
            <path d="M54.86 9.13C48.86 3.13 40.86 0 32.43 0 14.7 0 0.43 14.27 0.43 32c0 5.63 1.47 11.13 4.27 16L0.14 64l16.4-4.3c4.67 2.53 9.93 3.87 15.33 3.87h0.013c17.73 0 32-14.27 32-32 0-8.43-3.13-16.43-9.13-22.43zM32.43 58.53h-0.013c-4.8 0-9.507-1.293-13.6-3.733l-0.973-0.573-10.093 2.653 2.693-9.84-0.64-1.013c-2.693-4.28-4.107-9.227-4.107-14.267 0-14.827 12.08-26.907 26.92-26.907 7.187 0 13.933 2.8 19.013 7.88 5.08 5.08 7.88 11.827 7.88 19.013-0.013 14.84-12.093 26.787-26.92 26.787z"/>
            <path d="M47.423 38.973c-0.733 2.067-3.6 3.787-5.893 4.28-1.573 0.333-3.627 0.6-10.533-2.267-8.853-3.667-14.56-12.667-15-13.253-0.427-0.587-3.6-4.8-3.6-9.16 0-4.36 2.293-6.507 3.107-7.387 0.813-0.88 1.773-1.107 2.36-1.107 0.587 0 1.173 0 1.693 0.027 0.587 0.027 1.347-0.227 2.12 1.627 0.8 1.893 2.72 6.573 2.96 7.053 0.24 0.48 0.4 1.04 0.08 1.653-0.32 0.613-0.48 1-0.96 1.533-0.48 0.533-1 1.187-1.427 1.6-0.48 0.467-0.973 0.973-0.413 1.907 0.56 0.933 2.48 4 5.333 6.48 3.667 3.173 6.76 4.16 7.72 4.627 0.96 0.467 1.52 0.4 2.08-0.24 0.56-0.64 2.373-2.773 3-3.733 0.627-0.96 1.253-0.8 2.12-0.48 0.867 0.32 5.507 2.6 6.453 3.067 0.947 0.467 1.573 0.693 1.813 1.093 0.24 0.387 0.24 2.253-0.493 4.32z"/>
          </svg>
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