const captcha = "abcdefghijklmnopqrstuvwxyz0123456789"
const span=document.querySelectorAll("span")
let changeCaptcha=document.querySelector(".change-captcha")
let input = document.querySelector("input")
let test = document.querySelector(".test-button")

const addCaptcha = () => {
    span.forEach(elem =>{
        elem.innerText=captcha[Math.trunc(Math.random()*36)] 
        elem.style.color=`rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
        elem.style.fontSize= "25px"
        elem.style.fontWeight= "bold"
        if(Math.random()<0.5){
            elem.style.transform=`rotate(${Math.random()*45}deg)`
        }else{
            elem.style.transform=`rotate(-${Math.random()*45}deg)`
        }
        
    })
}
const check = () =>{
    console.log(input.value)
    console.log([...span].map(elem => {return elem.textContent}).join(""))
    if (input.value.length===4){
        if([...span].map(elem => {return elem.textContent}).join("")===input.value){
            let div = document.createElement("div")
            div.innerText = "کپچا درست وارد شده است"
            div.style.color ="green"
            test.parentNode.insertBefore(div,test)
            input.value = ""
            setTimeout(()=>{
                div.remove()
            },3000)
            
        }else{
            let div = document.createElement("div")
            div.innerText = "کپچا درست وارد نشده است لطفا دوباره تلاش کنید"
            div.style.color ="red"
            test.parentNode.insertBefore(div,test)
            input.value = ""
            setTimeout(()=>{
                div.remove()
            },3000)
        }     
    }else {
        let div = document.createElement("div")
            div.innerText = "کپچا درست وارد نشده است لطفا دوباره تلاش کنید"
            div.style.color ="red"
            test.parentNode.insertBefore(div,test)
            input.value = ""
            setTimeout(()=>{
                div.remove()
            },3000)
    }
}
window.addEventListener("load", addCaptcha)
changeCaptcha.addEventListener("click", addCaptcha)
test.addEventListener("click", check)













