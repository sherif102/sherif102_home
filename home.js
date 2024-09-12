import {showToggle} from "./stf/docFunctions.js";

const menu = document.querySelector(".menu");
const list = document.querySelector("ul");

menu.addEventListener('click', function(){showToggle(list)});