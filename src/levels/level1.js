import Bubble from "../bubble.js";

export default class Level1{
    constructor(player){//player used in other levels, so I just kept it consistent here
        this.numBubbles = 3;
        this.bubbles = [];
        this.setInfo();
        this.createBubble();
    }

    setInfo(){
        //change the background image
        // let canvas = document.getElementById("canvas");
        // canvas.style.backgroundImage = "url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";

        document.getElementById("level").innerHTML = "Level: 1";
    }

    createBubble(){
        let canvas = document.getElementById("game");
        this.bubbles.push(new Bubble(100,canvas.height - 50,1,2,2));
    }

    levelComplete(){
        return this.bubbles.length === 0;
    }


}
