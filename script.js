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

        localStorage.setItem('action', String(action.value))
        localStorage.setItem('stop', String(stop.value))
        localStorage.setItem('section', String(section.value))

        document.getElementById('config').style.setProperty('config', 'none', 'important')
        document.getElementById('timer').style.setProperty('display', 'block', 'important')

    }
}

function momentAction() {

    let sections_value = localStorage.getItem('section')

    if(localStorage.getItem(section) != '1') {
        document.getElementById('title_section').innerHTML = sections_value + 'sections reimaning'
    } else {
        document.getElementById('title_section').innerHTML = sections_value + 'section reimaning'
    }

    let title = document.getElementById('title')
    title.innerHTML = 'ACTION'
    title.style.fontSize = '25pt'
    title.style.fontWeight = 'bold'
    title.style.setProperty('color', '#28a745', 'important')

    min = Number(localStorage.getItem('action'))

    min = min - 1
    seconds = 59

    document.getElementById('minutes_ok').innerHTML = min
    document.getElementById('seconds_ok').innerHTML = seconds

    var min_interval = setInterval(minTimer, 60000)
    var sec_interval = setInterval(secTimer, 1000)

    function minTimer() {
        min = min - 1
        document.getElementById('minutes_ok').innerHTML = min

    }

    function secTimer() {
        seconds = seconds - 1
        document.getElementById('seconds_ok').innerHTML = seconds

        if(seconds <= 0) {
            if(min <= 0) {
                clearInterval(min_interval)
                clearInterval(sec_interval)

                bell.play();

                momentStop()
            }
            seconds = 60
        }
    }
}

function momentStop() {
    let title = document.getElementById('title')
    title.innerHTML = "STOP"
    title.style.fontSize = '25pt'
    title.style.fontWeight = 'bold'
    title.style.setProperty('color', '#dc3545', 'important')

    
    min_stop = Number(localStorage.getItem('stop'))

    min_stop = min_stop - 1
    seconds = 59

    document.getElementById('minutes_ok').innerHTML = min
    document.getElementById('seconds_ok').innerHTML = seconds

    var min_interval = setInterval(minTimer, 60000)
    var sec_interval = setInterval(secTimer, 1000)

    function minTimer() {
        min_stop = min_stop - 1
        document.getElementById('minutes_ok').innerHTML = min_stop
    }

    function secTimer() {
        seconds = seconds - 1
        document.getElementById('seconds_ok').innerHTML = seconds

        if(seconds <= 0) {
            if(min_stop <= 0) {
                ses = Number(localStorage.getItem('sections'))
                ses = ses - 1
                localStorage.setItem('sections', String(ses))

                clearInterval(min_interval)
                clearInterval(sec_interval)

                if(ses <=0) {
                    final.play()
                    localStorage.clear()

                    document.getElementById('config').style.setProperty('config', 'none', 'important')
                    document.getElementById('timer').style.setProperty('display', 'block', 'important')
                    document.getElementById('final').style.setProperty('display', 'block', 'important')


                } else {
                    volta.play();
                    momentAction();
                }

                volta.play();

            }
            seconds = 60
        }
    }
}