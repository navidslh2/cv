let getCardData=async()=>{
    let jsGuide=document.querySelector(".js_guide")
    try{
        let data=await fetch("http://localhost:3000/card")
        let res=await data.json()
        let creatCard=res.map(elem=>{
            return`<div class="col-12 col-sm-6 col-xl-3 d-flex justify-content-center align-items-center">
            <div class="card mt-5">
              <a href="${elem.link}" target="_blank">
                  <div class="img_card rounded-3">
                      <img src="${elem.img}" alt="${elem.alt}" class="rounded-3">
                  </div>
                  <div class="discription ${elem.className} d-flex flex-column rounded-3">
                      <h2 class="m-auto">${elem.title}</h2>
                      <p>${elem.discription}</p>
                  </div>  
              </a>
            </div>
          </div>`
        
        })
        jsGuide.innerHTML=creatCard.join("")
        card()
    }catch(error){
        console.log(error)
    }
}
let card=()=>{
    let discription=[...document.querySelectorAll(".discription")]
    let option={
        root:null,
        rootMargin:"0px",
        threshold:0.1
    }
    let observer=new IntersectionObserver((entiers)=>{
        entiers.forEach(elem=>{
            if(elem.isIntersecting){
                elem.target.classList.add("active_discription")
            }else{
                elem.target.classList.remove("active_discription")
            }
        })
    },option)
    discription.forEach(elem=>{
        observer.observe(elem)
    })
    
}

export {getCardData,card}
