import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import cgvFR from './locales/fr/cgv.json';
import privacyFR from './locales/fr/privacy.json';

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: {
      ...translationEN,
      cgv: cgvFR,
      privacy: privacyFR
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    lng: 'fr',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;