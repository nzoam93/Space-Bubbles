export default class Bubble {
    colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "white",
        "brown"
    ];

    constructor(xPos, yPos){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = 10;
        this.color = "green"
        this.xVel = 1;
        this.yVel = 2;
        // this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }


    draw(ctx){
        ctx.fillStyle = this.color;
        this.hitGround(ctx);
        this.hitWall(ctx);
        this.xPos += this.xVel;
        this.yPos += this.yVel;
        ctx.beginPath();
        ctx.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        // ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
    }

    hitGround(ctx){
        let canvas = document.getElementById("game");
        if(this.yPos > canvas.height - this.radius){
            this.yVel = -this.yVel;
        }
        else if(this.yPos < canvas.height - 200){
            this.yVel = -this.yVel;
        }
    }

    hitWall(ctx){
        let canvas = document.getElementById("game");
        if(this.xPos < 0){
            this.xVel = -this.xVel;
        }
        else if (this.xPos > canvas.width - this.radius){
            this.xVel = -this.xVel;
        }
    }
}
