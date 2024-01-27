export function setTheme(theme) {
  document.documentElement.setAttribute("theme", theme.trim());
  localStorage.setItem("theme", theme);
}

export function toggleTheme() {
  if (document.documentElement.getAttribute("theme") === "default") {
    document.documentElement.setAttribute("theme", "dark");
  } else {
    document.documentElement.setAttribute("theme", "default");
  }
}
