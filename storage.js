const STORAGE_KEY = "nremt_progress";

function loadProgress(){
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
    answered: 0,
    correct: 0,
    categories: {}
  };
}

function saveProgress(data){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function updateProgress(question, isCorrect){
  let data = loadProgress();

  data.answered++;
  if(isCorrect) data.correct++;

  if(!data.categories[question.category]){
    data.categories[question.category] = { answered: 0, correct: 0 };
  }

  let c = data.categories[question.category];
  c.answered++;
  if(isCorrect) c.correct++;

  saveProgress(data);
}
