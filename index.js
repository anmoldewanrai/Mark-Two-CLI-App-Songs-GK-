var readlineSync = require('readline-sync'); //adding readline-sync

var score = 0;

// High Scores Array
var highScores = [
  {
    name: 'Anmol',
    score: 4
  },
  {
    name: 'Ankit',
    score: 3
  }
]

var questions = [
  {
    question: 'Who sang Gangnam Style? ',
    answer: 'psy'
  },
  {
    question: 'Who sang Waka Waka? ',
    answer: 'shakira'
  },
  {
    question: 'Who is famously known by the name Rap God? ',
    answer: 'eminem'
  },
  {
    question: 'Why do you hate your life? ',
    answer: ''
  }
]

function welcome() {
  var userName = readlineSync.question("What is your name? ");
  console.log();
  console.log("Welcome, " + userName + "!");
  console.log("I love to hear songs! Do you? Let's play a game and see if you can get them right! ");
  console.log();
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase === answer.toUpperCase){
    score = score + 1;
    console.log();
    console.log("You are right!");
    console.log("Your score is, " + score);
    console.log("-------------")
    console.log();
  }
  else{
    console.log("Sorry, wrong answer!");
  }
}

function game(){
  for(var i = 0; i < questions.length; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score));
}

welcome();
game();
showScores();