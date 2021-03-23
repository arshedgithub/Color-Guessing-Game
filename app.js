const button = document.querySelector("button.play");
const home = document.querySelector(".home");
const game = document.querySelector(".game");
const clrTheme = document.querySelector(".clrTheme");
const boxes = document.querySelectorAll(".box");
const content = document.querySelector(".content");
const win = document.querySelector(".win");
const fail = document.querySelector(".fail");
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
makeColors = () => {
    let red = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
// make different colors
generateColor = (length) => {
    for (let i = 0; i < length; i++) {
        arr.push(makeColors());
    }
    for (let i = 0; i < length; i++) {
        boxes[i].style.backgroundColor = arr[i];
    }
    // get a color into clrTheme randomly
    const random = Math.floor(Math.random()*length);
    clrTheme.textContent = arr[random];
}
// new game
resetFunc = () => {
    arr = []; 
    win.classList.add("hidden");
    fail.classList.add("hidden");
    content.setAttribute("style", "opacity:1")
    generateColor(boxes.length);
}
generateColor(boxes.length);

content.addEventListener('click', e => {
    if (e.target.style.backgroundColor === clrTheme.textContent) {
        win.classList.remove("hidden");
        fail.classList.add("hidden");
        setTimeout(() => {
            content.setAttribute("style", "opacity:0.2")
            win.classList.add("hidden");
        }, 5000);
        return;
    } else if (e.target) {
        fail.classList.remove("hidden");
        win.classList.add("hidden");
        setTimeout(() => {
            fail.classList.add("hidden");
        }, 1000);
    }
})

