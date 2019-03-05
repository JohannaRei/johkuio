import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';
import en from './en.json';
import fi from './fi.json';

i18n
  .use(detector)
  .use(reactI18nextModule)
  .init({
    resources: {
      en: {
        translation: en
      },
      fi: {
        translation: fi
      }
    },
    lng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
