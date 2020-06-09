var randomNumber = Math.floor(Math.random() * 500) + 1;
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHigh = document.querySelector('.lowOrHigh');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var resetButton;
var guessCount = 1;

guessField.focus();

function checkGuess(){
    
	var userGuess = Number(guessField.value);
	if(guessCount ===1){
		guesses.textContent = 'Previous guesses: ';
	
	  guesses.style.backgroundColor = 'blue';
	 
  }
  
   guesses.textContent += userGuess + ' ';
   
	if(userGuess === randomNumber){
		lastResult.textContent = 'Congratulations! You got it right!';
		lastResult.style.backgroundColor = 'green';
		lowOrHigh.textContent = '';
		setGameOver();
	} 
  
  if(userGuess < randomNumber){
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    lowOrHigh.textContent = 'Last guess was too low!';
  }
 
  if(userGuess > randomNumber){
    lastResult.textContent = 'Wrong';
    lastResult.style.backgroundColor = 'red';
    lowOrHigh.textContent = 'Last guess was too high!';
  }
	
  guessCount++;
  
  if(guessCount === 11){
		lastResult.textContent = '!!!GAME OVER!!!';
		lowOrHigh.textContent = '';
		setGameOver();
  } 
  
	guessField.value = '';
	guessField.focus();
	}//end of function
	
guessSubmit.addEventListener('click', checkGuess);

function setGameOver(){
	guessField.disabled = true;
	guessSubmit.disabled = true;
	lowOrHigh.textContent = 'The correct answer was ' + randomNumber;
	resetButton = document.createElement('button');
	resetButton.textContent = 'Start new game';
	document.body.appendChild(resetButton);
	resetButton.addEventListener('click', resetGame);
}

function resetGame(){
	guessCount = 1;
	
	var resetParas = document.querySelectorAll('.resultParas p');
	for(var i = 0; i < resetParas.length ; i++){
		resetParas[i].textContent = '';
	}
	
	resetButton.parentNode.removeChild(resetButton);
	
	guessField.disabled = false;
	guessSubmit.disabled = false;
	guessField.value = '';
	guessField.focus();
	
	lastResult.style.backgroundColor = '#12aab4;'
	guesses.style.backgroundColor = '#12aab4;'
	
	randomNumber = Math.floor(Math.random() * 500) + 1;
	
}//end of function
