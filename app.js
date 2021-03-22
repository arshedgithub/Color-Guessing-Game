const button = document.querySelector("button.play");
const home = document.querySelector(".home");
const game = document.querySelector(".game");
const clrTheme = document.querySelector(".clrTheme");
const boxes = document.querySelectorAll(".box");
var colors = [];
let arr = [];

home.addEventListener('click', e => {
    if (e.target === button) {
        startBtn();
    }
});

// start the game when play button clicked
startBtn = () => {
    home.classList.add("hidden");  
    game.classList.remove("hidden");
}

// make random rgb patterns 
makeColor = () => {
    let red = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    return "rgb(" + red + ", " + green + ", " + blue + " )";
}

// make different colors
generateColor = (length) => {
    for (let i = 0; i < length; i++) {
        arr.push(makeColor());
    }
    for (let i = 0; i < length; i++) {
        boxes[i].style.backgroundColor = arr[i];
    }
    console.log(arr);
    // get a color into clrTheme randomly
    const random = Math.floor(Math.random()*length);
    clrTheme.textContent = arr[random];
}
generateColor(boxes.length);

game.addEventListener('click', e => {
    console.log(e.target.style.backgroundColor, clrTheme.textContent);
    if (e.target.style.backgroundColor == clrTheme.textContent) {
        console.log("correct");
    } else {
        console.log("none");
    }
})
