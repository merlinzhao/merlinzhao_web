import Vue from "vue";

// Shared light/dark theme state for the desktop and mobile menus, so both
// toggles stay in sync and the startup logic lives in one place.
const STORAGE_KEY = "dark-mode";

function initialTheme() {
  if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return localStorage.getItem(STORAGE_KEY) || "light";
}

export const themeState = Vue.observable({ theme: initialTheme() });

export function applyTheme(theme = themeState.theme) {
  themeState.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEY, theme);
}

export function toggleTheme() {
  applyTheme(themeState.theme === "dark" ? "light" : "dark");
}
