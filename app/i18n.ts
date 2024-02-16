
type TranslationPairs = {[key: string]: string};

export const resources: { [language: string]: { translation: TranslationPairs } } = {
    en: {
        translation: {
            DESCRIPTION_ABOUT: "About us.",
            DESCRIPTION_HOME: "Home sweet home.",
            DESCRIPTION_NEWS: "The latest news.",
            LOADING: "Loading...",
            TITLE_ABOUT: "About",
            TITLE_HOME: "Home",
            TITLE_NEWS: "News",
        }
    },
    nl: {
        translation: {
            DESCRIPTION_ABOUT: "Over ons.",
            DESCRIPTION_HOME: "Fijn thuis.",
            DESCRIPTION_NEWS: "Het laatste niews.",
            LOADING: "Laden...",
            TITLE_ABOUT: "Over ons",
            TITLE_HOME: "Thuis",
            TITLE_NEWS: "News",
        }
    }
};

export function getCountryCode(request: Request) {
    const host = request.headers.get("Host");
    return host && host.endsWith("mysite.nl") ? "nl" : "en";
}

function translate(countryCode: string, key: string) {
    for (const country in resources) {
        if (country === countryCode) {
            const translations = resources[countryCode].translation;
            for (const translationKey in translations) {
                if (translationKey == key) {
                    return translations[translationKey];
                }
            }
            return `Translation key ${key} is missing.`
        }
    }
    return `${countryCode} is not a supported language.`;
}

export function getTranslator(countryCode: string) {
    return (key: string) => translate(countryCode, key);
}
