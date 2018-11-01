//create phrases 
// chose random phrase
//split phrase into letters 
//put letters on board 
class Phrase {
	constructor(phrase) {
		this.phrase = phrase;
	}
	addPhraseToDisplay() {
		let phray = this.phrase.split("");
		//add letter placeholders to screen when game starts 
		//example phrase
		//when letter guessed, box is replaced with matched letter 
		let list = '<ul>';
		for (var i = 0; i < phray.length; i++) {
			if (phray[i] != " ") {
				list += `<li class="hide letter ${phray[i]}">${phray[i]}</li>`
			} else {
				list += `<li class="hide space"> </li>`
			}
		}
		list += '</ul>';
		let x = document.createElement
		let gameboard = document.getElementById('phrase');
		gameboard.innerHTML = list;
	}
	checkLetter(target) {
		//does selected letter match 
		//does button clicked match a letter 
		//pass in input, look through phrase to see if it matches any in the 
		//if so show 
		//select phrase on screen to search through its letters
		let lttrs = document.getElementsByClassName("letter");
		//create an array from letters to use array methods
		let ltrAr = Array.from(lttrs);
		//grab the letters from the html element 
		let innerLet = ltrAr.map((min) => {
			return min.innerHTML
		});
		//variable for phrase on screen 
		let pOs = innerLet.join("");
		//check to see if target matches phrase 
		let regex = new RegExp(target, 'gi');
		let matched = pOs.match(regex);
		if (matched) {
			this.showMatchedLetter(matched[0]);
			return true;
		}
	}
	showMatchedLetter(match) {
		let letters = document.getElementsByClassName("letter");
		for (var i = 0; i < letters.length; i++) {
			if (letters[i].innerHTML === match) {
				letters[i].style.color = "black";
			}
		}
		//pass in input, look through phrase to see if it matches any in the 
	}
}

//Warren Leyes, a fellow techdegree student told me about the below function which prevents highlighting letters in the phrase
document.addEventListener("mousedown", function (e) {
	e.preventDefault();
});