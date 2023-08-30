export function setTheme(theme) {
  document.documentElement.setAttribute("theme", theme);
  localStorage.setItem("theme", theme);
}
