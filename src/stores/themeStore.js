import { atom } from "nanostores";

export const selectedTheme = atom("default");
export const themes = atom(["default", "dark", "crazy"]);
