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
          <li>{t('cgv.ordering.process.steps.0')}</li>
          <li>{t('cgv.ordering.process.steps.1')}</li>
          <li>{t('cgv.ordering.process.steps.2')}</li>
        </ol>

        <h3 className="text-xl font-bold mt-4 mb-2">{t('cgv.ordering.validation.title')}</h3>
        <p>{t('cgv.ordering.validation.description')}</p>
        <ul>
          <li>{t('cgv.ordering.validation.conditions.0')}</li>
          <li>{t('cgv.ordering.validation.conditions.1')}</li>
        </ul>
        <p>{t('cgv.ordering.validation.note')}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.pricing.title')}</h2>
        <ul>
          <li>{t('cgv.pricing.items.0')}</li>
          <li>{t('cgv.pricing.items.1')}</li>
          <li>{t('cgv.pricing.items.2')}</li>
        </ul>
        <p>{t('cgv.pricing.note')}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.payment.title')}</h2>
        <h3 className="text-xl font-bold mt-4 mb-2">{t('cgv.payment.methods.title')}</h3>
        <ul>
          <li>{t('cgv.payment.methods.list.0')}</li>
          <li>{t('cgv.payment.methods.list.1')}</li>
          <li>{t('cgv.payment.methods.list.2')}</li>
        </ul>

        <h3 className="text-xl font-bold mt-4 mb-2">{t('cgv.payment.security.title')}</h3>
        <p>{t('cgv.payment.security.description')}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.delivery.title')}</h2>
        <ul>
          <li>{t('cgv.delivery.items.0')}</li>
          <li>{t('cgv.delivery.items.1')}</li>
          <li>{t('cgv.delivery.items.2')}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.withdrawal.title')}</h2>
        <p>{t('cgv.withdrawal.intro')}</p>
        <ul>
          <li>{t('cgv.withdrawal.items.0')}</li>
          <li>{t('cgv.withdrawal.items.1')}</li>
          <li>{t('cgv.withdrawal.items.2')}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.guarantees.title')}</h2>
        <ul>
          <li>{t('cgv.guarantees.items.0')}</li>
          <li>{t('cgv.guarantees.items.1')}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.dataProtection.title')}</h2>
        <ul>
          <li>{t('cgv.dataProtection.items.0')}</li>
          <li>{t('cgv.dataProtection.items.1')}</li>
          <li>{t('cgv.dataProtection.items.2')}</li>
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