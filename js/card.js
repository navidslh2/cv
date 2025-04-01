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

export default card
console.log()