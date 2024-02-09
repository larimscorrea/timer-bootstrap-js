let action = document.getElementById('action')
let stop = document.getElementById('stop')
let sections = document.getElementById('section')
//let seconds;

var bell = new Audio("./audio/bell.mp3")
var back = new Audio("./audio/back-mp3")
var final = new Audio("./audio/final.mp3")

var lofi = document.getElementById('lofi')
var stoped = document.getElementById('stoped')
var play = document.getElementById('play')

let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch() {
    seconds++;
    if(seconds == 60) {
        seconds = 0;
        minutes++; 
        if(minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;



    displayTime.innerHTML = hours + ":" + minutes + ":" + seconds; 
}

function watchStart(){
    if(timer !== null) 
    {
        clearInterval(timer);
    }
   timer = setInterval(stopwatch, 1000);
} 