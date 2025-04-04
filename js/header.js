let bigHeader=()=>{
    let li=document.querySelectorAll(".menu>nav>ul>li")
    
    li.forEach(elem=>{
        elem.addEventListener("mouseenter",()=>{
            let drupdown=elem.querySelector(".drupdown")
            if(drupdown!==null){
                drupdown.classList.add("active_drupdown")
            }
        })
        elem.addEventListener("mouseleave",()=>{
            let drupdown=elem.querySelector(".drupdown")
            if(drupdown!==null){
                drupdown.classList.remove("active_drupdown")
            }
        })
    })

}
let smallHeader=()=>{
    let li=document.querySelectorAll(".menu_small>nav>ul>li")
    li.forEach(elem=>{
        
        elem.addEventListener("click",(element)=>{
            element.stopPropagation()
            let drupdown=elem.querySelector(".drupdown_small")
            let icon=elem.querySelector("svg")
            if(drupdown!==null){
                drupdown.classList.add("active_drupdown_small")
                console.log(elem.innerHTML);
                if(icon){
                    icon.classList.toggle("rotate-down");
                    icon.classList.toggle("rotate-up");
                }
                
            }
        })
        
    })
    // document.addEventListener("click", (e) => {
    //     let dropdown = document.querySelector(".drupdown_small");
    //     if (dropdown) {
    //         dropdown.classList.remove("active_drupdown_small");
    //     }

    // })
    document.addEventListener("click",(elem)=>{
        let drupdown=document.querySelector(".drupdown_small")
        let icon=document.querySelector(".menu_small svg")
        drupdown.classList.remove("active_drupdown_small")
        icon.classList.remove("rotate-up");
        icon.classList.add("rotate-down");
        
        
    })
}

export {bigHeader, smallHeader}
