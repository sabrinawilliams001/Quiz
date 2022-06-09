var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];
var time = 60
let startButton = document.getElementById("startButton");
let opening = document.querySelector("#opening");

  const currentIndex = 0 
  const titleEl = document.querySelector("#question")
  const answerEl = document.querySelector(".answers")
  function displayQuestion(){
      console.log ("clicked")
      var question = questions[currentIndex]
    titleEl.textContent = question.title
    answerEl.innerHTML = ""
    question.choices.forEach(function(choice,i){
        var choiceButton = document.createElement("button")
        choiceButton.setAttribute("value", choice)
        choiceButton.textContent = choice
        choiceButton.onclick = checkAnswer
        answerEl.appendChild(choiceButton)
    })
  }
function checkAnswer() {
    if (this.value !== questions[currentIndex].answer){
time-= 10
if (time < 0 ){
    time = 0 
}
    } else {

    }
    currentIndex++
    if (currentIndex === questions.length) {

    } 
    else{
        displayQuestion ()
    }
}

startButton.addEventListener("click",displayQuestion)