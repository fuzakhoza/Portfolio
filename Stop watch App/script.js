let [milisecond,seconds, minutes, hours] = [0,0,0,0];
const display = document.querySelector('.display');
let timer;

function updateTimer(){
    milisecond++;
    if (milisecond == 60) {
        seconds++;
        milisecond = 0;  
    }
    
    if (seconds == 60) {
        seconds =0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }
    let h = hours < 10 ?"0"  + hours: hours;
    let m = minutes < 10 ?"0" + minutes: minutes;
    let s = seconds < 10 ?"0" + seconds: seconds;
    let sm = milisecond < 10 ?"0" + milisecond: milisecond;

    display.innerHTML = h + ":" + m + ":" + s + ":" + sm;
}

function startTimer() {
 timer = setInterval(() => {
    updateTimer()
 }, 10); 
   
}
function stopTimer() {
    clearInterval(timer)
}

function resetTimer() {
    clearInterval(timer);
    [milisecond,seconds, minutes, hours] = [0,0,0,0];
    display.innerHTML = "00:00:00:00";
}