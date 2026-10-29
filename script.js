const STORAGE_KEY = "bigdata-language";

function applyLanguage(lang) {
  const selected = lang === "en" ? "en" : "es";
  document.documentElement.lang = selected;
  document.querySelectorAll("[data-lang]").forEach((node) => {
    const shouldHide = node.dataset.lang !== selected;
    node.toggleAttribute("hidden", shouldHide);
    if (node.namespaceURI === "http://www.w3.org/2000/svg") {
      node.style.display = shouldHide ? "none" : "";
    }
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
  document.querySelectorAll("[data-expand-code]").forEach((button) => {
    const suffix = selected === "en" ? "En" : "Es";
    button.textContent = button.dataset.expandedState === "true"
      ? button.dataset[`collapseLabel${suffix}`]
      : button.dataset[`expandLabel${suffix}`];
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

    const code = panel.querySelector("code");
    const actions = document.createElement("div");
    actions.className = "code-actions";
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
    actions.append(button);
    if (code.textContent.trimEnd().split("\n").length > 12) {
      panel.classList.add("is-collapsed");
      const expandButton = document.createElement("button");
      expandButton.type = "button";
      expandButton.className = "expand-code-button";
      expandButton.dataset.expandCode = "";
      expandButton.dataset.expandLabelEs = "Expandir";
      expandButton.dataset.expandLabelEn = "Expand";
      expandButton.dataset.collapseLabelEs = "Contraer";
      expandButton.dataset.collapseLabelEn = "Collapse";
      expandButton.setAttribute("aria-expanded", "false");
      expandButton.textContent = document.documentElement.lang === "en" ? "Expand" : "Expandir";
      expandButton.addEventListener("click", () => {
        const expanded = panel.classList.toggle("is-collapsed") === false;
        expandButton.dataset.expandedState = String(expanded);
        expandButton.setAttribute("aria-expanded", String(expanded));
        const suffix = document.documentElement.lang === "en" ? "En" : "Es";
        expandButton.textContent = expanded
          ? expandButton.dataset[`collapseLabel${suffix}`]
          : expandButton.dataset[`expandLabel${suffix}`];
      });
      actions.append(expandButton);
    }
    panel.append(actions);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initCopyButtons();
});
