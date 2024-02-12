export const resources = {
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

export default {
    // This is the list of languages your application supports
    supportedLngs: ["en", "nl"],
    // This is the language you want to use in case
    // if the user language is not in the supportedLngs
    fallbackLng: "en",
    // The default namespace of i18next is "translation", but you can customize it here
    // Disabling suspense is recommended
    react: { useSuspense: false },
    resources: resources
};
