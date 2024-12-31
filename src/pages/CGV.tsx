import { useTranslation } from "react-i18next";
import BackButton from "@/components/ui/back-button";

const CGV = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <BackButton />
      <div className="container mx-auto px-4 py-8 prose prose-invert max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">{t("cgv.title")}</h1>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">{t("cgv.companyInfo.title")}</h2>
        <ul>
          <li>{t("cgv.companyInfo.list.name")}</li>
          <li>{t("cgv.companyInfo.list.address")}</li>
          <li>{t("cgv.companyInfo.list.registration")}</li>
          <li>{t("cgv.companyInfo.list.email")}</li>
          <li>{t("cgv.companyInfo.list.phone")}</li>
          <li>{t("cgv.companyInfo.list.returns")}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t("cgv.products.title")}</h2>
        <p>{t("cgv.products.description")}</p>
        <p><strong>{t("cgv.products.services.title")}</strong> {t("cgv.products.services.description")}</p>
        <p>{t("cgv.products.services.usage")}</p>
      </div>
    </div>
  );
};

export default CGV;