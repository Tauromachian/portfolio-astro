import { atom } from "nanostores";

export const selectedTheme = atom("default");

export function toggleTheme() {
  selectedTheme.value === "default"
    ? selectedTheme.set("dark")
    : selectedTheme.set("default");
}
