/*start show code */
let  codebox = document.getElementsByClassName('.code_box');
let  codeContent = document.getElementById('code-content');
let btnCopy = document.getElementById('btnCopy');
let btnGit = document.getElementById('btnGit');

function showCode(project) {
    let codes = {
        "project1" : `const time=document.querySelector(".time")
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
    if(alarm.includes("hour") || alarm.includes("hour") ){
        return alert("select valid time")
    }
})`,
        "project2" : [`       import os 
                from datetime import datetime
                def creat_datefile(file_path):
                    year = datetime.now().year
                    month = datetime.now().month
                    day = datetime.now().day
                    hour = datetime.now().hour
                    creat_file = os.path.join(file_path, str(year), str(month), str(day), str(hour))
                    if not os.path.exists(creat_file):
                        os.makedirs(creat_file)
                    return creat_file

                def log_event(creat_file, message):
                    log_file_path = os.path.join(creat_file,'log.txt')
                    with open(log_file_path, 'a') as log_file:
                        log_file.write(f'{datetime.now()}:{message}')

                file_path = os.getcwd()
                log_directory = creat_datefile(file_path)
                log_event(log_directory, 'Hello')`,'https://github.com/navidslh2/save-change'],
        "project3" : `789`
        
    } ;
    codeContent.innerText = ""
    codeContent.classList.add("active_codebox");
    codeContent.innerText = codes[project][0]  ;
    btnCopy.classList.remove('disabled')
    btnGit.classList.remove('disabled')
    btnGit.href = codes[project][1]
}

function copyCode() {
    let code = document.getElementById('code-content').innerText;
    navigator.clipboard.writeText(code);
    alert('کد کپی شد')
}
/*finish show code */