export default class Bubble {
    colors = [
        "red",
        "orange",
        "green",
        "blue",
        "white",
        "turquoise"
    ];

    constructor(xPos, yPos, xVel, yVel, size){
        //positioning stuff
        this.xPos = xPos;
        this.yPos = yPos;
        this.xVel = xVel;
        this.yVel = yVel;
        this.acc = 0.03;
        this.maxHeightReached = false;

        //misc stuff
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.size = size;
        this.bonuses = [];
        this.radius = this.sizeDetermination();
        this.heightAllowed = this.heightDetermination();
        this.delay = 60; //used for when a bubble spawns to allow it to go up for one second
        this.canvas = document.getElementById("game");
    }



    sizeDetermination(){
        if(this.size === 1){
            return 5; //smallest bubble
        }
        else {
            return (this.size - 1) * 10; //bigger bubbles
        }
    }

    heightDetermination(){
        if(this.size === 1){
            return 110;
        }
        else {
            return 110 + this.size * 50;
        }
    }


    draw(ctx){
        ctx.fillStyle = this.color;
        this.hitWall(ctx);
        this.hitGround(ctx);
        this.hitUpperLimit(ctx);
        this.xPos += this.xVel;
        this.yPos += this.yVel;

        //only do the acceleration if it has reached the max height
        if(this.yPos < (this.canvas.height - this.heightAllowed + 110)){ //offset so gravity can start to do something first
            this.maxHeightReached = true;
        }
        if(this.maxHeightReached){
            this.yVel += this.acc;
        }
        ctx.beginPath();
        ctx.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        // ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
    }

    hitWall(){
        if(this.xPos - this.radius < 0){
            this.xVel = -this.xVel;
        }
        else if (this.xPos > this.canvas.width - this.radius){
            this.xVel = -this.xVel;
        }
    }

    hitGround(){
        if(this.yPos > this.canvas.height - this.radius){
            this.yVel = -this.yVel;
        }
    }

    hitUpperLimit(){
        if(this.delay > 0){
            this.delay--;
        }
        //first conditional checks to see if it's too high
        //second conditional checks to see if it's going up
        //third conditional makes sure it waits a second before causing it to come back down

        if((this.yPos < this.canvas.height - this.heightAllowed) && (this.yVel < 0) && (this.delay <= 0)){
            this.yVel = 0;
            // this.yVel = -this.yVel //this is the previous logic (without gravity)
        }
    }

    hitTop(){
        return this.yPos < this.radius //if any part if it touches the top
    }
}
