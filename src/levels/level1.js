import Bubble from "../bubble.js";

export default class Level1{
    constructor(player){//player used in other levels, so I just kept it consistent here
        this.player = player;
        this.bubbles = [];
        this.canvas = document.getElementById("game");

        this.setInfo();
        this.createBubble();
    }

    setInfo(){
        document.getElementById("level").innerHTML = "Level: 1";
        this.player.xPos = this.canvas.width / 2 - 25;
    }

    createBubble(){
        this.bubbles.push(new Bubble(100,this.canvas.height - 50,1,2,2));
    }

    levelComplete(){
        return this.bubbles.length === 0;
    }
}
