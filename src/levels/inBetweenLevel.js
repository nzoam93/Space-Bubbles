export default class InBetweenLevel{
    constructor(ctx){
        this.ctx = ctx;
        this.setInfo();
        // this.waitASec();
    }

    setInfo(){
        let canvas = document.getElementById("game");
        this.ctx.font = "50px Comic Sans MS";
        this.ctx.fillStyle = "red";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Level Complete!", canvas.width/2, canvas.height/2);
    }

    waitASec(){
        setTimeout(() => {
            alert("level complete")
        }, 1000);
    }

}
