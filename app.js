const button = document.querySelector("button.play");
const home = document.querySelector(".home");
const game = document.querySelector(".game");
const clrTheme = document.querySelector(".clrTheme");

home.addEventListener('click', e => {
    if (e.target === button) {
        start();
    }
});

let red = Math.floor(Math.random()*256);
let blue = Math.floor(Math.random()*256);
let green = Math.floor(Math.random()*256);

clrTheme.innerHTML = `RGB(${red},${green},${blue})`

// start the game when play button clicked
function start() {
    home.classList.add("hidden");  
    game.classList.remove("hidden");
}

