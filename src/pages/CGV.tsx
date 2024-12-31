import { useTranslation } from "react-i18next";
import BackButton from "@/components/ui/back-button";

const CGV = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <BackButton />
      <div className="container mx-auto px-4 py-8 prose prose-invert max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">{t('cgv.title')}</h1>
        
        <p>{t('cgv.companyInfo.title')}</p>
        <ul>
          <li>{t('cgv.companyInfo.list.name')}</li>
          <li>{t('cgv.companyInfo.list.address')}</li>
          <li>{t('cgv.companyInfo.list.registration')}</li>
          <li>{t('cgv.companyInfo.list.email')}</li>
          <li>{t('cgv.companyInfo.list.phone')}</li>
          <li>{t('cgv.companyInfo.list.returns')}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.products.title')}</h2>
        <p>{t('cgv.products.description')}</p>
        <p><strong>{t('cgv.products.services.title')}</strong> {t('cgv.products.services.description')}</p>
        <p><strong>{t('cgv.products.usage.title')}</strong> {t('cgv.products.usage.description')}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.ordering.title')}</h2>
        <h3 className="text-xl font-bold mt-4 mb-2">{t('cgv.ordering.process.title')}</h3>
        <ol>
          <li>{t('cgv.ordering.process.steps.1')}</li>
          <li>{t('cgv.ordering.process.steps.2')}</li>
          <li>{t('cgv.ordering.process.steps.3')}</li>
        </ol>

        <h3 className="text-xl font-bold mt-4 mb-2">{t('cgv.ordering.validation.title')}</h3>
        <p>{t('cgv.ordering.validation.description')}</p>
        <ul>
          <li>{t('cgv.ordering.validation.conditions.1')}</li>
          <li>{t('cgv.ordering.validation.conditions.2')}</li>
        </ul>

        <p>{t('cgv.ordering.platforms')}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.pricing.title')}</h2>
        <ul>
          <li>{t('cgv.pricing.details.prices')}</li>
          <li>{t('cgv.pricing.details.fees')}</li>
          <li>{t('cgv.pricing.details.invoice')}</li>
        </ul>
        <p>{t('cgv.pricing.note')}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.payment.title')}</h2>
        <h3 className="text-xl font-bold mt-4 mb-2">{t('cgv.payment.methods.title')}</h3>
        <ul>
          <li>{t('cgv.payment.methods.list.1')}</li>
          <li>{t('cgv.payment.methods.list.2')}</li>
          <li>{t('cgv.payment.methods.list.3')}</li>
        </ul>

        <h3 className="text-xl font-bold mt-4 mb-2">{t('cgv.payment.security.title')}</h3>
        <p>{t('cgv.payment.security.description')}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.delivery.title')}</h2>
        <ul>
          <li>{t('cgv.delivery.details.timing')}</li>
          <li>{t('cgv.delivery.details.zones')}</li>
          <li>{t('cgv.delivery.details.fees')}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.withdrawal.title')}</h2>
        <p>{t('cgv.withdrawal.legal')}</p>
        <ul>
          <li>{t('cgv.withdrawal.details.period')}</li>
          <li>{t('cgv.withdrawal.details.conditions')}</li>
          <li>{t('cgv.withdrawal.details.procedure')}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.warranty.title')}</h2>
        <ul>
          <li>{t('cgv.warranty.details.conformity')}</li>
          <li>{t('cgv.warranty.details.liability')}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.data.title')}</h2>
        <ul>
          <li>{t('cgv.data.details.personal')}</li>
          <li>{t('cgv.data.details.cookies')}</li>
          <li>{t('cgv.data.details.gdpr')}</li>
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