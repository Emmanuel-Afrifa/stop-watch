let timer = document.getElementById('timer');
let playPauseButton = document.getElementById('play-pause');
let resetButton = document.getElementById('reset');

let seconds = 0;
let minutes = 0;
let hours = 0;

let previousSeconds;
let previousMinutes;
let previousHours;

let timeElapsed;
let timerStatus = 'stopped';

playPauseButton.addEventListener('click', timerStats);

function increaseTime(){
    seconds++;

    if (seconds / 60 === 1){
        seconds = 0;
        minutes++;


        if (minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10) {
        previousSeconds = '0'+ seconds;
    }
    else {
        previousSeconds = seconds;
    }

    if (minutes < 10) {
        previousMinutes = '0'+ minutes;
    }
    else {
        previousMinutes = minutes;
    }

    if (hours < 10) {
        previousHours = '0'+ hours;
    }
    else {
        previousHours = hours;
    }
    timer.innerText = `${previousHours}:${previousMinutes}:${previousSeconds}`
}


function timerStats(){
    if (timerStatus === 'stopped'){
        timeElapsed = setInterval(increaseTime, 1000);
        playPauseButton.innerHTML = `<i class="fa fa-pause" id="pause" title="pause"></>`;
        timerStatus = 'play'
    }
    else if (timerStatus === 'play'){
        window.clearInterval(timeElapsed);
        //console.log(timeElapsed)
        playPauseButton.innerHTML = `<i class="fa fa-play" id="play" title="play"></>`;
        timerStatus = 'stopped';
    }
}

resetButton.addEventListener('click', function(){
    window.clearInterval(timeElapsed);

    seconds = 0;
    minutes = 0;
    hours = 0;

    timer.innerText = '00:00:00';
    playPauseButton.innerHTML = `<i class="fa fa-play" id="play"></>`;
})