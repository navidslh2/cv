import slide from "./abilities.js";
import "./bootstarp.js"
import { card, getCardData } from "./card.js";
import "./fontawesome/all.js"
import { bigHeader, smallHeader } from "./header.js";

import nameAnimation from "./nameAnimation.js";
import { copyCode, showCode } from "./project.js";


slide()
window.showCode=showCode
window.copyCode=copyCode
getCardData()
card()
nameAnimation()
bigHeader()
smallHeader()



