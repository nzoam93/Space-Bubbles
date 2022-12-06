let backgroundMusic = new Audio("../sounds/Superhero_violin.ogg");
//backgroundMusic defined outside so it can be referenced in two places

export default class Sound{
    constructor(){}

    playThemeSong(){
        // backgroundMusic.play();
    }

    pauseThemeSong(){
        backgroundMusic.pause();
    }

    gameOver(){
        // let gameOver = new Audio("../sounds/gameOver.ogg");
        // gameOver.play();
    }

    projectile(){
        // let laserSound = new Audio("../sounds/laser4.wav");
        // laserSound.play();
    }

    playerHit(){
        //  let ow = new Audio("../sounds/ow.m4a");
        //  ow.play();
    }



}
