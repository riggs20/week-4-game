$(document).ready(function() {


// Variable for wins
var wins = 0;

// Variable for losses
var losses = 0;

// Variable for my score
var myScore = 0;

// Generate random number for the computer between 19-120
var randomNumber = document.getElementById("computerNbr").innerHTML =
Math.floor(Math.random() * 120) + 19;

// Variable to store 4 random numbers for each gem
var blueRandom = Math.floor(Math.random() * 12) + 1;
var greenRandom = Math.floor(Math.random() * 12) + 1;
var redRandom = Math.floor(Math.random() * 12) + 1;
var yellowRandom = Math.floor(Math.random() * 12) + 1;

console.log(blueRandom);
console.log(greenRandom);
console.log(redRandom);
console.log(yellowRandom);

// Each time a crystal is clicked, the random number is added
// to my score

// On click function for blue crystal
$("#blue").on("click", function () {
	myScore = Number(myScore) + Number(blueRandom);
	$("#total-score").text(myScore);
})

$("#green").on("click", function() {
	myScore = Number(myScore) + number(greenRandom);
	$("#total-score").text(myScore);
})


// While my score is less than the random number, do nothing
if (myScore < randomNumber) {
}

// When the scores are equal, add one point to wins and show 
// "You won!!" message
else if (myScore === randomNumber) {
	wins++;
	$("#message").text("You won!!");
}

// When my score is greater than the random number, add one
// point to losses and show "You lost!!" message.
else {
	losses++;
	$("#message").text("You lost!!");
}







})
