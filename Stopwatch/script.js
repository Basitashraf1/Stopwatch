const display=document.querySelector("#display")
const play=document.querySelector("#play")
const reset=document.querySelector("#reset")
const pause=document.querySelector("#pause")
const lap=document.querySelector("#lap")
let [hours,minutes,seconds]=[0,0,0]
let timer=null;
const stopwatch=()=>{
    seconds++
    if(seconds==60){
        seconds=0
        minutes++
        if(minutes==60){
            minutes=0
            hours++
        }
    }
    let s=seconds
    let h=hours
    let m=minutes
    if(seconds<10){
        s="0"+seconds
    }
    if(minutes<10){
        m="0"+ minutes
    }
    if(hours<10){
       h="0"+hours
    }
    display.innerText=h+":"+m+":"+s
}
const start=()=>{
    if(timer!==null){
        clearInterval(timer)
        
    }
    timer=setInterval(stopwatch,1000)
}
play.addEventListener("click",start)
const stop=()=>{
    clearInterval(timer)
    lap.innerHTML=display.innerHTML
}
pause.addEventListener("click",stop)
const reseted=()=>{
    clearInterval(timer)
    seconds=0
    minutes=0
    hours=0
   display.innerHTML="00:00:00"
   lap.innerHTML="0"
   
}
reset.addEventListener("click",reseted)