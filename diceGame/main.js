/* javascriptEx2 - diceGame - main.js */

//connect to the dice shapes and numbers
var playerDice = document.getElementById('playerDice');
var playerNumber = document.getElementById('playerNumber');
var computerDice = document.getElementById('cpuDice');
var computerNumber = document.getElementById('cpuNumber');

//connect to the gameResult Message
var gameScore = document.getElementById('theWinnerIs');

//cpu picks and logs 2 numbers between 1 to 10
var pickedNumbers = [];

for (var i = 0; i < 2; i++) {
  pickedNumbers.push(Math.ceil(Math.random() * 10));
  console.log('cpu picked ' + pickedNumbers[i]);
}

var extractedForPlayer = pickedNumbers[0];
var extractedForCpu = pickedNumbers[1];

//default reult
var result = "It's a draw";

//after 1 second animation in CSS...
setTimeout(function (){
  //eveluates numbers and changes background color for the winner
  if (extractedForCpu > extractedForPlayer) {
    result = 'Cpu Wins :(';
    cpuDice.style.background = 'green';
  } else if (extractedForCpu < extractedForPlayer)  {
    result = 'You win! :)';
    playerDice.style.background = 'green';
  }

  //communicates score to the user
  playerNumber.innerHTML = extractedForPlayer;
  computerNumber.innerHTML = extractedForCpu;
  gameScore.innerHTML = result;
}, 1000);
