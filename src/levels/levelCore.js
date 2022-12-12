import Bubble from "../bubble.js";

export default class LevelCore{
    constructor(player){
        this.player = player;
        this.bubbles = [];
        this.canvas = document.getElementById("game");
    }

    levelComplete(){
        return this.bubbles.length === 0;
    }
}
