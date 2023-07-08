var infoBox = document.querySelector(".first-box");
var bigTitle = document.querySelector(".title");
var rules = document.querySelector(".rules");
var startQuiz = document.querySelector(".start");
var checkAnswer = document.querySelector(".quesResult")

var quizBox = document.querySelector(".quiz-box")

var timerCount = 75;
var timeText = document.querySelector(".timer")
var timerStart;


var resultBox = document.querySelector(".quiz-end")

// var userScore = 0;
var questionNum = 0;
var correctAnswer = 0;
// var endQuiz = false;
var selectedAnswer;

// var question = document.querySelector(".question");
// var choices = document.querySelector(".choiceList")



bigTitle.textContent = "Coding Quiz Challenge";
rules.textContent = "To complete this quiz please answer the following 5 questions within the limited timeframe of 1 minute (60 seconds). If any questions are incorrect, you are docked 10 seconds from the timer. After answering all questions the quiz will end and you may store your score with your initials. If you reach 0 on the timer the quiz will end. Good luck!"

// Timer for the whole quiz
// SetInterval and Clear Interval for the timer
// Eventlistener for question/answer transition

function setTime() {
    timerCount--;
    timeText.textContent = "Time: " + timerCount;
    // if (secondsLeft <=0) {
    //     endScore();
    // }
};


// Start quiz function

startQuiz.addEventListener("click", function() {
    // event.stopPropagation();
    timerStart = setInterval(setTime, 1000);
    infoBox.setAttribute('style', 'display: none');
    setTime();
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

    
});

var questions =[
    {
        q: "Which of the below are data types present in Javascript?",
        answers: ["String", "Boolean", "Number", "All of the above"],
        correctA: "All of the above"
    },
    {
        q: "Which of the following methods is used to access HTML elements using Javascript?",
        answers: ["getElementbyID()", "getElementbyClassName()", "Both of the above", "None of the above"],
        correctA: "Both of the above"
    },
    {
        q: "Which of the following methods will combine arrays together and make a new array?",
        answers: ["pop()", "shift()", "concat()", "join()"],
        correctA: "concat()"
    },
    {
        q: "What does 'document.createElement('h2')' do in the HTML?",
        answers: ["Selects the h2 element", "Adds an h2 element", "Adds an h3 element", "Appends child to h2 element"],
        correctA: "Adds an h2 element"
    },
    {
        q: "How to stop an interval timer in Javascript??",
        answers: ["endTime", "intervalOver", "clearTimer", "clearInterval"],
        correctA: "clearInterval"
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
    
    choiceButton.addEventListener('click', function(event) {
        selectedAnswer(event)
    });
    
    choiceList.appendChild(choiceItem);
    choiceItem.appendChild(choiceButton);
}};

function nextQuestion() {
    if (currentQuestion < questions.length -1) {
        currentQuestion++;
        loadQues();
    } else {
        quizBox.endQuiz()
    }
};

function endQuiz() {

}
// var userSel = choiceButton.value;

// userSel.addEventListener('click', function(){
//     nextQuestion()
// })



function selectedAnswer(event) {
    if (event.target.textContent == questions[currentQuestion].correctA) {
    checkAnswer.innterHTML = "Correct";
    nextQuestion();
    } else {
    checkAnswer.innterHTML = "Wrong";
    // remove time from timer
    nextQuestion();
    }
    // var userSel = answers.textContent;
    // var correctAnswer = questions[currentQuestion].correctA
    // if (userSel == correctAnswer) {
    //     userScore += 1;
    //     // display correct below question area
    //     nextQuestion();
    // } else {
    //     // display wrong below question area
    //     // dock 5-10 seconds from the timer
    //     nextQuestion();
    // }
};



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
