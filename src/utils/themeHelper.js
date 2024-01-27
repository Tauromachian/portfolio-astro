export function toggleTheme() {
  if (document.documentElement.getAttribute("theme") === "default") {
    document.documentElement.setAttribute("theme", "dark");
  } else {
    document.documentElement.setAttribute("theme", "default");
  }
}
