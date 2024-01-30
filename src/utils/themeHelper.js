export function toggleTheme() {
  if (document.documentElement.getAttribute("theme") === "default") {
    setTheme("dark");
  } else {
    setTheme("default");
  }
}

export function setTheme(theme) {
  document.documentElement.setAttribute("theme", theme.trim());
  localStorage.setItem("theme", theme.trim());
}
