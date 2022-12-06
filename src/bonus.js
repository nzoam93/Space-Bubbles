export default class Bonus{
    constructor(bubble){
        this.bubble = bubble;
        this.bonuses = [];
        this.yPos = bubble.yPos;
        this.coin = new Image();
        this.coin.src = "../imgs/coin.png"
        this.color = "blue"
        this.vel = 2;
    }

    dropCoin(){
        console.log("coin");
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.drawImage(this.coin, 0, 0);
        console.log("draw");

    }

    //actual collisionDetection
    // collideWith(sprite){
    //     sprite.height = sprite.radius * 2; //defined so that a bubble with a radius can also work in the collision detection
    //     sprite.width = sprite.radius * 2;

    //     //xPos of sprite on a circle is the MIDDLE. So you need to subtract the radius
    //     if(this.xPos < sprite.xPos + sprite.width - sprite.radius &&
    //        this.xPos + this.width > sprite.xPos - sprite.radius &&
    //        this.yPos < sprite.yPos + sprite.height &&
    //        this.yPos + this.height > sprite.yPos
    //     ){
    //         //collision detected
    //         // sprite.takeDamage(this.damage);
    //         return true;
    //     }
    //     return false;
    // }

}
