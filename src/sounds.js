

export default class Sound{
    constructor(){
        this.isMuted = true; //during testing, keeping it muted
        this.backgroundMusic = new Audio("../sounds/Superhero_violin.ogg");
        this.gameOverSound = new Audio("../sounds/gameOver.ogg");
        this.laserSound = new Audio("../sounds/laser4.wav");
        this.ow = new Audio("../sounds/ow.m4a");
    }

    playThemeSong(){
        if(!this.isMuted){
            this.backgroundMusic.play();
        }
    }

    pauseThemeSong(){
        this.backgroundMusic.pause();
    }

    gameOver(){
        if(!this.isMuted){
            this.gameOverSound.play();
        }
    }

    // pauseGameOverMusic(){
    //     this.gameOverSound.pause();
    // }

    projectile(){ //currently, this is controlled with a NEW SOUND separately in the player class. This isn't quite right
        if(!this.isMuted){
            this.laserSound.play();
        }
    }

    // pauseProjectile(){
    //     this.laserSound.pause();
    // }

    playerHit(){
        if(!this.isMuted){
            this.ow.play();
        }
    }

    // pausePlayerHit(){
    //     this.ow.pause();
    // }

    muteAndUnmute(){
        if(this.isMuted){
            this.isMuted = false;
            this.playThemeSong();
        }
        else{
            this.isMuted = true;
            this.pauseThemeSong();
        }
    }
}
