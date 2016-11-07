// try and think of bare bones and build up from there
//BASIC BASIC BASIC BASIC BASIC BASIC BASIC BASIC

// var hangman = {
// 	wordBank: {"bob", "linda", "tina", "gene", "louise"},
// };

//console.log(hangman.wordbank[0]);

//the above didn't work so maybe if the wordbank is global instead?
var wordBank = ["bob", "linda", "tina", "gene", "louise"];

var hangman = {
	//page loads for first time, user sees blanks, wins and losses are set to 0, guesses left = 0, guessed letters = 0
	wordToGuess:null,
	lettersInWordToGuess: [],
	guessedLetters: [],
	guessesLeft: 10,
	letterGuessed: null,
	wins: 0,
	losses: 0,
	initializeGame: function(){
		this.wins = 0,
		this.losses = 0,
		this.loadNewWord();
	},
	loadNewWord: function(){ //use every time a new word is needed
		this.wordToGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
		this.guessedLetters = [],
		this.guessesLeft = 10,
		this.letterGuessed = null,
		
		this.guessedLetters = this.wordToGuess.split("");
		var wordView = "";

		for (var i=0; i < this.lettersInWordToGuess.length; i++){
			if (this.matchedLetters.indexOf(this.lettersInWordToGuess[i]) != -1){
				wordView += this.lettersInWordToGuess[i];
			} else{
				wordView += "&nbsp;_&nbsp;";
			}
		}

		document.querySelector("#currentWord").innerHTML = wordView;
	},

	winOrLose: function(){

	}
};

hangman.initializeGame();

document.onkeyup = function(event){
	hangman.letterGuessed = String.fromCharCode(event.keycode).toLowerCase();
	console.log(typeof hangman.letterGuessed);
	//hangman.updatePage(hangman.letterGuessed);
}