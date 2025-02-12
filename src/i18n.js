import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi) // Load translations from JSON files
  .use(LanguageDetector) // Detect user's language automatically
  .use(initReactI18next) // Connect i18n with React
  .init({
    supportedLngs: ["en", "fr", "pt", "es"], // The 4 supported languages
    fallbackLng: "en", // Default language if user's language is not available
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"],
      caches: ["cookie"], // Store the selected language in cookies
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Path to JSON translation files
    },
    interpolation: { escapeValue: false }, // React already secures text
  });

export default i18n;
