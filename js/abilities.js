
let slide=async()=>{
    let addImage=""
    try{
        let data=await fetch("http://localhost:3000/slide")
        let res= await data.json()
        addImage=res.map(elem=>{
            return `<div class="swiper-slide"><img src="${elem.image}" alt="${elem.alt} loading="lazy""></div>`
        })
        document.querySelector(".swiper-wrapper").innerHTML=addImage.join("")
        let swiper = new Swiper(".mySwiper", {
            loop: false, 
            slidesPerView: 1, 
            slidesPerGroup: 1, 
            loopAdditionalSlides: 2,
            autoplay: {
                delay: 2000, 
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            speed: 800,
          });
    }catch(error){
        console.log(error)
    }
}
slide()

