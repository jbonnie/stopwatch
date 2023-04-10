let minute = 0;
let second = 0;
let getMinute = document.querySelector('.minute');
let getSecond = document.querySelector('.second');
let btnStart = document.querySelector(".btn-start");
let btnStop = document.querySelector(".btn-stop");
let btnReset = document.querySelector(".btn-reset");
let interval;
let alreadyStart = false;

btnStart.addEventListener('click', ()=>
{
    if(!alreadyStart)
    {
        interval = setInterval(startTimer, 1000);
        alreadyStart = true;
    }
})
btnStop.addEventListener('click', ()=>
{
    clearInterval(interval);
    alreadyStart = false;
})
btnReset.addEventListener('click', ()=>
{
    second = 0;
    minute = 0;
    getSecond.innerHTML = '00';
    getMinute.innerHTML = '00';
})

function startTimer(){
    second++;
    if(second < 10)
        getSecond.innerHTML = '0' + second;
    if(second >= 10)
        getSecond.innerHTML = second;
    if(second > 59)
    {
        second = 0;
        getSecond.innerHTML = '00';
        minute++;
    }
    if(minute < 10)
        getMinute.innerHTML = '0' + minute;
    if(minute >= 10)
        getMinute.innerHTML = minute;
}