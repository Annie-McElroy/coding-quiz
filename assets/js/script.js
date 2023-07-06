var bigTitle = document.querySelector(".title");
var rules = document.querySelector(".rules");
var startButton = document.querySelector(".start");
var timerCount = document.querySelector(".timer");

var winCounter = 0;
var lossCounter = 0;
var question = 0;
var choices = 0;
var correctAnswers = 0;
var endQuiz = false;
var selectedAnswer = [];

// var question = document.querySelector(".question");
// var choices = document.querySelector(".choiceList")

bigTitle.textContent = "Coding Quiz Challenge";
rules.textContent = "To complete this quiz please answer the following 5 questions within the limited timeframe of 1 minute (60 seconds). If any questions are incorrect, you are docked 10 seconds from the timer. After answering all questions the quiz will end and you may store your score with your initials. If you reach 0 on the timer the quiz will end. Good luck!"

// Create vars for all question headers and list answers
var questions =[
    {
        question: "Which of the below are data types present in Javascript?",
        answers: ["String", "Boolean", "Number", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What is the difference between "==" and "==="?",
        answers: [""==" means true in value and type, while "===" means true in value only", ""===" means true in value and type, while "==" means true in value only", "Both mean the same exact thing", "They mean completely opposite of being true in any sense"],
        correctAnswer: ""===" means true in value and type, while "==" means true in value only"
    },
    {
        question: "Which of the following methods will combine arrays together and make a new array?",
        answers: ["pop()", "shift()", "concat()", "join()"],
        correctAnswer: "concat()"
    }
];
// Timer for the whole quiz
// SetInterval and Clear Interval for the timer
// Eventlistener for question/answer transition

// Start quiz function
startQuiz.addEventListener("click", function() {
    isWin = false;
    timerCount = 60;



}
// If else statements for eventlistener
// Clear Interval clears the timer and ends the quiz
// Subtract time if question is wrong
// Game over when all questions are reached or time = 0