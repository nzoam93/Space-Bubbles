const baseball = new Image();
baseball.src = "./imgs/baseballSprite.png"

export default class Baseball {
      constructor(xPos, yPos){
        this.xPos = xPos;
        this.yPos = yPos;
        this.xVel = 1;
        this.yVel = 2;
        this.baseballWidth = 32;
        this.baseballHeight = 32;
        this.width = this.baseballWidth * 2;
        this.height = this.baseballHeight * 2;

        this.frame = 0;
        this.gameFrame = 0
        // this.staggerFrames = 7;
    }


    draw(ctx){
        ctx.drawImage(baseball, 0, this.frame * this.baseballHeight, this.baseballWidth, this.baseballHeight, this.xPos, this.yPos, this.width, this.height)
        //object, xPosStart, yPosStart, xPosEnd, yPosEnd, boardXPos, boardYPos, actualWidth, actualHeight

    }

    update(){
        this.gameFrame ++;
        if(this.gameFrame % 50 === 0){ //slows down the iteration
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }

        // bouncing
    }
}
