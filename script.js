const STORAGE_KEY = "bigdata-language";

function applyLanguage(lang) {
  const selected = lang === "en" ? "en" : "es";
  document.documentElement.lang = selected;
  document.querySelectorAll("[data-lang]").forEach((node) => {
    node.hidden = node.dataset.lang !== selected;
  });
  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    const active = button.dataset.langButton === selected;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  localStorage.setItem(STORAGE_KEY, selected);
}

function initLanguage() {
  const stored = localStorage.getItem(STORAGE_KEY);
  const initial = stored || document.documentElement.lang || "es";
  applyLanguage(initial);
  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.langButton));
  });
}

document.addEventListener("DOMContentLoaded", initLanguage);
