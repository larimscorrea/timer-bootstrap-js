let action = document.getElementById('action')
let stop = document.getElementById('stop')
let sections = document.getElementById('section')
let seconds

var bell = new Audio("./audio/bell.mp3")
var back = new Audio("./audio/back-mp3")
var final = new Audio("./audio/final.mp3")

var lofi = document.getElementById('lofi')
var stoped = document.getElementById('stoped')
var play = document.getElementById('play')

function start() {
    if(action.value == 0) {
        document.getElementById('error_action').innerHTML = 'Add the minutes'
        action.focus()
    } else if (stop.value == 0) {
        document.getElementById('stop_action').innerHTML = 'Add the stops'
        stop.focus()
    } else if (stop.value == 0) {
        document.getElementById('section_action').innerHTML = 'Add the sections'
        section.focus()
    } else {
        lofi.play()
        stop.style.setProperty('display', 'block', 'important')
    }
}