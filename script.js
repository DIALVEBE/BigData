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
  document.querySelectorAll("[data-copy-code]").forEach((button) => {
    if (button.dataset.copiedState === "true") return;
    const suffix = selected === "en" ? "En" : "Es";
    button.textContent = button.dataset[`copyLabel${suffix}`];
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

function initCopyButtons() {
  document.querySelectorAll("pre.code-panel").forEach((panel) => {
    if (panel.querySelector("[data-copy-code]")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "copy-code-button";
    button.dataset.copyCode = "";
    button.dataset.copyLabelEs = "Copiar";
    button.dataset.copyLabelEn = "Copy";
    button.dataset.copiedEs = "¡Copiado!";
    button.dataset.copiedEn = "Copied!";
    button.textContent = document.documentElement.lang === "en" ? "Copy" : "Copiar";
    button.addEventListener("click", async () => {
      const code = panel.querySelector("code");
      try {
        await navigator.clipboard.writeText(code.textContent);
      } catch {
        const range = document.createRange();
        range.selectNodeContents(code);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
        selection.removeAllRanges();
      }
      button.dataset.copiedState = "true";
      const suffix = document.documentElement.lang === "en" ? "En" : "Es";
      button.textContent = button.dataset[`copied${suffix}`];
      window.setTimeout(() => {
        delete button.dataset.copiedState;
        const currentSuffix = document.documentElement.lang === "en" ? "En" : "Es";
        button.textContent = button.dataset[`copyLabel${currentSuffix}`];
      }, 1600);
    });
    panel.append(button);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initCopyButtons();
});
