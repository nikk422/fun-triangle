const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const outputEl = document.querySelector("#output");

const rightAnswers = ["90°","right angled"];

function calculateScore() {
  let score = 0,
    i = 0;
    const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === rightAnswers[i]) {
      score = score + 1;
    }
    i = i + 1;
  }
  outputEl.innerText = "The score is " + score;
}

submitBtn.addEventListener("click", calculateScore);
