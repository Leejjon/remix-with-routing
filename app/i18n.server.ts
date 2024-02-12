import i18n from "./i18n";
import { RemixI18Next } from "remix-i18next";

export async function getTranslationFunctionBasedOnHost(request: Request) {
    const host = request.headers.get("Host");
    const countryCode = host && host.endsWith("mysite.nl") ? "nl" : "en";
    return await i18next.getFixedT(countryCode);
}

const i18next = new RemixI18Next({
    detection: {
        supportedLanguages: i18n.supportedLngs,
        fallbackLanguage: i18n.fallbackLng,
    },
    i18next: {
        ...i18n
    }
});

export default i18next;
