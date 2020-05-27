import i18n, {InitOptions} from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import English from "./locales/English";
import Portuguese from "./locales/Portuguese";

i18n.use(LanguageDetector).init({
    // we init with resources
    resources: {
        US: English,
        BR: Portuguese
    },
    fallbackLng: "US",
    debug: true,

    // have a common namespace used around the full app
    ns: Object.keys(English),
    defaultNS: "Home",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        wait: true
    }
} as InitOptions);

export default i18n;