function handleLargDropdownHover(parentSelector, dropdownClass, activeClass) {
  const elements = document.querySelectorAll(parentSelector);
  elements.forEach((elem) => {
    const dropdown = elem.querySelector(dropdownClass);
    if (dropdown) {
      elem.addEventListener("mouseenter", () => {
        dropdown.classList.add(activeClass);
      });
      elem.addEventListener("mouseleave", () => {
        dropdown.classList.remove(activeClass);
      });
    }
  });
}

let bigHeader = () =>{
  handleLargDropdownHover(".menu>nav>ul li", ".drupdown", "active_drupdown");
  handleLargDropdownHover(".submenu", ".drupdown-left", "active-drupdown-left");
}


let smallHeader = () => {
  const barsBtn = document.querySelector(".bars");
    const menu = document.querySelector(".menu_small");
  
    let overlay = document.querySelector(".menu_overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.classList.add("menu_overlay");
      document.body.appendChild(overlay);
    }
  
    barsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.add("active_menu_small");
      overlay.classList.add("active_overlay");
      window.scrollTo({
         top: 0, 
         behavior: "smooth" 
    });
    });
  
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".menu_small")) {
        menu.classList.remove("active_menu_small");
        overlay.classList.remove("active_overlay");
        closeAllDropdowns();
      }
    });
  
    const li = document.querySelector(".menu_small>nav>ul>li:nth-child(3)");
    const dropdownSmall = li.querySelector(".drupdown_small");
  
    li.addEventListener("click", (e) => {
      e.stopPropagation();

      if (e.target.tagName === "A" && e.target.getAttribute("href") === "#") {
        e.preventDefault();
      }
  
      const isOpen = dropdownSmall.classList.contains("active_drupdown_small");
      closeAllDropdowns();
  
      if (!isOpen) {
        dropdownSmall.classList.add("active_drupdown_small");
        
        li.firstElementChild.classList.remove("rotate-left");
        li.firstElementChild.classList.add("rotate-up");
      }
    });
  
    const secondLevelToggle = document.querySelector(".drupdown_second_toggle");
    const dropdownSecond = secondLevelToggle.querySelector(".drupdown-second");
  
    secondLevelToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      if (e.target.tagName === "A" && e.target.getAttribute("href")=== "#") {
        e.preventDefault();
      }
      const isOpen = dropdownSecond.classList.contains("active_drupdown_small");
  
      dropdownSecond.classList.remove("active_drupdown_small");
      secondLevelToggle.firstElementChild.classList.remove("rotate-up");
      secondLevelToggle.firstElementChild.classList.add("rotate-left");
  
      if (!isOpen) {
        dropdownSecond.classList.add("active_drupdown_small");
        secondLevelToggle.firstElementChild.classList.remove("rotate-left");
        secondLevelToggle.firstElementChild.classList.add("rotate-up");
      }
    });
  
    function closeAllDropdowns() {
      document.querySelectorAll(".drupdown_small, .drupdown-second").forEach(elem => {
        elem.classList.remove("active_drupdown_small");
        elem.classList.remove("active_drupdown_second");
        elem.previousElementSibling.classList.remove("rotate-up")
        elem.previousElementSibling.classList.add("rotate-left")
      });
    }
}

export { bigHeader, smallHeader };
