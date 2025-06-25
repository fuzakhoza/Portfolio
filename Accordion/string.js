
const data = [
  {
    id: 1,
    question: "Who is the president of South Africa?",
    answer: "Cyrle Ramaphosa",
  },
  {
    id: 2,
    question: "What is the color of the sky?",
    answer: "Blue",
  },
  {
    id: 3,
    question: "How many provinces are in South Africa?",
    answer: "Nine provinces",
  },
  {
    id: 4,
    question: "What is the nickname of Doctor Khumalo?",
    answer: "16V",
  },
];
const todo = document.querySelector(".todo");

function createData() {
  todo.innerHTML = data
    .map(
      (dataItems) => `
        <div class="data-container">
        <div class="questions">
        <h3>${dataItems.question}</h3>
        <h2>⬆</h2>
        </div>
         <div class="answer">
        <p>${dataItems.answer}</p>
         </div>
        </div>`
    )
    .join("");
}
createData();

const questions = document.querySelectorAll(".questions");
questions.forEach((questionsItems) => {
  questionsItems.onclick = (event) => {
    if (questionsItems.classList.contains("active")) {
      questionsItems.classList.remove("active");
    } else {
      let activeClass = document.querySelectorAll(".active");
      activeClass.forEach((activeClassHave) => {
        activeClassHave.classList.remove("active");
      });
      questionsItems.classList.add("active");
    }
  };
});
