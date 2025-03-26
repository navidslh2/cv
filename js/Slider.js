const Slider=async()=>{
    try{
        let data=await fetch("http://localhost:3000/slider")
        let res=await data.json()
        let slider=res.map(elem=>{
            return `<div class="swiper-slide">
                        <img src="${elem.image}" alt="${elem.alt}">
                    </div>` 
        })
        document.querySelector(".swiper-wrapper").innerHTML=slider.join("")
    }catch(error){
        console.log(error)
    }
    
}

export default Slider

