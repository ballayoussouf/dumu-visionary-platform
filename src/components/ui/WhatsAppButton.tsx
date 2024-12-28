import { useIsMobile } from "@/hooks/use-mobile";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const isMobile = useIsMobile();
  const phoneNumber = "237693997244";
  
  const getWhatsAppUrl = () => {
    console.log("WhatsApp button clicked, isMobile:", isMobile);
    return isMobile
      ? `whatsapp://send?phone=${phoneNumber}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}`;
  };

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#1da851] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 cursor-pointer"
      aria-label="Discuter sur WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppButton;