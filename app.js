let mode = "practice"; // practice | exam
let examQueue = [];
let index = 0;
let current = null;
let timer = null;
let timeLeft = 0;

const ui = {
  dashboard: document.getElementById("dashboard"),
  quiz: document.getElementById("quiz"),
  scenario: document.getElementById("scenario"),
  question: document.getElementById("question"),
  list: document.getElementById("list"),
  feedback: document.getElementById("feedback"),
  progress: document.getElementById("progress"),
  timer: document.getElementById("timer"),
  modeLabel: document.getElementById("modeLabel")
};

function showScreen(name){
  ui.dashboard.classList.add("hidden");
  ui.quiz.classList.add("hidden");
  ui[name].classList.remove("hidden");
}

/* ---------------- DASHBOARD ---------------- */

function startPractice(){
  mode = "practice";
  examQueue = shuffle([...QUESTIONS]);
  index = 0;
  showScreen("quiz");
  loadQuestion();
}

function startExam(){
  mode = "exam";
  examQueue = shuffle([...QUESTIONS]).slice(0, 75);
  index = 0;
  timeLeft = 75 * 60; // 75 min exam
  startTimer();
  showScreen("quiz");
  loadQuestion();
}

function updateDashboard(){
  const data = loadProgress();

  const weak = Object.entries(data.categories)
    .sort((a,b) => (a[1].correct/a[1].answered) - (b[1].correct/b[1].answered))
    .slice(0,5);

  document.getElementById("weakAreas").innerHTML =
    weak.map(w => `<div>${w[0]} (${Math.round(w[1].correct/w[1].answered*100)}%)</div>`).join("");

  document.getElementById("categoryStats").innerHTML =
    Object.entries(data.categories)
      .map(c => `<div>${c[0]}: ${Math.round(c[1].correct/c[1].answered*100)}%</div>`)
      .join("");
}

/* ---------------- QUESTION FLOW ---------------- */

function loadQuestion(){
  current = examQueue[index];

  ui.modeLabel.textContent = mode.toUpperCase();
  ui.progress.textContent = `${index+1} / ${examQueue.length}`;

  ui.scenario.textContent = current.scenario;
  ui.question.textContent = current.question;

  renderItems(shuffle([...current.items]));
}

function renderItems(items){
  ui.list.innerHTML = "";

  items.forEach(text => {
    const div = document.createElement("div");
    div.className = "item";
    div.draggable = true;
    div.textContent = text;

    div.addEventListener("dragstart", () => div.classList.add("dragging"));
    div.addEventListener("dragend", () => div.classList.remove("dragging"));

    ui.list.appendChild(div);
  });

  enableDrag();
}

function enableDrag(){
  ui.list.ondragover = (e) => {
    e.preventDefault();

    const dragging = document.querySelector(".dragging");
    const after = getAfter(ui.list, e.clientY);

    if(after == null) ui.list.appendChild(dragging);
    else ui.list.insertBefore(dragging, after);
  };
}

function getAfter(container, y){
  const els = [...container.querySelectorAll(".item:not(.dragging)")];

  return els.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height/2;

    if(offset < 0 && offset > closest.offset){
      return { offset, element: child };
    }
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

/* ---------------- SCORING ---------------- */

function submitAnswer(){
  const user = [...document.querySelectorAll(".item")].map(x => x.textContent);

  const correct = JSON.stringify(user) === JSON.stringify(current.items);

  updateProgress(current, correct);

  ui.feedback.style.display = "block";
  ui.feedback.textContent = correct ? "Correct" : "Incorrect";

  if(mode === "exam") return;

  setTimeout(nextQuestion, 800);
}

function nextQuestion(){
  index++;

  if(index >= examQueue.length){
    endSession();
    return;
  }

  loadQuestion();
}

/* ---------------- EXAM TIMER ---------------- */

function startTimer(){
  timer = setInterval(() => {
    timeLeft--;

    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;

    ui.timer.textContent = `${m}:${s.toString().padStart(2,"0")}`;

    if(timeLeft <= 0){
      clearInterval(timer);
      endSession();
    }
  }, 1000);
}

/* ---------------- END ---------------- */

function endSession(){
  clearInterval(timer);
  alert("Session complete");
  showScreen("dashboard");
  updateDashboard();
}

/* ---------------- HELPERS ---------------- */

function shuffle(arr){
  return arr.sort(() => Math.random() - 0.5);
}

/* INIT */
updateDashboard();
