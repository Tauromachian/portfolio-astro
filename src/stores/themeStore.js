import { atom } from "nanostores";
import { setTheme } from "@/utils/themeHelper.js";

export const selectedTheme = atom("default");
export const themes = atom(["default", "dark", "crazy"]);

selectedTheme.subscribe((selectedTheme) => {
  setTheme(selectedTheme);
});
