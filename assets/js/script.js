// Wait for the COM to finish loading before running the game
// Get the buttom elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = this.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert (`You clicked ${gameType}`);
            }
        })

    }
})

/**
 * The main game "loop", called when the cript is first loaded
 * and after the user's answers has been processed
 */


function runGame() {

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

}

function checkAnswer() {

}

function claculateCorrectAnswer() {
    
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivideQuestion() {

}