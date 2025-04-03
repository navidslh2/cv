let nameAnimation=()=>{
    
    let name=document.querySelectorAll(".introduce")
    let myName=[..."نوید صالحی هستم"]
    let myJob=[..."برنامه نویس وب"]
    let option={
        root:null,
        rootMargin:"0px",
        threshold:0.5
    }
    setTimeout(()=>{
        name.forEach(elem=>{
            let index=0
            let type=()=>{
                if(index < myName.length){
                    elem.firstElementChild.innerHTML+=myName[index]
                    index++
                    setTimeout(type,100)
                }else if(index < (myName.length + myJob.length)){
                    elem.firstElementChild.nextElementSibling.innerHTML+=myJob[index-myName.length]
                    index++
                    setTimeout(type,100)
                } 
                }    
            type()
        })
        
    },1500)  
    
     
}

export default nameAnimation