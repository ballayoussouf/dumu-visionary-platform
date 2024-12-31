import { useTranslation } from "react-i18next";
import BackButton from "@/components/ui/back-button";

const CGV = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <BackButton />
      <div className="container mx-auto px-4 py-8 prose prose-invert max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">{t('cgv.title')}</h1>
        
        <p>{t('cgv.intro')}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.legalInfo.title')}</h2>
        <ul>
          <li>{t('cgv.legalInfo.companyName')}</li>
          <li>{t('cgv.legalInfo.address')}</li>
          <li>{t('cgv.legalInfo.regNumber')}</li>
          <li>{t('cgv.legalInfo.email')}</li>
          <li>{t('cgv.legalInfo.phone')}</li>
          <li>{t('cgv.legalInfo.returnAddress')}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.products.title')}</h2>
        <p>{t('cgv.products.intro')}</p>
        <p>{t('cgv.products.description')}</p>
        <p>{t('cgv.products.usage')}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.ordering.title')}</h2>
        <h3 className="text-xl font-bold mt-4 mb-2">{t('cgv.ordering.process.title')}</h3>
        <ol>
          {t('cgv.ordering.process.steps', { returnObjects: true }).map((step: string, index: number) => (
            <li key={index}>{step}</li>
          ))}
        </ol>

        <h3 className="text-xl font-bold mt-4 mb-2">{t('cgv.ordering.validation.title')}</h3>
        <p>{t('cgv.ordering.validation.description')}</p>
        <ul>
          {t('cgv.ordering.validation.conditions', { returnObjects: true }).map((condition: string, index: number) => (
            <li key={index}>{condition}</li>
          ))}
        </ul>
        <p>{t('cgv.ordering.validation.note')}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.pricing.title')}</h2>
        <ul>
          {t('cgv.pricing.items', { returnObjects: true }).map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>{t('cgv.pricing.note')}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.payment.title')}</h2>
        <h3 className="text-xl font-bold mt-4 mb-2">{t('cgv.payment.methods.title')}</h3>
        <ul>
          {t('cgv.payment.methods.list', { returnObjects: true }).map((method: string, index: number) => (
            <li key={index}>{method}</li>
          ))}
        </ul>

        <h3 className="text-xl font-bold mt-4 mb-2">{t('cgv.payment.security.title')}</h3>
        <p>{t('cgv.payment.security.description')}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.delivery.title')}</h2>
        <ul>
          {t('cgv.delivery.items', { returnObjects: true }).map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.withdrawal.title')}</h2>
        <p>{t('cgv.withdrawal.intro')}</p>
        <ul>
          {t('cgv.withdrawal.items', { returnObjects: true }).map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.guarantees.title')}</h2>
        <ul>
          {t('cgv.guarantees.items', { returnObjects: true }).map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.dataProtection.title')}</h2>
        <ul>
          {t('cgv.dataProtection.items', { returnObjects: true }).map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.disputes.title')}</h2>
        <p>{t('cgv.disputes.description')}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.facebook.title')}</h2>
        <p>{t('cgv.facebook.description')}</p>
      </div>
    </div>
  );
};

export default CGV;