import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="fixed top-4 left-4 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
      aria-label="Retour à l'accueil"
    >
      <ArrowLeft className="h-6 w-6 text-white" />
    </button>
  );
};

export default BackButton;