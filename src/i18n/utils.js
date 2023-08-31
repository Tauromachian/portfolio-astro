import { ui, defaultLang, showDefaultLang } from "./ui";

export function useTranslatedPath(lang) {
  return function translatePath(path, l) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useClientSideTranslations(langObject) {
  return function t(key) {
    return langObject[key] || langObject[key];
  };
}
