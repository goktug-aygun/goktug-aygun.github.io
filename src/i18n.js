import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import tr from "./locales/tr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en.default || en },
    tr: { translation: tr.default || tr },
  },
  lng: "en", // default dil İngilizce
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
