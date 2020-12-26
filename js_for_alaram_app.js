
// For running time on the top of page ...
const time_tag = document.getElementById("time");
timeUpdater = () =>{
    let dat = new Date();

    let hrs = dat.getHours();
    let mins = dat.getMinutes();
    let secs = dat.getSeconds();
    let en = 'AM';

    if(hrs > 12){
        hrs = hrs - 12;
        en = 'PM';
    }

    if(hrs<10){
        hrs = '0' + hrs;
    }

    if(mins<10){
        mins = '0' + mins;
    }

    if(secs<10){
        secs = '0' + secs;
    }

    time_tag.innerHTML = hrs + ":" + mins + ":" + secs + " "+en;
}
setInterval(timeUpdater, 1000);
timeUpdater();


// For Alarm itself

const audio = document.getElementById("tone");

const hour = document.querySelector(".hr-input");
const minutes = document.querySelector(".min-input");
const seconds = document.querySelector(".sec-input");
let user_hr,user_min,user_sec;

hour.addEventListener("change",()=>{
    user_hr = hour.value;
});

minutes.addEventListener("change",()=>{
    user_min = minutes.value;
});

seconds.addEventListener("change",()=>{
    user_sec = seconds.value;
});

const setButton = document.querySelector(".set");
const resetButton = document.querySelector(".reset");

let totalSeconds;

resetButton.addEventListener("click",()=>{
    hour.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    user_sec = 0;
    user_min = 0;
    user_hr = 0;
    audio.pause();
});


function playTone(){
    if(minutes.value=='' && seconds.value==''){
       //
    }
    else if(user_min==0 && user_sec==0){
        //
    }

    else{
        audio.play();
    }   
}

setButton.addEventListener("click",()=>{
    if(hour.value == ''){
        user_hr = 0;
    }
    if(minutes.value == ''){
        user_min = 0;
    }
    if(seconds.value == ''){
        user_sec = 0;
    }

    totalSeconds = (user_hr*3600)+(user_min*60)+(user_sec*1);

    let exactSeconds = (totalSeconds*1000);

    // alert(exactSeconds);
    setTimeout(playTone, exactSeconds);
});




