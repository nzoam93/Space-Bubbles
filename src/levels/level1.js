//I want the level to
    //populate the bubbles based on the numBubbles
    //place the bubbles
    //go to the next level when complete



import Bubble from "../bubble.js";

// let spikeController = new spikeController(

export default class Level1{
    constructor(){
        this.numBubbles = 2;
        this.bubbles = [];
        this.setInfo();
        this.createBubble();
    }

    setInfo(){
        //change the background image
        // let canvas = document.getElementById("canvas");
        // canvas.style.backgroundImage = "url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";

        document.getElementById("level").innerHTML = "Level 1"
    }

    createBubble(){
        let canvas = document.getElementById("game");
        this.bubbles.push(new Bubble(0,canvas.height - 50,1,2,4));
        this.bubbles.push(new Bubble(100,canvas.height - 50,1,2,2));

        // for(let i = 0; i < this.numBubbles; i++){
        //     this.bubbles.push(new Bubble(0,canvas.height - 50,1,2,4));

        //     bubble.setAttribute("id", `bubble${i+1}`)
        //     bubble.classList.add("smallBubble");
        //     canvas.appendChild(bubble);
        //     // let bubbleID = document.getElementById(`bubble${i+1}`)
        //     this.bubbles.push(new Bubble(bubble, 5, 5)); //storing bubbles
        // }
    }


}
