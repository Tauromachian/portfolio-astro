export function setTheme(theme) {
  document.documentElement.setAttribute("theme", theme.trim());
  localStorage.setItem("theme", theme);
}
