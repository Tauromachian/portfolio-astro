import { ui, defaultLang, showDefaultLang } from "./ui";

// Server side
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
    return findTranslation(ui[lang], key);
  };
}

// Client Side
export function useClientSideTranslations(langObject) {
  return function t(key) {
    return findTranslation(langObject, key);
  };
}

function findTranslation(langObject, keyString) {
  const keys = keyString.split(".");

  if (keys.length === 1) {
    return langObject[keyString];
  }

  let currentKey = keys.shift();
  let currentObject = langObject[currentKey];
  while (keys.length > 0) {
    const nextKey = keys[0];

    if (typeof currentObject[nextKey] === "string") {
      return currentObject[nextKey];
    }

    currentKey = keys.shift();
    currentObject = langObject[currentKey];
  }

  return "No translation found";
}

export function changeLanguage() {
  const URL = document.URL;

  if (URL.includes("es")) {
    const [url] = URL.split("/es");
    window.location.replace(url);
    localStorage.setItem("lang", "en");
  } else {
    window.location.replace(`${URL}es`);
    localStorage.setItem("lang", "es");
  }
}
