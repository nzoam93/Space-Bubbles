

export default class Spike{
    constructor(xPos, yPos, vel, damage){
        this.xPos = xPos;
        this.yPos = yPos;
        this.vel = vel;
        this.damage = damage;

        this.width = 5;

        let canvas = document.getElementById("game");
        this.height = canvas.height;
        this.color = "black"

        //adding in the spike image
        this.spike = new Image();
        this.spike.src = "../imgs/spike.png"
        this.spriteHeight = 0;
        this.picHeight = 0;
    }


    draw(ctx){
        // this.spriteHeight += this.vel;
        // this.picHeight += 50 * this.vel;
        // ctx.drawImage(this.spike, 0, 0, 16, 32, this.xPos, this.yPos, 40, this.picHeight);
        //ctx.drawImage(image, 0, 0, 32, dynamic, x, y, this.width, how tall pic is)
        ctx.fillStyle = this.color;
        this.yPos -= this.vel;
        ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
    }

    //actual collisionDetection
    //https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    collideWith(sprite){
        sprite.height = sprite.radius; //defined so that a bubble with a radius can also work in the collision detection
        sprite.width = sprite.radius;

        if(this.xPos < sprite.xPos + sprite.width &&
           this.xPos + this.width > sprite.xPos &&
           this.yPos < sprite.yPos + sprite.height &&
           this.yPos + this.height > sprite.yPos
        ){
            //collision detected
            // sprite.takeDamage(this.damage);
            return true;
        }
        return false;
    }

}
