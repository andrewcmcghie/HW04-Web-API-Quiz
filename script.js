//This is pretty much grabbing all of the id's made in the HTML and making them variables to manipulate in JS.//
var startButton = document.getElementById("startBtn");
var quizBody = document.getElementById("theQuiz");
var timeleft = document.getElementById("timeleft");
var quizResults = document.getElementById("quizResults");
var submitScore = document.getElementById("submitScore");
var endGame = document.getElementById("endGame");
var nameScore = document.getElementById("nameScore");
var quizQuestions = document.getElementById("questions");
var highScore = document.getElementById("highScore");
var nameScore = document.getElementById("nameScore");
var endGameBtns = document.getElementById("endGameBtns")
var clearHighScores = document.getElementById("clearHighScores")
var playAgain = document.getElementById("playAgain")
var buttonA = document.getElementById("a")
var buttonB = document.getElementById("b")
var buttonC = document.getElementById("c")
var buttonD = document.getElementById("d")
var score = 0;
var timer;
var timeLeft= 90;
var correct;
var currentArray = 0;
var finalArray = questions.length;

//The quiz questions in an object, thanks Jim.//
var questions = [
    {
        title:"What does the 'T' in 'HTML' standfor?",
        choices: ["time, touch, text, type"],
        answer: "text",
    },
    
    {
        title:"A 'boolean' is a ____having two possible values called 'true' and 'false'?",
        choices: ["coding term, made up name, binary variable, object"],
        answer: "binary variable",

    },

    {
        title:"What is the name of the popular framework for developing responsive, mobile-first websites'?",
        choices: ["bootstrap, methods, style sheets, mark ups"],
        answer: "bootstrap",
   
    },

    {
        title:"____are text, written within double or single quotes",
        choices: ["words, variables, strings, shoelaces"],
        answer: "strings",

    },

    {
        title:"In HTML, what tags are used to insert JavaScript code?",
        choices: ["<script>, <href>, <h2>, <input>"],
        answer: "<scipt>",

    },

    {
        title:"What is a special variable, which can hold more than one value at a time?",
        choices: ["strings, lists, brackets, array"],
        answer: "An array",

    }
];

// This is the function that iterates through the array/


function generateQuizQuestions(){
    endGame.style.display ="none"
    if (currentArray===finalArray){
        return showScore();
    }
}
    
for (var i= 0; i < questions.length; i++) {
    var question = document.getElementById("question")

    question.innerHTML = questions[i];

}

for (var i= 0; i < answers.length; i++) {
    var question = document.getElementById("answers")

    question.innerHTML = answers[i];

    ///I ran out of time for completing this assignment//