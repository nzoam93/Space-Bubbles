import Bubble from "../bubble.js";
import BulletController from "../bulletController.js";

// let bulletController = new BulletController(

export default class Level1{
    constructor(){
        this.numBubbles = 2;
        this.bubbles = [];
        this.setBackgroundImage();
        this.createBubble();
        this.placeBubbles();
    }

    setBackgroundImage(){
        //change the background image
        // let canvas = document.getElementById("canvas");
        // canvas.style.backgroundImage = "url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";

        document.getElementById("level").innerHTML = "Level 1"
    }

    createBubble(){
        let canvas = document.getElementById("canvas");
        for(let i = 0; i < this.numBubbles; i++){
            let bubble = document.createElement("div")
            bubble.setAttribute("id", `bubble${i+1}`)
            bubble.classList.add("smallBubble");
            canvas.appendChild(bubble);
            // let bubbleID = document.getElementById(`bubble${i+1}`)
            this.bubbles.push(new Bubble(bubble, 5, 5)); //storing bubbles
        }
    }

    placeBubbles(){
        // let bubble1 = document.getElementById("bubble1")

        //getting the position of the bottom so I can reference that to place the bubble
        let bottomPart = document.getElementById("bottomPart");
        let bottomRect = bottomPart.getBoundingClientRect();
        let bottomHeight = bottomRect.top;


        let bubble1 = this.bubbles[0]; //bubble instance
        console.log(bubble1)
        bubble1.xPos = 150;
        bubble1.yPos = bottomHeight - 100;

        // let bubble2 = document.getElementById("bubble2")
        let bubble2 = this.bubbles[1];
        bubble2.xPos = 300;
        bubble2.yPos = bottomHeight - 100;


    }
}
