

export default class Spike{
    constructor(xPos, yPos, vel, damage){
        this.xPos = xPos;
        this.yPos = yPos;
        this.vel = vel;
        this.damage = damage;

        this.width = 10;

        let canvas = document.getElementById("game");
        this.height = canvas.height;
        this.color = "black"

        //adding in the spike image
        this.spike = new Image();
        this.spike.src = "../imgs/spike.png"
    }


    draw(ctx){
        ctx.fillStyle = this.color;
        this.yPos -= this.vel;
        ctx.drawImage(this.spike, 0, 0, 6, 32, this.xPos, this.yPos, this.width, this.height);
        // previous logic below
        // ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
    }

    //actual collisionDetection
    //https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    collideWith(sprite){
        sprite.height = sprite.radius * 2; //defined so that a bubble with a radius can also work in the collision detection
        sprite.width = sprite.radius * 2;

        //xPos of sprite on a circle is the MIDDLE. So you need to subtract the radius
        if(this.xPos < sprite.xPos + sprite.width - sprite.radius &&
           this.xPos + this.width > sprite.xPos - sprite.radius &&
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
