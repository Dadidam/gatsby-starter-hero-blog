const languages = ["en", "ru"];
const catalogs = {
  en: { messages: require("./locale/en/messages.json") },
  ru: { messages: require("./locale/ru/messages.json") }
};

const defaultLanguage = "en";

const prefix = lang => (lang == defaultLanguage ? "/" : "/" + lang);
const deprefix = pathname => (pathname.startsWith("/ru/") ? pathname.substr(4) : pathname);
const langFromPath = pathname => (pathname.startsWith("/ru/") ? "ru" : "en");

exports.defaultLanguage = defaultLanguage;
exports.languages = languages;
exports.catalogs = catalogs;
exports.prefix = prefix;
exports.deprefix = deprefix;
exports.langFromPath = langFromPath;
