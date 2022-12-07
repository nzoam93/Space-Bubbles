const coin = new Image();
coin.src = "../imgs/coin.png"

const canvas = document.getElementById("game");
//defined outside so it only has to load once

export default class Bonus{
    constructor(ctx, bubbleX, bubbleY){
        this.ctx = ctx;
        this.xPos = bubbleX;
        this.yPos = bubbleY;
        this.width = 20
        this.height = 20
        this.vel = 0;
        this.acc = 0.01;
    }

    draw(){
        this.yPos += this.vel;
        this.vel += this.acc;
        this.ctx.drawImage(coin, this.xPos, this.yPos, this.width, this.height);
    }
}
