    import Bubble from "../bubble.js";


    export default class Level2{
        constructor(player){
            this.numBubbles = 18;
            this.bubbles = [];
            this.player = player;
            this.setInfo();
            this.createBubble();
        }

        setInfo(){
            document.getElementById("level").innerHTML = "Level: 2";
            this.player.xPos = 300;
        }

        createBubble(){
            let canvas = document.getElementById("game");
            this.bubbles.push(new Bubble(50,canvas.height - 50,1,2,4));
            this.bubbles.push(new Bubble(100,canvas.height - 50,1,2,2));
        }

        levelComplete(){
            return this.bubbles.length === 0;
        }
    }
