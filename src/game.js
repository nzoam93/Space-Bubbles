import Player from "./player.js";
import SpikeController from "./spikeController.js";
import Bubble from "./bubble.js";
import Level1 from "./levels/level1.js";
import Baseball from "./baseball.js";
import Sound from "./sounds.js";
import Timer from "./timer.js";

export default class Game{
    constructor(canvas, ctx, canvasBackground){
        this.canvas = canvas;
        this.ctx = ctx;
        this.canvasBackground = canvasBackground;
        this.sound = new Sound(); //sound class
        this.spikeController = new SpikeController(); //spikeController
        this.player = new Player(canvas.width / 2 - 15, canvas.height - 50, this.spikeController); //player
        this.level1 = new Level1(); //setting it to level 1. Should change later
        this.bubbles = this.level1.bubbles;
        this.baseball = new Baseball(50,50) //baseball. Get rid of eventually
        this.timer = new Timer(); //timer

        this.score = 0;
        this.gameSpeed = 60;
        this.gameIsOver = false;
        this.paused = false;

        this.timedLoop;
    }

    startGame(){
        console.log("StartGame");
        console.log(this);
         //starting on level 1 when you first click the play button
        this.timedLoop = setInterval(this.gameLoop.bind(this), 1000 / this.gameSpeed);

        this.sound.playThemeSong();
        // new Level1();
    }

    pauseGame(){
        let pauseButton = document.getElementById("pauseButton");
        if (!this.paused){
            clearInterval(this.timedLoop);
            this.paused = true;
            pauseButton.innerHTML = "resume";
            this.sound.pauseThemeSong();
        }
        else {
            this.timedLoop = setInterval(this.gameLoop.bind(this), 1000 / this.gameSpeed);
            this.paused = false;
            pauseButton.innerHTML = "pause";
            this.sound.playThemeSong();
        }
    }
    //stopping the loop with the pause button

    //What should continuously happen throughout the game
    gameLoop(){
        // console.log(this)
        this.timer.countdown();

        //clear the screen and draws the background
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.canvasBackground,0,0);

        //draw the spikes and player
        this.spikeController.draw(this.ctx)
        this.player.draw(this.ctx)

        //baseball!!!!!!!
        this.baseball.draw(this.ctx);
        this.baseball.update(this.ctx)

        //collision detection
        this.bubbleAndSpikeCollision();
        this.bubbleAndPlayerCollision();
    }

    //bubble and spike collision
    bubbleAndSpikeCollision(){
        // console.log("collisiosndetection")
        // console.log(this);
        // console.log(this.bubbles);
        this.bubbles.forEach((bubble) => { //bubble collision with spike
            if(this.spikeController.collideWith(bubble)){
                this.score += 50;
                document.getElementById("score").innerHTML = `Score: ${this.score}`;
                const bubbleIndex = this.bubbles.indexOf(bubble);
                this.bubbles.splice(bubbleIndex, 1);
                let newBubbleSize = bubble.size - 1; //decrease the size of the bubble
                if(newBubbleSize > 0){
                    this.bubbles.push (new Bubble(bubble.xPos, bubble.yPos, 1, -1, newBubbleSize)); //add bubbles!
                    this.bubbles.push (new Bubble(bubble.xPos, bubble.yPos, -1, -1, newBubbleSize));
                }
                bubble.bonusCall(); //drop a random bonus
            }
            else {
                bubble.draw(this.ctx);
            }
        })
    }

    //bubble collision with player
    bubbleAndPlayerCollision(){
        this.bubbles.forEach((bubble) => {
            this.player.immunity--;
            if(this.player.collideWith(bubble) && this.player.immunity <= 0){
                this.player.immunity = this.gameSpeed * 1.5; //gives you 1.5 seconds of immunity!
                this.player.lives--;
                if(this.player.lives >= 0){
                    document.getElementById("lives").innerHTML = `Lives: ${this.player.lives}`;
                }
                this.sound.playerHit();
                this.gameOver();
            }
        })
    }


    //gameOver logic
    gameOver(){
        if(this.player.lives === 0){
            this.isGameOver = true;
            this.sound.gameOver();
        }
    }
}
