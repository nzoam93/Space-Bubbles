import Bubble from "../bubble.js";

export default class Level3{
    constructor(player){
        this.numBubbles = 50; //I don't think I actually need this one
        this.bubbles = [];
        this.player = player;
        this.canvas = document.getElementById("game");
        this.setInfo();
        this.createBubble();
    }

    setInfo(){
        document.getElementById("level").innerHTML = "Level: 3";
        this.player.xPos = this.canvas.width / 2 - 25;
    }

    createBubble(){
        this.bubbles.push(new Bubble(700, this.canvas.height - 50,1,2,5));
        this.bubbles.push(new Bubble(50, this.canvas.height - 50,1,2,2));
    }

    levelComplete(){
        return this.bubbles.length === 0;
    }
}
