import BackButton from "@/components/ui/back-button";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <BackButton />
      <div className="container mx-auto px-4 py-8 prose prose-invert max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">{t('privacy.title')}</h1>
        <p>{t('privacy.intro')}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('privacy.dataCollection.title')}</h2>
        <p>{t('privacy.dataCollection.description')}</p>
        <ul>
          <li>{t('privacy.dataCollection.items.personal')}</li>
          <li>{t('privacy.dataCollection.items.technical')}</li>
          <li>{t('privacy.dataCollection.items.usage')}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('privacy.dataUse.title')}</h2>
        <p>{t('privacy.dataUse.description')}</p>
        <ul>
          <li>{t('privacy.dataUse.items.service')}</li>
          <li>{t('privacy.dataUse.items.orders')}</li>
          <li>{t('privacy.dataUse.items.marketing')}</li>
          <li>{t('privacy.dataUse.items.security')}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('privacy.dataSharing.title')}</h2>
        <p>{t('privacy.dataSharing.description')}</p>
        <ul>
          <li>{t('privacy.dataSharing.items.providers')}</li>
          <li>{t('privacy.dataSharing.items.legal')}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('privacy.storage.title')}</h2>
        <p>{t('privacy.storage.description')}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('privacy.retention.title')}</h2>
        <p>{t('privacy.retention.description')}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('privacy.rights.title')}</h2>
        <p>{t('privacy.rights.description')}</p>
        <ul>
          <li>{t('privacy.rights.items.access')}</li>
          <li>{t('privacy.rights.items.rectification')}</li>
          <li>{t('privacy.rights.items.opposition')}</li>
          <li>{t('privacy.rights.items.withdrawal')}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('privacy.cookies.title')}</h2>
        <p>{t('privacy.cookies.description')}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('privacy.changes.title')}</h2>
        <p>{t('privacy.changes.description')}</p>

        <p className="mt-8">{t('privacy.contact.description')}</p>
        <p className="mt-4">{t('privacy.lastUpdate')}</p>
        <p>{t('privacy.thanks')}</p>
      </div>
    </div>
  );
};

export default Privacy;