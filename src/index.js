import Player from "./player.js";
import BulletController from "./bulletController.js";
import Bubble from "./bubble.js";
import Level1 from "./levels/level1.js";
import Baseball from "./baseball.js";
import Sound from "./sounds.js";

//defining sounds
const sound = new Sound();

//defining canvas
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
canvas.width = 550;
canvas.height = 450;
const canvasBackground = new Image();
canvasBackground.src = './imgs/bubblesBackground.png'

//trying to draw the image as the default. It's not working though
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(canvasBackground,0,0);

const gameSpeed = 60;

//for responsive canvas:
//https://javascript.plainenglish.io/how-to-resize-html5-canvas-to-fit-the-window-26935bf301c4
// canvas.width = window.innerWidth
// canvas.height = window.innerHeight * 0.75
// window.addEventListener('resize', () => {
//   canvas.width = window.innerWidth
//   canvas.height = window.innerHeight * 0.75
//   bottomPart = document.getElementById("bottomPart");
//   bottomPart.style.width = window.innerWidth
//   //not needed // draw(canvas)
// })


//defining bullet controller
const bulletController = new BulletController(canvas);

//defining the player
const player = new Player(canvas.width / 2 - 15, canvas.height - 50, bulletController);

//defining bubbles
const bubbles = [
    new Bubble(0, canvas.height - 100, 1, 2, 4),
    new Bubble(50, canvas.height - 100, 1, 2, 3)
]

//baseball!!!!!
const baseball = new Baseball(50, 50);

//What should continuously happen throughout the game
function gameLoop(){
    // setCommonStyle();
    //clear the screen and draws the background
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(canvasBackground,0,0);

    bulletController.draw(ctx)
    player.draw(ctx)

    //baseball!!!!!!!
    baseball.draw(ctx);
    baseball.update(ctx)


    bubbles.forEach((bubble) => { //bubble collision with bullet
        if(bulletController.collideWith(bubble)){
            const bubbleIndex = bubbles.indexOf(bubble);
            bubbles.splice(bubbleIndex, 1);
            let newBubbleSize = bubble.size - 1;
            if(newBubbleSize > 0){
                bubbles.push (new Bubble(bubble.xPos, bubble.yPos, 1, -1, newBubbleSize));
                bubbles.push (new Bubble(bubble.xPos, bubble.yPos, -1, -1, newBubbleSize));
                console.log(`bubblesLength ${bubbles.length}`);
            }
        }
        else {
            bubble.draw(ctx);
        }
    })

    bubbles.forEach((bubble) => { //bubble collision with player
        player.immunity--;
        if(player.collideWith(bubble) && player.immunity <= 0){
            console.log(player.lives)
            player.immunity = gameSpeed; //gives you one second of immunity!
            player.lives--;
            sound.playerHit();
            gameOver();
        }
    })
}

//variables for loops
let timedLoop;

//actually doing the game loop, every 1000/gameSpeed ms
const playButton = document.getElementById("playButton");
playButton.addEventListener("click", ()=>{
    //starting on level 1 when you first click the play button
    timedLoop = setInterval(gameLoop, 1000/gameSpeed);
    playButton.style.display = "none";
    sound.playThemeSong();

})


//stopping the loop with the pause button
let paused = false;
const pauseButton = document.getElementById("pauseButton");
pauseButton.addEventListener("click", () => {
    if (!paused){
        clearInterval(timedLoop);
        paused = true;
        pauseButton.innerHTML = "resume";
        sound.pauseThemeSong();
    }
    else {
        timedLoop = setInterval(gameLoop, 1000/gameSpeed);
        paused = false;
        pauseButton.innerHTML = "pause";
        sound.playThemeSong();
    }

})

//stopping the loop with the keyboard
const stopLoop = (e) => {
    if(e.code === "KeyQ"){
        clearInterval(timedLoop);
    } else if(e.code === "KeyW"){
        timedLoop = setInterval(gameLoop, 1000/gameSpeed);
    }
}
document.addEventListener("keydown", stopLoop);


//gameOver logic
function gameOver(){
    if(player.lives === 0){
        let gameOver = true;
        sound.gameOver();
    }
}

//setting styles
    // function setCommonStyle() {
    //     ctx.shadowColor = "yellow"
    //     ctx.shadowBlur = 20;
    //     ctx.lineWidth = 5;
    // }
