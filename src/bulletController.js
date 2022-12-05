import Bullet from "./bullet.js";

export default class BulletController{
    bullets = [];
    timerUntilNextBullet = 0;

    constructor(canvas){
        this.canvas = canvas;
    }

    shoot(xPos, yPos, vel, damage, delay) {
        if(this.timerUntilNextBullet <=0){ //causes the delay
            if(this.bullets.length < 10){ //limits the number of bullets
                this.bullets.push(new Bullet(xPos, yPos, vel, damage));
                this.timerUntilNextBullet = delay;
            }
        }
        //decrease the value of the timer
        this.timerUntilNextBullet--;
    }

    draw(ctx) {
        console.log(this.bullets.length);
        this.bullets.forEach((bullet) => {
            //remove the bullet if it is off screen
            if(this.isBulletOffScreen(bullet)){
                const index = this.bullets.indexOf(bullet);
                this.bullets.splice(index, 1) //remove 1 bullet from bullets list at index of the current bullet
            }
            bullet.draw(ctx);
        })
    }

    isBulletOffScreen(bullet){
        return bullet.yPos <= 0
    }

    collideWith(sprite){
        return this.bullets.some(bullet =>{ //some returns true if there is at least one bullet colliding
            if(bullet.collideWith(sprite)){ //bullet also has a collidesWith method
                const index = this.bullets.indexOf(bullet);
                this.bullets.splice(index, 1); //take the bullet off of the screen since it already has hit something
                return true;
            }
            return false;
        })
    }
}
