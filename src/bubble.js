import Bonus from "./bonus.js";

export default class Bubble {
    colors = [
        "red",
        "orange",
        "green",
        "blue",
        "purple",
        "brown"
    ];

    constructor(xPos, yPos, xVel, yVel, size, bonus){
        this.xPos = xPos;
        this.yPos = yPos;
        this.xVel = xVel;
        this.yVel = yVel;
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.size = size;
        this.bonus = bonus;
        this.radius = this.sizeDetermination();

    }

    sizeDetermination(){
        if (this.size === 5){
            return 40;
        }
        else if (this.size === 4){
            return 30;
        } else if(this.size === 3) {
            return 20;
        }
        else if(this.size === 2) {
            return 10;
        }
        else if(this.size === 1){
            return 5;
        }
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
        if(this.xPos - this.radius < 0){
            this.xVel = -this.xVel;
        }
        else if (this.xPos > canvas.width - this.radius){
            this.xVel = -this.xVel;
        }
    }


    bonusCall(){
        if(this.size >2){
            let bonus = new Bonus(this);
            bonus.dropCoin();
        }
    }
}
