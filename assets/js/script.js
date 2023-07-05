var bigTitle = document.querySelector(".title");
var rules = document.querySelector(".rules");

bigTitle.textContent = "Coding Quiz Challenge";
rules.textContent = "To complete this quiz please answer the following 5 questions within the limited timeframe of 1 minute (60 seconds). If any questions are incorrect, you are docked 10 seconds from the timer. If you reach 0 on the timer the quiz will end. Good luck!"

// Create vars for all question headers and list answers
// 
// Timer for the whole quiz
// Subtract time if question is wrong
// Game over when all questions are reached or time = 0