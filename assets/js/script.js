var infoBox = document.querySelector(".first-box");
var bigTitle = document.querySelector(".title");
var rules = document.querySelector(".rules");
var startQuiz = document.querySelector(".start");

var quizBox = document.querySelector(".quiz-box")

var timerCount = document.querySelector(".timer");
var timeText = document.querySelector(".time-text")


var resultBox = document.querySelector(".quiz-end")

var winCounter = 0;
var lossCounter = 0;
// var userScore = 0;
var questionNum = 0;
// var choices = 0;
var correctAnswer = 0;
var endQuiz = false;
var selectedAnswer = [];

// var question = document.querySelector(".question");
// var choices = document.querySelector(".choiceList")



bigTitle.textContent = "Coding Quiz Challenge";
rules.textContent = "To complete this quiz please answer the following 5 questions within the limited timeframe of 1 minute (60 seconds). If any questions are incorrect, you are docked 10 seconds from the timer. After answering all questions the quiz will end and you may store your score with your initials. If you reach 0 on the timer the quiz will end. Good luck!"

// Timer for the whole quiz
// SetInterval and Clear Interval for the timer
// Eventlistener for question/answer transition



// Start quiz function

startQuiz.addEventListener("click", function() {
    // event.stopPropagation();
    // isWin = false;
    // timerCount = 60;
    
    infoBox.setAttribute('style', 'display: none');
    loadQues();
    
    // if(que_count < questions.length - 1){ //if question count is less than total question length
    //     que_count++; //increment the que_count value
    //     que_numb++; //increment the que_numb value
    //     showQuetions(que_count); //calling showQestions function
    //     queCounter(que_numb); //passing que_numb value to queCounter
    //     clearInterval(counter); //clear counter
    //     clearInterval(counterLine); //clear counterLine
    //     startTimer(timeValue); //calling startTimer function
    //     startTimerLine(widthValue); //calling startTimerLine function
    //     timeText.textContent = "Time Left"; //change the timeText to Time Left
    //     next_btn.classList.remove("show"); //hide the next button
    
    // Add list element and bind to choices list
    
    
    
    // Create vars for all question headers and list answers
    
});

var questions =[
    {
        q: "Which of the below are data types present in Javascript?",
        answers: ["String", "Boolean", "Number", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        q: "What is the difference between "==" and "==="?",
        answers: [""==" means true in value and type, while "===" means true in value only", ""===" means true in value and type, while "==" means true in value only", "Both mean the same exact thing", "They mean completely opposite of being true in any sense"],
        correctAnswer: ""===" means true in value and type, while "==" means true in value only"
    },
    {
        q: "Which of the following methods will combine arrays together and make a new array?",
        answers: ["pop()", "shift()", "concat()", "join()"],
        correctAnswer: "concat()"
    }
];

var currentQuestion = 0;

function loadQues() {
var quizQuest = document.querySelector(".question");
var choices = document.querySelector(".choiceList");
quizQuest.textContent = questions[currentQuestion].q
choices.innerHTML = "";

for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
    var choiceList = document.querySelector(".choiceList");
    var choiceItem = document.createElement("li")
    var choiceButton = document.createElement("button")
    choiceButton.classList.add("choiceButton")

    choiceButton.textContent = questions[currentQuestion].answers[i];
    
    
    choiceList.appendChild(choiceItem);
    choiceItem.appendChild(choiceButton);
}};

function nextQuestion() {
    if (currentQuestion < questions.length -1) {
        currentQuestion++;
        loadQues();
    } else {
        quizBox.remove()
    }
};

// function loadScore() {
//     var userScore = document.
// }


// Clear Interval clears the timer and ends the quiz
// Subtract time if question is wrong
// Game over when all questions are reached or time = 0

// Restart quiz
    // restart_quiz.onclick = ()=>{
    //     quiz_box.classList.add("activeQuiz"); //show quiz box
    //     result_box.classList.remove("activeResult"); //hide result box
    //     timeValue = 15; 
    //     que_count = 0;
    //     que_numb = 1;
    //     userScore = 0;
    //     widthValue = 0;
    //     showQuetions(que_count); //calling showQestions function
    //     queCounter(que_numb); //passing que_numb value to queCounter
    //     clearInterval(counter); //clear counter
    //     clearInterval(counterLine); //clear counterLine
    //     startTimer(timeValue); //calling startTimer function
    //     startTimerLine(widthValue); //calling startTimerLine function
    //     timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    //     next_btn.classList.remove("show"); //hide the next button
    // }
