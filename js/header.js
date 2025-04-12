let bigHeader = () => {
  let li = document.querySelectorAll(".menu>nav>ul>li");

  li.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      let drupdown = elem.querySelector(".drupdown");
      if (drupdown !== null) {
        drupdown.classList.add("active_drupdown");
      }
    });
    elem.addEventListener("mouseleave", () => {
      let drupdown = elem.querySelector(".drupdown");
      if (drupdown !== null) {
        drupdown.classList.remove("active_drupdown");
      }
    });
  });
};
let smallHeader = () => {
  let li = document.querySelectorAll(".menu_small>nav>ul>li");
  li.forEach((elem) => {
    elem.addEventListener("click", (element) => {
      element.stopPropagation();
      let drupdown = elem.querySelector(".drupdown_small");
      let icon = elem.querySelector("svg");
      if (drupdown !== null) {
        drupdown.classList.add("active_drupdown_small");
        if (icon) {
          icon.classList.remove("rotate-left");
          icon.classList.add("rotate-up");
        }
      }
    });
  });

  document.addEventListener("click", (elem) => {
    let dropdown = document.querySelector(".drupdown_small");
    if (elem.target.closest(".menu_small")) {
      dropdown.classList.remove("active_drupdown_small");
      let icon = document.querySelector(".menu_small svg.rotate-up");
      if (icon) {
        icon.classList.remove("rotate-up");
        icon.classList.add("rotate-left");
      }
    }
  });
};
let openMenu = () => {
  let menu = document.querySelector(".menu_small");
  let overlay = document.querySelector(".menu_overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.classList.add("menu_overlay");
    document.body.appendChild(overlay);
  }
  let showMenu = (elem) => {
    let bars = document.querySelector(".bars");
    elem.stopPropagation();
    bars.remove();
    menu.classList.add("active_menu_small");
    overlay.classList.add("active_overlay");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  let bars = document.querySelector(".bars");
  if (bars) {
    bars.addEventListener("click", showMenu);
  }
  document.addEventListener("click", (elem) => {
    if (!elem.target.closest(".menu_small")) {
      menu.classList.remove("active_menu_small");
      overlay.classList.remove("active_overlay");
      let checkBars = document.querySelector(".bars");
      if (!checkBars) {
        let newBars = document.createElement("button");
        newBars.className =
          "bars w-100  border-0 bg-white d-flex align-items-center justify-content-start z-3";
        newBars.innerHTML = `<i class="fa-solid fa-bars icon_bars d-lg-none"></i>`;
        menu.parentNode.insertBefore(newBars, menu);
        newBars.addEventListener("click", showMenu);
      }
    }
  });
};

export { bigHeader, smallHeader, openMenu };
