import {showToggle, hide_items, changeAttribute} from "./stf/docFunctions.js";

const menu = document.querySelector(".menu");
const list = document.querySelector("ul");

menu.addEventListener('click', function(){showToggle(list)});