import Bubble from "../bubble.js";

export default class Level4{
    constructor(player){
        this.numBubbles = 50; //I don't think I actually need this one
        this.bubbles = [];
        this.player = player;
        this.setInfo();
        this.createBubble();
        this.createBubbleDynamically(); //makes it much harder. creates bubble every 10 secs
    }

    setInfo(){
        document.getElementById("level").innerHTML = "Level: 4";
        this.player.xPos = 400;
    }

    createBubble(){
        let canvas = document.getElementById("game");
        this.bubbles.push(new Bubble(700, canvas.height - 50,1,2,5));
        this.bubbles.push(new Bubble(50, canvas.height - 50,1,2,2));
        this.bubbles.push(new Bubble(600, canvas.height - 400,-1,2,5));
        this.bubbles.push(new Bubble(600, canvas.height - 50,-1,2,2));
        this.bubbles.push(new Bubble(800, canvas.height - 200,-1,2,4));
    }

    createBubbleDynamically(){
        let canvas = document.getElementById("game");
        setInterval(()=>{
            this.bubbles.push(new Bubble(800, canvas.height - 400,-1,2,5));
        }, 10000)
    }

    levelComplete(){
        return this.bubbles.length === 0;
    }
}
