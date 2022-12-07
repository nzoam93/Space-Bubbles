import Player from "./player.js";
import SpikeController from "./spikeController.js";
import Bubble from "./bubble.js";
import Baseball from "./baseball.js";
import Sound from "./sounds.js";
import Timer from "./timer.js";
import Level1 from "./levels/level1.js";
import Level2 from "./levels/level2.js";
import Level3 from "./levels/level3.js";
import Bonus from "./bonus.js";
import InBetweenLevel from "./levels/inBetweenLevel.js";
import EndGame from "./levels/endGame.js";

export default class Game{
    constructor(canvas, ctx, canvasBackground){
        this.canvas = canvas;
        this.ctx = ctx;
        this.canvasBackground = canvasBackground;
        this.sound = new Sound(); //sound class
        this.spikeController = new SpikeController(); //spikeController
        this.player = new Player(canvas.width / 2 - 15, canvas.height - 50, this.spikeController, this.sound); //player
        this.baseball = new Baseball(50,50) //baseball. Get rid of eventually
        this.gameLength = 20;
        this.timer = new Timer(this.gameLength); //timer
        this.level;
        this.levelNumber = 1;
        this.bubbles;
        this.bonuses = [];


        this.score = 0;
        this.gameSpeed = 60;
        this.gameIsOver = false;
        this.paused = false;

        this.timedLoop;
    }

    startGame(){
         //starting on level 1 when you first click the play button
        this.timedLoop = setInterval(this.gameLoop.bind(this), 1000 / this.gameSpeed);

        this.sound.playThemeSong();
        document.getElementById("lives").innerHTML = "Lives: 3"


        //starts at level 1
        this.level = new Level1(this.player); //setting it to level 1. Should change later
        this.bubbles = this.level.bubbles;
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
        this.timer.countdown();

        //clear the screen and draws the background
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.canvasBackground,0,0);

        //draw the spikes, player
        this.spikeController.draw(this.ctx)
        this.player.draw(this.ctx)

        //do the bonus logic
        this.bonuses.forEach((bonus) => {
            bonus.draw();
            if(bonus.yPos > this.canvas.height){
                const bonusIndex = this.bonuses.indexOf(bonus);
                this.bonuses.splice(bonusIndex, 1);
            }
        })

        //baseball!!!!!!!
        this.baseball.draw(this.ctx);
        this.baseball.update(this.ctx)

        //collision detection
        this.bubbleAndSpikeCollision();
        this.bubbleAndPlayerCollision();
        this.bonusAndPlayerCollision();

        //see if the level is over
        this.isLevelComplete();

        //see if the game is over
        this.gameOver();
    }

    //bubble and spike collision
    bubbleAndSpikeCollision(){
        this.bubbles.forEach((bubble) => { //bubble collision with spike
            if(this.spikeController.collideWithBubble(bubble)){
                this.sound.poppedBubble();
                this.score += 50;
                document.getElementById("score").innerHTML = `Score: ${this.score}`;
                const bubbleIndex = this.bubbles.indexOf(bubble);
                this.bubbles.splice(bubbleIndex, 1);
                let newBubbleSize = bubble.size - 1; //decrease the size of the bubble
                if(newBubbleSize > 0){
                    this.bubbles.push (new Bubble(bubble.xPos, bubble.yPos, 1, -1, newBubbleSize)); //add bubbles!
                    this.bubbles.push (new Bubble(bubble.xPos, bubble.yPos, -1, -1, newBubbleSize));
                }

                //bonus logic. Push the bonus into bonuses array if the bubble is big
                if(bubble.size > 2){
                    this.bonuses.push(new Bonus(this.ctx, bubble.xPos, bubble.yPos));
                }
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
            if(this.player.collideWithBubble(bubble) && this.player.immunity <= 0){
                this.player.immunity = this.gameSpeed * 1.5; //gives you 1.5 seconds of immunity!
                this.player.lives--;
                if(this.player.lives >= 0){
                    document.getElementById("lives").innerHTML = `Lives: ${this.player.lives}`;
                }
                this.sound.playerHit();
            }
        })
    }

    //collecting bonus
    bonusAndPlayerCollision(){
        this.bonuses.forEach((bonus) => {
            if(this.player.collideWithBonus(bonus)){
                this.score += 100;
                document.getElementById("score").innerHTML = `Score: ${this.score}`;
                const bonusIndex = this.bonuses.indexOf(bonus);
                this.bonuses.splice(bonusIndex, 1);
            }
        })
    }


    //performs logic if the level is complete
    isLevelComplete(){
        if(this.level.levelComplete()){
            this.pauseGame();
            this.score += this.timer.seconds * 10;
            document.getElementById("score").innerHTML = `Score: ${this.score}`;

            new InBetweenLevel(this.timer.seconds, this.ctx, this.canvasBackground);
            setTimeout(this.pauseGame.bind(this), 3000); //bind so it doesn't lose context!

            if (this.levelNumber === 1){
                this.level = new Level2(this.player);
            }
            else if(this.levelNumber === 2){
                this.level = new Level3(this.player)
            }

            this.levelNumber++; //use to increment it automatically
            this.timer.startTime = this.levelNumber * 20;
            this.bubbles = this.level.bubbles; //actually makes the array so it can draw the bubbles!
        }
    }


    //gameOver logic
    gameOver(){
        if((this.player.lives === 0) || (this.timer.minutes <= 0 && this.timer.seconds <= 0)){
            this.isGameOver = true;
            this.sound.gameOver();
            new EndGame(this.score, this.ctx, this.canvasBackground);
            clearInterval(this.timedLoop);
            document.getElementById("pauseButton").style.display = "none";
            document.getElementById("playButton").style.display = "block"
            this.timer.startTime = this.gameLength;
            this.timer.countdownEl.style.color = "black"
            document.getElementById("playButton").innerHTML = "Restart"
            this.sound.pauseThemeSong();
            this.player.lives = 3;
        }
    }

    //muteGame function used by index.js for the onclick of mute button
    muteGame(){
        this.sound.muteAndUnmute();
    }
}
