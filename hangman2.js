// bare bones, what do i need?
// word bank
var wordBank = ["bob", "linda", "tina", "gene", "louise"];

// computer needs to choose a word from bank at random
var compChoseWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log("RANDOM: " + compChoseWord); //works!! :)

// win counter
var wins = 0;

// loss counter
var losses = 0;

// counter for how many times user has guessed, limit 10
var guesses = 10;

// an array to hold the letters that the user has guessed, if they are not in the word
var letterNotInWordToGuess = [];

// an array that shows up as _ for each letter, where the correctly guessed letters are then pushed
var blanksReplacedByCorrectLetters = [];

// i need to split up the words in the bank and replace them with _
function splittingWords(wordToSplit){
	console.log(wordToSplit);
	var splitWord = wordToSplit.split("");
	console.log(splitWord);
	for (var i=0; i < splitWord.length; i++){
		splitWord[i] = ("_"); //can't figure out how to get rid of the commas when this prints to the page!! argh!!!!
	}
	console.log(splitWord);
}

function loadNewWord(){
	splittingWords(wordBank[0]);
	splittingWords(wordBank[1]);
	splittingWords(wordBank[2]);
	splittingWords(wordBank[3]);
	splittingWords(wordBank[4]);
}

loadNewWord();