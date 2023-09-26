const quizData = [
  {
    question: "What keyword is used to declare a variable in JavaScript?",
    a: "Variable",
    b: "Define",
    c: "Declare",
    d: "Var",
    correct: "d",
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    a: "Boolean",
    b: "String",
    c: "Array",
    d: "Integer",
    correct: "d",
  },
  {
    question:
      "Which method is used to add an HTML element to the end of a parent element in JavaScript?",
    a: "addToEnd()",
    b: "insertElement()",
    c: "appendChild()",
    d: "addElement()",
    correct: "c",
  },
  {
    question:
      "What is the purpose of the addEventListener method in JavaScript?",
    a: "To remove an event listener",
    b: "To add an event listener to an HTML element",
    c: "To check if an event has occurred",
    d: "To change the color of an element",
    correct: "b",
  },
  {
    question:
      "Inheritance is a key concept in OOP. What does it allow you to do in JavaScript?",
    a: "Share data and behavior between objects",
    b: "Create private methods in a class",
    c: "Create new instances of objects",
    d: "Access global variables",
    correct: "a",
  },
  {
    question: "Which of the following is not a pillar of OOP?",
    a: "Inheritance",
    b: "Polymorphism",
    c: "Abstraction",
    d: "Duplication",
    correct: "d",
  },
  {
    question: "In Object Oriented Programming, what is a class?",
    a: "An instance of an object",
    b: "A function that returns an object",
    c: "A blueprint for creating objects",
    d: "A property of an object",
    correct: "c",
  },
  {
    question:
      "What does the 'this' keyword refer to in a JavaScript object method?",
    a: "The previous object in the prototype chain",
    b: "The global object",
    c: "The current object the method is called on",
    d: "A reserved word for constructors",
    correct: "c",
  },
  {
    question: "What is a 'method' in OOP?",
    a: "A type of data",
    b: "A function that belongs to an object",
    c: "A variable that belongs to a class",
    d: "An object's name",
    correct: "b",
  },
  {
    question: "What is the purpose of a Git 'fork' on GitHub?",
    a: "To create a branch",
    b: "To merge changes",
    c: "To create a copy of someone else's repository under your own account",
    d: "To delete a repository",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll("input[type=radio]");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const scoreDisplay = document.getElementById("score-value");

let currentQuiz = 0;
let score = 0;
let answered = false;

loadQuiz();

function loadQuiz() {
  answered = false;
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  if (!answered) {
    const answer = getSelected();
    if (answer) {
      answered = true;
      if (answer === quizData[currentQuiz].correct) {
        score++;
        scoreDisplay.textContent = score;
      }
    }
  }

  if (answered) {
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});
