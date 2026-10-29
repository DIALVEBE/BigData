import { preguntas } from "./practica-data.js";

const root = document.querySelector("[data-practice-app]");
if (!root) throw new Error("Practice app root not found");

const state = {
  mode: "random",
  queue: [],
  index: 0,
  checked: false,
  visited: new Set(),
};

const byId = (id) => root.querySelector(`#${id}`);
const isEnglish = () => document.documentElement.lang === "en";
const copyText = (es, en) => (isEnglish() ? en : es);

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function setText(node, es, en) {
  node.textContent = copyText(es, en);
}

function setVisible(node, visible) {
  node.hidden = !visible;
}

function selectedIds() {
  return [...root.querySelectorAll('input[name="practice-option"]:checked')]
    .map((input) => input.value);
}

function sameAnswers(selected, correct) {
  return selected.length === correct.length && selected.every((id) => correct.includes(id));
}

function renderTopics() {
  const topics = [...new Set(preguntas.map((item) => item.tema))].sort();
  const list = byId("practice-topics");
  list.replaceChildren();
  topics.forEach((topic, index) => {
    const label = document.createElement("label");
    label.className = "practice-topic-option";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = topic;
    input.checked = index === 0;
    const text = document.createElement("span");
    text.textContent = topic;
    label.append(input, text);
    list.append(label);
  });
}

function selectedTopics() {
  return [...root.querySelectorAll("#practice-topics input:checked")].map((input) => input.value);
}

function startPractice() {
  const selected = selectedTopics();
  let pool = preguntas;
  if (state.mode === "topic" && selected.length) {
    pool = preguntas.filter((item) => selected.includes(item.tema));
  }
  state.queue = shuffle(pool).slice(0, state.mode === "random" ? 10 : pool.length);
  state.index = 0;
  state.checked = false;
  state.visited = new Set();
  setVisible(byId("practice-start"), false);
  setVisible(byId("practice-question"), true);
  setVisible(byId("practice-finish"), false);
  renderQuestion();
}

function renderQuestion() {
  const item = state.queue[state.index];
  if (!item) {
    renderFinish();
    return;
  }
  state.checked = false;
  state.visited.add(item.id);
  setText(byId("practice-counter"), `Actividad ${state.index + 1} de ${state.queue.length}`, `Activity ${state.index + 1} of ${state.queue.length}`);
  setText(byId("practice-visited"), `Exploradas: ${state.visited.size}`, `Explored: ${state.visited.size}`);
  byId("practice-level").textContent = `${item.tema} · ${item.nivel}`;
  byId("practice-question-text").textContent = item.pregunta;
  const options = byId("practice-options");
  options.replaceChildren();
  const multiple = item.tipo === "multiple";
  const inputType = multiple ? "checkbox" : "radio";
  shuffle(item.opciones).forEach((option) => {
    const label = document.createElement("label");
    label.className = "practice-option";
    const input = document.createElement("input");
    input.type = inputType;
    input.name = "practice-option";
    input.value = option.id;
    input.addEventListener("change", () => {
      updateSelectionFeedback(item);
      byId("practice-check").disabled = selectedIds().length === 0;
    });
    const text = document.createElement("span");
    text.textContent = option.texto;
    const status = document.createElement("span");
    status.className = "practice-option-status";
    status.hidden = true;
    label.append(input, text, status);
    options.append(label);
  });
  setText(byId("practice-type"), multiple ? "Puedes marcar varias opciones." : "Selecciona una opción.", multiple ? "You may select more than one option." : "Select one option.");
  setVisible(byId("practice-feedback"), false);
  setVisible(byId("practice-explanation"), false);
  byId("practice-check").disabled = true;
  byId("practice-next").disabled = true;
  byId("practice-hint").disabled = false;
  byId("practice-hint-text").textContent = "";
  byId("practice-explain").disabled = true;
}

function updateSelectionFeedback(item) {
  root.querySelectorAll(".practice-option").forEach((label) => {
    const input = label.querySelector("input");
    const status = label.querySelector(".practice-option-status");
    const selected = input.checked;
    const correct = item.correctas.includes(input.value);
    label.classList.remove("is-correct", "is-incorrect");
    status.hidden = !selected;
    status.textContent = "";
    if (!selected) return;
    label.classList.add(correct ? "is-correct" : "is-incorrect");
    status.textContent = correct
      ? copyText("✓ Correcta", "✓ Correct")
      : copyText("× No es la respuesta esperada", "× Not the expected answer");
  });
}

function checkAnswer() {
  const item = state.queue[state.index];
  const selected = selectedIds();
  if (!selected.length) return;
  state.checked = true;
  const matches = sameAnswers(selected, item.correctas);
  const feedback = byId("practice-feedback");
  feedback.replaceChildren();
  const title = document.createElement("strong");
  title.textContent = matches
    ? copyText("La selección refleja el concepto esperado.", "The selection reflects the expected concept.")
    : copyText("Revisa la relación entre la situación y el concepto.", "Review the relationship between the situation and the concept.");
  feedback.append(title);
  selected.forEach((id) => {
    const option = item.opciones.find((candidate) => candidate.id === id);
    if (!option) return;
    const detail = document.createElement("p");
    detail.textContent = option.retroalimentacion;
    feedback.append(detail);
  });
  setVisible(feedback, true);
  byId("practice-next").disabled = false;
  byId("practice-explain").disabled = false;
}

function showHint() {
  const item = state.queue[state.index];
  byId("practice-hint-text").textContent = item.pista;
  setVisible(byId("practice-hint-text"), true);
  byId("practice-hint").disabled = true;
}

function showExplanation() {
  if (!state.checked) return;
  const item = state.queue[state.index];
  const explanation = byId("practice-explanation");
  explanation.replaceChildren();
  const text = document.createElement("p");
  text.textContent = item.explicacion;
  const valid = document.createElement("p");
  const validTexts = item.opciones.filter((option) => item.correctas.includes(option.id)).map((option) => option.texto);
  valid.textContent = `${copyText("Respuestas esperadas:", "Expected answers:")} ${validTexts.join(" · ")}`;
  explanation.append(text, valid);
  setVisible(explanation, true);
}

function renderFinish() {
  setVisible(byId("practice-question"), false);
  setVisible(byId("practice-finish"), true);
  setText(byId("practice-finish-count"), `Has explorado ${state.visited.size} actividades.`, `You explored ${state.visited.size} activities.`);
}

function resetToStart() {
  setVisible(byId("practice-start"), true);
  setVisible(byId("practice-question"), false);
  setVisible(byId("practice-finish"), false);
}

root.querySelectorAll("[data-practice-mode]").forEach((button) => {
  button.addEventListener("click", () => {
    root.querySelectorAll("[data-practice-mode]").forEach((candidate) => candidate.classList.remove("is-selected"));
    button.classList.add("is-selected");
    state.mode = button.dataset.practiceMode;
    setVisible(byId("practice-topic-picker"), state.mode === "topic");
  });
});
byId("practice-start-button").addEventListener("click", startPractice);
byId("practice-check").addEventListener("click", checkAnswer);
byId("practice-hint").addEventListener("click", showHint);
byId("practice-explain").addEventListener("click", showExplanation);
byId("practice-next").addEventListener("click", () => {
  state.index += 1;
  renderQuestion();
});
byId("practice-retry").addEventListener("click", renderQuestion);
byId("practice-again").addEventListener("click", startPractice);
byId("practice-home").addEventListener("click", resetToStart);
renderTopics();
