var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;

var userGuess = [];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(computerGuess, "first guess")
//this function will run when the user presses a key.
document.onkeyup = function(event) {
  guessesLeft--;
  var input = event.key;
  userGuess.push(input);

  document.getElementById("userInput").innerHTML = userGuess.join(", ");
document.getElementById("remaining").innerHTML = guessesLeft;
// if input === computerGuess;
// alert "you win";
// wins go up by 1;
//restartGame;
if(input === computerGuess){
  alert("YAY! You Win!");
  wins++;
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  // console log below will reveal letter after a win
  //console.log("computerGuess after Win", computerGuess)
  restartGame();
}

if(guessesLeft < 1) {
  alert("You Lose!");
  losses++;
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  //console log below will reveal new letter after a loss
  //console.log("Guess after loss", computerGuess);
  restartGame();
}
}

function restartGame() {
  guessesLeft = 10;
  userGuess= [];
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("userInput").innerHTML = userGuess;
  document.getElementById("remaining").innerHTML = guessesLeft;
}
restartGame();
