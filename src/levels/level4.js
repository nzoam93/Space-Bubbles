import Bubble from "../bubble.js";

export default class Level4{
    constructor(player){
        this.numBubbles = 50; //I don't think I actually need this one
        this.bubbles = [];
        this.player = player;
        this.canvas = document.getElementById("game");
        this.setInfo();
        this.createBubble();
        this.createBubbleDynamically(); //makes it much harder. creates bubble every 10 secs
    }

    setInfo(){
        document.getElementById("level").innerHTML = "Level: 4";
        this.player.xPos = this.canvas.width / 2 - 25;
    }

    createBubble(){
        this.bubbles.push(new Bubble(700, this.canvas.height - 50,1,2,5));
        this.bubbles.push(new Bubble(50, this.canvas.height - 50,1,2,2));
        this.bubbles.push(new Bubble(600, this.canvas.height - 400,-1,2,5));
        this.bubbles.push(new Bubble(600, this.canvas.height - 50,-1,2,2));
        this.bubbles.push(new Bubble(800, this.canvas.height - 200,-1,2,4));
    }

    createBubbleDynamically(){
        setInterval(()=>{
            this.bubbles.push(new Bubble(800, this.canvas.height - 400,-1,2,5));
        }, 10000)
    }

    levelComplete(){
        return this.bubbles.length === 0;
    }
}
