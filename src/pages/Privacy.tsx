import { useTranslation } from "react-i18next";
import BackButton from "@/components/ui/back-button";

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <BackButton />
      <div className="container mx-auto px-4 py-8 prose prose-invert max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">{t("privacy.title")}</h1>
        
        <p>{t("privacy.intro")}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t("privacy.dataCollection.title")}</h2>
        <p>{t("privacy.dataCollection.description")}</p>
        <ul>
          <li>{t("privacy.dataCollection.types.personal")}</li>
          <li>{t("privacy.dataCollection.types.technical")}</li>
          <li>{t("privacy.dataCollection.types.usage")}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t("privacy.dataUsage.title")}</h2>
        <p>{t("privacy.dataUsage.description")}</p>
        <ul>
          <li>{t("privacy.dataUsage.purposes.service")}</li>
          <li>{t("privacy.dataUsage.purposes.orders")}</li>
          <li>{t("privacy.dataUsage.purposes.communication")}</li>
          <li>{t("privacy.dataUsage.purposes.security")}</li>
        </ul>
      </div>
    </div>
  );
};

export default Privacy;