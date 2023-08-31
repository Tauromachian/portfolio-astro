import { atom, computed } from "nanostores";

import { useClientSideTranslations } from "../i18n/utils";

export const lang = atom(null);
export const t = computed(lang, (lang) => {
  if (!lang) return function () {};
  return useClientSideTranslations(lang);
});
