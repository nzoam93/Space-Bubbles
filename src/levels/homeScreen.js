export default class Homescreen{
    constructor(canvas, ctx, canvasBackground){
        this.canvas = canvas;
        this.ctx = ctx;
        this.canvasBackground = canvasBackground;
        this.setInfo();
    }

    setInfo(){
        this.ctx.font = "25px Fantasy";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.shadowColor = "orange";
        this.ctx.shadowOffsetX = 5;
        this.ctx.shadowOffsetY = 5;
        this.ctx.shadowBlur = 10;
        this.ctx.fillText(`Instructions:`, this.canvas.width / 2, this.canvas.height * 0.1);
        this.ctx.fillText(`1. Complete each level by popping all the bubbles`, this.canvas.width / 2, this.canvas.height * 0.25);
        this.ctx.fillText(`2. Press the left and right arrow keys to move`, this.canvas.width / 2, this.canvas.height * 0.4);
        this.ctx.fillText(`3. Press space to shoot a spike`, this.canvas.width / 2, this.canvas.height * 0.55);
        this.ctx.fillText(`4. Collect coins and finish levels early to earn more points`, this.canvas.width / 2, this.canvas.height * 0.7);
        this.ctx.fillText(`5. Good luck and have fun!`, this.canvas.width / 2, this.canvas.height * 0.85);
    }
}
