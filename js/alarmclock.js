const time=document.querySelector(".time")
const hour=document.querySelectorAll(".controler>select")[0]
const minutes=document.querySelectorAll(".controler>select")[1]
const button=document.querySelector("button")
const ringTone=new Audio("./audio/ringtone.mp3")
let alarm=null
setInterval(()=>{
    let date=new Date()
    time.innerHTML=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    if(alarm==`${date.getHours()}:${date.getMinutes()}`){
        ringTone.play()
        setTimeout(() => {
            ringTone.pause()
            ringTone.currentTime = 0
            alarm=null
        }, 30000);
    }
},100)

for(let i=1;i<25;i++){
    hour.innerHTML+=`<option value="${i}">${i}</option>`
}

for(let i=1;i<61;i++){
    minutes.innerHTML+=`<option value="${i}">${i}</option>`
}

button.addEventListener("click",()=>{
    alarm=`${hour.value}:${minutes.value}`
    console.log(alarm)
    if(alarm.includes("hour")){
        let div = document.createElement("div")
        div.classList.add("message")
        div.innerText = "لطفا ساعت را وارد کنید"
        document.body.appendChild(div)
        setTimeout(() => {
            div.remove()
        }, 2000);
    }else if(alarm.includes("minutes")){
        let div = document.createElement("div")
        div.classList.add("message")
        div.innerText = "لطفا دقیقه را وارد کنید"
        document.body.appendChild(div)
        setTimeout(() => {
            div.remove()
        }, 2000);
    }else {
        let div = document.createElement("div")
        div.classList.add("message")
        div.innerText = "تایمر زنگ تنظیم شد"
        document.body.appendChild(div)
        setTimeout(() => {
            div.remove()
        }, 2000);
    }
})

