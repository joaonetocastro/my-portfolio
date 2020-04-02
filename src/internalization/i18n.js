import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import languageDetector from 'i18next-browser-languagedetector';

import translationEN from './langs/en.json';
import translationPT_BR from './langs/pt_br.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  "pt":{
    translation: translationPT_BR
  }
};

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .use(languageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    load: "languageOnly",
    preload: ['en', 'pt'],
    detection: {
      lookupQuerystring: "lng",
    }
  });

export default i18n;