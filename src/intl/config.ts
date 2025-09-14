import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./languages/en";
import ptBR from "./languages/ptBR";

const resources = {
	en: { translation: en },
	"pt-BR": { translation: ptBR },
};

i18n.use(LanguageDetector).init({
	resources,
	interpolation: { escapeValue: false },
	detection: {
		order: [
			"navigator",
			"htmlTag",
			"cookie",
			"localStorage",
			"sessionStorage",
			"querystring",
			"path",
			"subdomain",
		],
		caches: ["localStorage", "cookie"],
	},
});

export { i18n };
