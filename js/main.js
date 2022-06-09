var questions = [
    {
      title: "What animal lives in the ocean?",
      choices: ["Monkeys", "Cats", "Fish", "Dogs"],
      answer: "Fish",
    },
    {
      title: "What type of animal eats Eucalyptus leaves ?",
      choices: ["Kangaroos", "Mouse", "Koalas", "Snakes"],
      answer: "Koalas",
    },
    {
      title: "What is the name of a baby Kangaroo ?",
      choices: [
        "Joey",
        "Jesse",
        "Joe",
        "John",
      ],
      answer: "Joey",
    },
    {
      title:
        "Which animal makes Honey ?",
      choices: ["Snails", "Snakes", "Ants", "Bees"],
      answer: "Bees",
    },
    {
      title:
        "How many lives does a cat have ?",
      choices: ["Nine", "Twenty", "One Hundred", "Six"],
      answer: "Nine",
    },
  ];
  
  var time = 60;
  var points = 0;
  var startButton = document.getElementById("startButton");
  var opening = document.querySelector("#opening");
  var currentIndex = 0;
  
  var titleEl = document.querySelector("#question-title");
  var answerEl = document.querySelector("#answers");
  var questionsEl = document.querySelector("#questions");
  var openingEl = document.querySelector("#opening")
  var timer = document.getElementById("timer");
  var lastSlide = document.querySelector("#lastSlide");
  
  
  function displayQuestion() {
  
    openingEl.classList.add("hide")
    var question = questions[currentIndex];
   
    titleEl.innerHTML = question.title;
  
    answerEl.innerHTML = "";
    question.choices.forEach(function (choice, i) {
      var choiceButton = document.createElement("button");
      choiceButton.setAttribute("value", choice);
      choiceButton.textContent = choice;
      choiceButton.addEventListener("click",(e)=>{
      checkAnswer(e.target);
  
      });
      answerEl.appendChild(choiceButton);
    });
  }
  
  function checkAnswer(btn) {
    if (btn.value !== questions[currentIndex].answer) {
      btn.classList.add("wrong");
      btn.classList.add("correct");
      time -= 10;
      if (time < 0) {
        time = 0;
      }
    } else {
      // if answer was correct do:
      points++;
      btn.classList.add("correct"); 
      btn.classList.remove("wrong");
    }
    currentIndex++;
    if (currentIndex === questions.length) {
      endGame();
    } else {
      setTimeout(() => {
        displayQuestion(); 
      }, 1000)
    }
  }

  const endGame = ()=>{
  questionsEl.classList.add("hide");
  answerEl.classList.add("hide");
  lastSlide.classList.remove("hide");
  document.querySelector(".points").value = points;

  }
  
  startButton.addEventListener("click", ()=> {
    let timerInterval = setInterval(() => {
      time--;
      if(time< 0){endGame(); clearInterval(timerInterval)}
      timer.innerHTML = time
    },1000);
    displayQuestion();
  });