// array of phrases
let phrases = [
    "my cup of tea", 
    "what goes up must come down",
    "elephant in the room",
    "drawing a blank",
    "burst your bubble",
    "shot in the dark"
];

// adding event listener on start button
const start = document.getElementById('btn__reset');
start.addEventListener('click', resetDisplay);


// adding event listening to keys
let keys = document.getElementsByClassName('key');
document.getElementById("btn__reset").focus();
for(var i=0; i < keys.length; i++){
    keys[i].addEventListener('click',markButton)
} 
const keyb = document.getElementById('qwerty');
keyb.style.display = 'block';


//start new game 
let newGame = new Game(0,phrases);

//hides overlay classes
function resetDisplay() {
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = "hidden";
    newGame.startGame();
}

//disables keys that are pressed and calls handleInteraction()
function markButton(){
    let thisGuess = event.target.textContent   
    newGame.handleInteraction(thisGuess);

}

document.addEventListener('keypress',(e)=>{
    newGame.handleInteraction(e);

}) 
