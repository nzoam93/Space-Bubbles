export default class Timer{
    constructor(startTime = 100){
        this.startTime = startTime;
        this.countdownEl = document.getElementById("timer");
        this.delayTime = 60; //really bad way of getting around the game loop being 60 times faster
    }

    countdown(){
        let minutes = Math.floor(this.startTime / 60);
        let seconds = this.startTime % 60;

        //displays the 0 at the beginning of the seconds
        seconds = seconds < 10 ? "0" + seconds : seconds;

        this.countdownEl.innerHTML = `${minutes}:${seconds}`;
        this.delayTime--;
        if(this.delayTime <= 0){ //bad fix for the game loop being faster
            this.delayTime = 60;
            this.startTime--;
        }
    }
}
