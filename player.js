export default class Player{
    constructor(xPos, yPos, bulletController){
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = 50;
        this.height = 50;
        this.vel = 4;
        this.immunity = 0;

        this.bulletController = bulletController;

        //event listeners for the keystrokes
        document.addEventListener("keydown", this.keydown);
        document.addEventListener("keyup", this.keyup);
    }

    draw(ctx){
        //draw the updated character pos
        this.move();

        //creating the look of the character
        ctx.strokeStyle = "yellow";
        ctx.strokeRect(this.xPos, this.yPos, this.height, this.width);
        ctx.fillStyle = "black";
        ctx.fillRect(this.xPos, this.yPos, this.height, this.width);

        //do the shoot function
        this.shoot();

    }

    shoot(){
        if(this.shootPressed){
            console.log("shoot");
            const speed = 5;
            const delay = 7; //for delay between bullets
            const damage = 1;
            const bulletX = this.xPos + this.width / 2;
            const bulletY = this.yPos;
            this.bulletController.shoot(bulletX, bulletY, speed, damage, delay);
        }
    }

    move(){
        if(this.upPressed){ //if it's true as defined below to be true when keying down
            this.yPos -= this.vel;
        }
        if(this.downPressed){ //if it's true as defined below to be true when keying down
            this.yPos += this.vel;
        }
        if(this.leftPressed){ //if it's true as defined below to be true when keying down
            this.xPos -= this.vel;
        }
        if(this.rightPressed){ //if it's true as defined below to be true when keying down
            this.xPos += this.vel;
        }
    }

    keydown = (e) => {
        if(e.code === "ArrowUp"){
            this.upPressed = true;
        }
        if(e.code === "ArrowDown"){
            this.downPressed = true;
        }
        if(e.code === "ArrowLeft"){
            this.leftPressed = true;
        }
        if(e.code === "ArrowRight"){
            this.rightPressed = true;
        }
        if(e.code === "Space"){
            this.shootPressed = true;
        }
    }

    keyup = (e) => {
        if(e.code === "ArrowUp"){
            this.upPressed = false;
        }
        if(e.code === "ArrowDown"){
            this.downPressed = false;
        }
        if(e.code === "ArrowLeft"){
            this.leftPressed = false;
        }
        if(e.code === "ArrowRight"){
            this.rightPressed = false;
        }
        if(e.code === "Space"){
            this.shootPressed = false;
        }
    }

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
