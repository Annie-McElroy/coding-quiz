var infoBox = document.querySelector(".first-box");
// Beginning box
var bigTitle = document.querySelector(".title");
var rules = document.querySelector(".rules");
var startQuiz = document.querySelector(".start");

// boxes
var quizBox = document.querySelector(".quiz-box");
var scoreBox = document.querySelector(".quiz-end");

// timer and score
var timerCount = 76;
var timeText = document.querySelector(".timer");
var timerStart;
var timeLeft;

// end quiz buttons
var userNameInput = document.querySelector(".input-box");
var submitButton = document.querySelector(".submit-button");
var msgPar = document.querySelector(".msg-box");
var redoQuiz = document.querySelector("#go-back");
var resetScore = document.querySelector("#reset");

// answer variables
var correctAnswer = 0;
var selectedAnswer;
var checkAnswer = document.querySelector(".quesResult");

scoreBox.setAttribute('style', 'display: none');



bigTitle.textContent = "Coding Quiz Challenge";
rules.textContent = "To complete this quiz please answer the following 5 questions within 75 seconds. If any questions are incorrect, you are penalized by losing 10 seconds from the timer. After answering all questions the remaining time is your score! You may save your score with your initials into the highscore page. If you reach 0 on the timer the quiz will end and your score will be 0. Good luck!"

// Timer for the whole quiz
function setTime() {
    timerCount--;
    timeText.textContent = "Time: " + timerCount;
    // if (secondsLeft <= 0) {
    //     endQuiz();
    // }
};


// Start quiz event function
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
    }
};

function nextQuestion() {
    if (currentQuestion < questions.length -1) {
        currentQuestion++;
        loadQues();
    } else {
        endQuiz();
    }
};

// Clear Interval clears the timer and ends the quiz, displays score and end quiz box content
function endQuiz() {
    clearInterval(timerStart);
    timeLeft = timerCount
    quizBox.setAttribute('style', 'display: none');

    var endTitle = document.querySelector(".quizEndHead");
    var scoreResult = document.querySelector(".scoreResult");
    scoreResult.textContent = "Enter your intials below to save your score:"
    endTitle.textContent = "Your final score is " + timeLeft

    scoreBox.setAttribute('style', 'display: block');
}



function selectedAnswer(event) {
    if (event.target.textContent == questions[currentQuestion].correctA) {
    checkAnswer.innerHTML = "Correct";
    nextQuestion();
    } else {
    checkAnswer.innerHTML = "Wrong";
    timerCount -= 10;
    nextQuestion();
}
};

function displayMessage(type, message) {
    msgPar.textContent = message;
}

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    // var userName = document.querySelector(".input-box").value

    var scoreInfo = {
        userName: document.querySelector(".input-box").value.trim(),
        userScore: timeLeft
    }

    if (scoreInfo.userName === "") {
        displayMessage("error", "Initials cannot be blank")
    } else {
        displayMessage("sucess", "Highscore saved to 'View Highscore'")

        localStorage.setItem("scoreInfo", JSON.stringify(scoreInfo));

        // localStorage.setItem("Initials", userName)
        // localStorage.setItem("score", userScore)
    }

});

// function resetQuiz() {
//     timerCount = 75;

// }

redoQuiz.addEventListener('click', function() {
    window.location.reload();
    // timerCount = 76;
    // scoreBox.setAttribute('style', 'display: none');
    // infoBox.setAttribute('style', 'display: block');
})

// function addScore {
//     var
// }

// Subtract time if question is wrong
// Game over when all questions are reached or time = 0
