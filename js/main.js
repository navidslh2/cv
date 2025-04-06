import slide from "./abilities.js";
import "./bootstarp.js"
import { card, getCardData } from "./card.js";
import "./fontawesome/all.js"
import { bigHeader, openMenu, smallHeader } from "./header.js";

import nameAnimation from "./nameAnimation.js";
import { copyCode, showCode } from "./project.js";

document.addEventListener("DOMContentLoaded",()=>{
    slide()
    window.showCode=showCode
    window.copyCode=copyCode
    getCardData()
    card()
    nameAnimation()
    bigHeader()
    smallHeader()
    openMenu()
})





