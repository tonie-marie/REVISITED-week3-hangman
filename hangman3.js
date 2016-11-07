//got incredibly stuck so i used the solution for help
// considering the problem i was having with multiple things in all the different functions needing to reference each other and that not being possible, having everything be in one object make A LOT of sense

// doesn't work :( :( :(
// so close!

var hangman = {
	wordBank: {
		"bob": {
			picture: "bob.jpg"
		},
		"linda": {
			picture: "linda.jpg"
		},
		"tina": {
			picture: "tina.gif"
		},
		"gene": {
			picture: "gene.jpg"
		},
		"louise": {
			picture: "louise.gif"
		}
	},
	wordToGuess: null,
	lettersInWordToGuess: [],
	matchedLetters: [],
	guessedLetters: [],
	guessesLeft: 0,
	totalGuesses: 0,
	letterGuessed: null,
	wins: 0,
	setUpGame: function(){
		var objKeys = Object.keys(this.wordBank);
		this.wordToGuess = objKeys[Math.floor(Math.random() * objKeys.length)];
		this.lettersInWordToGuess = this.wordToGuess.split("");
		this.rebuildWordView();
		this.processUpdateTotalGuesses();
	},
	updatePage: function(letter){
		if (this.guessesLeft == 0){
			this.restartGame();
		} else{
			this.updateGuesses(letter);
			this.updateMatchedLetters(letter);
			this.rebuildWordView();
			if (this.updateWins() == true){
				this.restartGame();
			}
		}
	},
	updateGuesses: function(letter){
		if ((this.guessedLetters.indexOf(letter) == -1) && (this.lettersInWordToGuess.indexOf(letter) == -1)){
			this.guessedLetters.push(letter);
			this.guessesLeft--;

			document.querySelector("#guessesRemaining").innerHTML = this.guessesLeft;

			document.querySelector("#guessedLetters").innerHTML = this.guessedLetters.join(", ");
		}
	},
	processUpdateTotalGuesses: function(){
		this.totalGuesses = this.lettersInWordToGuess.length + 5;
		this.guessesLeft = this.totalGuesses;

		document.querySelector("#guessesRemaining").innerHTML = this.guessesLeft;
	},
	updateMatchedLetters: function(letter){
		for (var i=0; i < this.lettersInWordToGuess.length; i++){
			if ((letter === this.lettersInWordToGuess[i]) && (this.matchedLetters.indexOf(letter) == -1)){
				this.matchedLetters.push(letter);
			};
		};
	},
	rebuildWordView: function(){
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
	restartGame: function(){
		document.querySelector("#guessedLetters").innerHTML = "";
		this.wordToGuess = null;
		this.lettersInWordToGuess = [];
		this.matchedLetters = [];
		this.guessedLetters = [];
		this.totalGuesses = 0;
		this.letterGuessed = null;
		this.setUpGame = null;
		this.setUpGame();
		this.rebuildWordView();
	},
	updateWins: function(){
		if (this.matchedLetters.length == 0){
			var win = false;
		} else{
			var win = true
		}

		for (var i=0; i < this.lettersInWordToGuess.length; i++){
			if (this.matchedLetters.indexOf(this.lettersInWordToGuess[i]) == -1){
				win = false;
			}
		}

		if (win == true){
			this.wins = this.wins + 1;

			document.querySelector("#wins").innerHTML = this.wins;

			document.querySelector("#characterDiv").innerHTML = "<img class='characterImage' src='images/" + this.wordBank[this.wordToGuess].picture + "'";

			return true;
		} else{
			return false;
		}
	}
};

hangman.setUpGame();

document.onkeyup = function(event){
	hangman.letterGuessed = String.fromCharCode(event.keycode).toLowerCase();
	console.log("hey!" + hangman.letterGuessed);
	hangman.updatePage(hangman.letterGuessed);
}