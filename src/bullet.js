export default class Bullet{
    constructor(xPos, yPos, vel, damage){
        this.xPos = xPos;
        this.yPos = yPos;
        this.vel = vel;
        this.damage = damage;

        this.width = 5;
        this.height = 15;
        this.color = "black"
    }


    draw(ctx){
        ctx.fillStyle = this.color;
        this.yPos -= this.vel;
        ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
    }

    //actual collisionDetection
    //https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    collideWith(sprite){
        sprite.height = sprite.radius; //defined so that a bubble with a radius can also work in the collision detection
        sprite.width = sprite.radius;

        console.log(sprite.height)
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
