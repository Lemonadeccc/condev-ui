import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// import translation resources
import enCommon from "./resources/en/enCommon.json";
import enComponents from "./resources/en/enComponents.json";
import zhCNCommon from "./resources/zh-CN/zhCNCommon.json";
import zhCNComponents from "./resources/zh-CN/zhCNComponents.json";

const resources = {
  en: {
    common: enCommon,
    components: enComponents,
  },
  zh: {
    common: zhCNCommon,
    components: zhCNComponents,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    defaultNS: "common",
    ns: ["common", "components"],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

  export default i18n;
