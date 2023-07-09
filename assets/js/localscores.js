var scoreList = document.querySelector(".score-list");
var clearButton = document.querySelector("#clear");

var scores = [];

function grabScores() {
    var storedScores = JSON.parse(localStorage.getItem("Highscores"));
    
    if (storedScores != null) {
        scores = storedScores;
    }
    displayScores()
};

function displayScores() {
    for (var i = 0; i < scores.length; i++) {
        var allScores = scores[i];
    
        var scoreListItem = document.createElement("li");
        scoreListItem.textContent = allScores.userName + " with a score of " + allScores.userScore + " seconds!";
        scoreList.appendChild(scoreListItem);
    }
};


clearButton.addEventListener("click", function() {
    localStorage.removeItem("Highscores");
    scoreList.innerHTML = "";
});

grabScores()