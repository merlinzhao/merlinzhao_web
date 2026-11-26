import Vue from "vue";

// Shared light/dark theme state for the desktop and mobile menus, so both
// toggles stay in sync and the startup logic lives in one place.
const STORAGE_KEY = "dark-mode";

// localStorage throws in some private-browsing modes; the theme just won't persist
function readSaved() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

// A theme the visitor picked wins over the OS preference
function initialTheme() {
  const saved = readSaved();
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export const themeState = Vue.observable({ theme: initialTheme() });

export function applyTheme(theme = themeState.theme) {
  themeState.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // ignore: see readSaved
  }
}

export function toggleTheme() {
  applyTheme(themeState.theme === "dark" ? "light" : "dark");
}
