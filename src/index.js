//imports
import Game from "./game.js";

//defining canvas
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
canvas.width = 550;
canvas.height = 450;
const canvasBackground = new Image();
canvasBackground.src = './imgs/bubblesBackground.png'

//image is asyncrhonous. It hasn't loaded yet. Thus, we need an onload
canvasBackground.onload = ()=> {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // ctx.drawImage(canvasBackground,0,0);
    const pattern = ctx.createPattern(canvasBackground, "repeat");
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
}


//for responsive canvas:
//https://javascript.plainenglish.io/how-to-resize-html5-canvas-to-fit-the-window-26935bf301c4
// canvas.width = window.innerWidth
// canvas.height = window.innerHeight * 0.75
// let bottomPart = document.getElementById("bottomPart");
// window.addEventListener('resize', () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight * 0.75
//       bottomPart.style.width = window.innerWidth
//       //not needed // draw(canvas)
//     })

//misc
document.getElementById("pauseButton").style.display = "none";
const currentGame = new Game(canvas, ctx, canvasBackground);

//calling newGame upon click
const playButton = document.getElementById("playButton");
playButton.addEventListener("click", ()=>{
    console.log("CurrentGame")
    console.log(currentGame);
    currentGame.startGame();
    document.getElementById("pauseButton").style.display = "block"
    playButton.style.display = "none";
})

//calling pauseGame upon click
const pauseButton = document.getElementById("pauseButton");
pauseButton.addEventListener("click", () => {
    currentGame.pauseGame();
})

// //stopping the loop with the keyboard
// const stopLoop = (e) => {
//     if(e.code === "KeyQ"){
//         clearInterval(timedLoop);
//     } else if(e.code === "KeyW"){
//         timedLoop = setInterval(gameLoop, 1000/gameSpeed);
//     }
// }
// document.addEventListener("keydown", stopLoop);
