import BackButton from "@/components/ui/back-button";
import { useTranslation } from "react-i18next";

const CGV = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative">
      <BackButton />
      <div className="container mx-auto px-4 py-8 prose prose-invert max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">{t('cgv.title')}</h1>
        
        <section>
          <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.legalInfo.title')}</h2>
          <ul>
            <li>{t('cgv.legalInfo.items.companyName')}</li>
            <li>{t('cgv.legalInfo.items.address')}</li>
            <li>{t('cgv.legalInfo.items.regNumber')}</li>
            <li>{t('cgv.legalInfo.items.email')}</li>
            <li>{t('cgv.legalInfo.items.phone')}</li>
            <li>{t('cgv.legalInfo.items.returnAddress')}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.productsServices.title')}</h2>
          <p>{t('cgv.productsServices.description')}</p>
          <p>{t('cgv.productsServices.products')}</p>
          <p>{t('cgv.productsServices.intendedUse')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.orderPurchase.title')}</h2>
          <div>
            <h3 className="text-xl font-bold mt-4 mb-2">{t('cgv.orderPurchase.process.title')}</h3>
            <ol>
              <li>{t('cgv.orderPurchase.process.steps.step1')}</li>
              <li>{t('cgv.orderPurchase.process.steps.step2')}</li>
              <li>{t('cgv.orderPurchase.process.steps.step3')}</li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-bold mt-4 mb-2">{t('cgv.orderPurchase.validation.title')}</h3>
            <p>{t('cgv.orderPurchase.validation.description')}</p>
            <ul>
              <li>{t('cgv.orderPurchase.validation.conditions.payment')}</li>
              <li>{t('cgv.orderPurchase.validation.conditions.email')}</li>
            </ul>
          </div>
          <p>{t('cgv.orderPurchase.thirdParty')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.pricing.title')}</h2>
          <ul>
            <li>{t('cgv.pricing.items.prices')}</li>
            <li>{t('cgv.pricing.items.additionalFees')}</li>
            <li>{t('cgv.pricing.items.invoice')}</li>
          </ul>
          <p>{t('cgv.pricing.note')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.payment.title')}</h2>
          <div>
            <h3 className="text-xl font-bold mt-4 mb-2">{t('cgv.payment.methods.title')}</h3>
            <ul>
              <li>{t('cgv.payment.methods.items.card')}</li>
              <li>{t('cgv.payment.methods.items.paypal')}</li>
              <li>{t('cgv.payment.methods.items.other')}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mt-4 mb-2">{t('cgv.payment.security.title')}</h3>
            <p>{t('cgv.payment.security.description')}</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.delivery.title')}</h2>
          <ul>
            <li>{t('cgv.delivery.items.timing')}</li>
            <li>{t('cgv.delivery.items.coverage')}</li>
            <li>{t('cgv.delivery.items.fees')}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.withdrawal.title')}</h2>
          <p>{t('cgv.withdrawal.description')}</p>
          <ul>
            <li>{t('cgv.withdrawal.items.period')}</li>
            <li>{t('cgv.withdrawal.items.conditions')}</li>
            <li>{t('cgv.withdrawal.items.procedure')}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.warranty.title')}</h2>
          <ul>
            <li>{t('cgv.warranty.items.conformity')}</li>
            <li>{t('cgv.warranty.items.liability')}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.dataProtection.title')}</h2>
          <ul>
            <li>{t('cgv.dataProtection.items.personalData')}</li>
            <li>{t('cgv.dataProtection.items.cookies')}</li>
            <li>{t('cgv.dataProtection.items.gdpr')}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.disputes.title')}</h2>
          <p>{t('cgv.disputes.description')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-8 mb-4">{t('cgv.facebook.title')}</h2>
          <p>{t('cgv.facebook.description')}</p>
        </section>
      </div>
    </div>
  );
};

export default CGV;