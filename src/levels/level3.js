import Bubble from "../bubble.js";

export default class Level3{
    constructor(player){
        this.numBubbles = 50; //I don't think I actually need this one
        this.bubbles = [];
        this.player = player;
        this.setInfo();
        this.createBubble();
    }

    setInfo(){
        document.getElementById("level").innerHTML = "Level: 3";
        this.player.xPos = 400;
    }

    createBubble(){
        let canvas = document.getElementById("game");
        this.bubbles.push(new Bubble(700, canvas.height - 50,1,2,5));
        this.bubbles.push(new Bubble(50, canvas.height - 50,1,2,2));
    }

    levelComplete(){
        return this.bubbles.length === 0;
    }
}
