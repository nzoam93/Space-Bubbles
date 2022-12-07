export default class InBetweenLevel{
    constructor(timerSecs, ctx, canvasBackground){
        this.timerSecs = timerSecs;
        this.ctx = ctx;
        this.canvasBackground = canvasBackground;
        this.setInfo();
    }

    setInfo(){
        let canvas = document.getElementById("game");
        //clear the screen and draws the background
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.ctx.drawImage(this.canvasBackground,0,0);

        //write text
        this.ctx.font = "45px Fantasy";
        this.ctx.fillStyle = "green";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Level Complete!", canvas.width/2, canvas.height * 0.3);
        this.ctx.fillText(`You got ${this.timerSecs * 10} points for finishing ${this.timerSecs} secs early`, canvas.width/2, canvas.height * 0.5)
        this.ctx.fillText(`Prepare yourself for the next level!`, canvas.width/2, canvas.height * 0.7)
    }

}
