export default class EndGame{
    constructor(score, ctx){
        this.score = score;
        this.ctx = ctx;
        // this.stringScore = JSON.stringify(score);
        this.setInfo();
    }

    setInfo(){
        let canvas = document.getElementById("game");
        this.ctx.font = "30px Comic Sans MS";
        this.ctx.fillStyle = "red";
        this.ctx.textAlign = "center";
        this.ctx.fillText(`GAME OVER. Your score was ${this.score}`, canvas.width/2, canvas.height/2);
    }



}
