//imports
import Game from "./game.js";
import Homescreen from "./levels/homeScreen.js";

//defining canvas
const canvas = document.getElementById("game");
canvas.width = 1000;
canvas.height = 500;
const canvasBackground = new Image();
canvasBackground.src = './imgs/background.png'
const ctx = canvas.getContext("2d");

//image is asyncrhonous. It hasn't loaded yet. Thus, we need an onload
canvasBackground.onload = ()=> {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const pattern = ctx.createPattern(canvasBackground, "repeat");
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    new Homescreen(canvas, ctx, canvasBackground);
}






//setting displays to not show up yet
document.getElementById("pauseButton").style.display = "none";
document.getElementById("level").style.display = "none";
document.getElementById("lives").style.display = "none";
document.getElementById("timer").style.display = "none";

//initializing the currentGame
const currentGame = new Game(canvas, ctx, canvasBackground);

//calling newGame upon click
const playButton = document.getElementById("playButton");
playButton.addEventListener("click", ()=>{
    //starts the game
    currentGame.startGame();

    //resets the context shadow
    ctx.shadowColor = "black";
    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 4;
    ctx.shadowBlur = 5;

    //sets the display of these elements as none
    document.getElementById("pauseButton").style.display = "block";
    document.getElementById("level").style.display = "block";
    document.getElementById("lives").style.display = "block";
    document.getElementById("timer").style.display = "block";
    playButton.style.display = "none";
})

//calling pauseGame upon click
const pauseButton = document.getElementById("pauseButton");
pauseButton.addEventListener("click", () => {
    currentGame.pauseGame();
})

//calling muteGame upon click
const muteButton = document.getElementById("muteButton");
muteButton.addEventListener("click", () => {
    currentGame.muteGame();
})

//for responsive canvas:
//https://javascript.plainenglish.io/how-to-resize-html5-canvas-to-fit-the-window-26935bf301c4
// canvas.width = window.innerWidth
// canvas.height = window.innerHeight * 0.75
// let bottomPart = document.getElementById("bottomPart");
// window.addEventListener('resize', () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight * 0.75
//       bottomPart.style.width = window.innerWidth
//     })
