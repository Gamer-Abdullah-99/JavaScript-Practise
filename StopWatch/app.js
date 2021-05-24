var hrs = 0
var min = 0
var sec = 0
var msec = 0
var hours = document.getElementById('hrs')
var minutes = document.getElementById('min')
var seconds = document.getElementById('sec')
var miliseconds = document.getElementById('msec')
var interval;
var lapCount = 1;

function start(){
    interval =  setInterval(function() {
        msec++
        miliseconds.innerHTML = msec
        if(msec >= 99){
            sec++
            seconds.innerHTML = sec
            msec = 0
        
        }
        else if(sec >= 59 ){
            min++
            minutes.innerHTML = min
            sec = 0
        }
        else if (min >= 59){
            hrs++
            hours.innerHTML = hrs
            min = 0
        }
    },10)
    document.getElementById('str').disabled = true  
}

function pause(){
    clearInterval(interval)
    document.getElementById('str').disabled = false
}

function reset(){
    minutes.innerHTML = min
    seconds.innerHTML = sec
    miliseconds.innerHTML = msec
    hrs = 0
    min = 0;
    sec = 0
    msec = 0
    document.getElementById('str').disabled = false
}

function lap() {

    document.getElementById('lap').innerHTML += '<div class ="laps"><h1 id="lap-no">0</h1><h1>></h1><h1 id="lap-hrs">0</h1><h1 id="lap-min">0</h1><h1 id="lap-sec">0</h1><h1 id="lap-msec">0</h1></div>'

    document.getElementById('lap-no').innerHTML = lapCount
    lapCount++
    document.getElementById('lap-hrs').innerHTML = document.getElementById('hrs').innerHTML
    document.getElementById('lap-min').innerHTML = document.getElementById('min').innerHTML
    document.getElementById('lap-sec').innerHTML = document.getElementById('sec').innerHTML
    document.getElementById('lap-msec').innerHTML = document.getElementById('msec').innerHTML

    document.getElementById('lap-no').id = "a"
    document.getElementById('lap-hrs').id = "a"
    document.getElementById('lap-min').id = "a"
    document.getElementById('lap-sec').id = "a"
    document.getElementById('lap-msec').id = "a"

}