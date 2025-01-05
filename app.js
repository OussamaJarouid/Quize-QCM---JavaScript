const quetions = [
  {
    quetion: "What is the correct way to declare a variable in JavaScript?",
    answers: [
      { answer: "variable x = 10;", correct: false },
      { answer: "var x = 10;", correct: true },
      { answer: "let x == 10;", correct: false },
      { answer: "constant x = 10;", correct: false },
    ],
  },
  {
    quetion: "Which of the following is not a valid JavaScript data type?",
    answers: [
      { answer: "Number", correct: false },
      { answer: "String", correct: false },
      { answer: "Float", correct: true },
      { answer: "Boolean", correct: false },
    ],
  },
  {
    quetion:
      "Which method is used to convert a JSON string into a JavaScript object?",
    answers: [
      { answer: "JSON.parse()", correct: true },
      { answer: "JSON.stringify()", correct: false },
      { answer: "JSON.convert()", correct: false },
      { answer: "JSON.toObject()", correct: false },
    ],
  },
  {
    quetion: "What does the '===' operator do in JavaScript?",
    answers: [
      {
        answer: "Compares two values for equality, including type",
        correct: true,
      },
      {
        answer: "Compares two values for equality, ignoring type",
        correct: false,
      },
      {
        answer: "Assigns one value to another",
        correct: false,
      },
      {
        answer: "Checks if a value is not equal to another",
        correct: false,
      },
    ],
  },
];

const quetion = document.querySelector(".quetion");
const btnAnswers = document.querySelectorAll(".btn");
const btnNext = document.querySelector(".next-btn");
const Quize = document.querySelector(".answers");
let currentIndexQuetion = 0;
let score = 0;
let currentAnswerIndex = 0;
function getQuetions() {
  if (currentIndexQuetion >= quetions.length) {
    quetion.textContent = `Quize Finished, Your Score is : ${score}/${quetions.length}`;
    Quize.textContent = "";
    btnNext.remove();
    const restartBTN = document.querySelector(".restart-btn");
    restartBTN.style.display = "block";
    restartBTN.addEventListener("click", () => {
      location.reload();
    });

    return;
  }
  // set The quetions
  quetion.textContent = quetions[currentIndexQuetion].quetion;

  //set the answers BTN
  btnAnswers.forEach((answer, index) => {
    answer.textContent = quetions[currentIndexQuetion].answers[index].answer;
    answer.dataset.correct =
      quetions[currentIndexQuetion].answers[index].correct;
    answer.style.backgroundColor = "white";
    answer.style.color = "black";
    answer.disabled = false;
  });
}

btnAnswers.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let correctAnswer = e.target.dataset.correct === "true";
    if (correctAnswer) {
      e.target.classList.add("true");
      e.target.style.backgroundColor = "green";
      e.target.style.color = "white";
      score++;
    } else {
      e.target.classList.add("false");
      e.target.style.backgroundColor = "red";
      e.target.style.color = "white";
    }

    btnAnswers.forEach((btn) => {
      btn.disabled = true;
    });
  });
});

btnNext.addEventListener("click", () => {
  currentIndexQuetion++;
  getQuetions();
});

getQuetions();
