// menu

var close = document.querySelector(".close-btn")
var open = document.querySelector(".menu-toggle");
var menu = document.querySelector(".menuLink");


function toggleMenu () {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    open.classList.remove("hidden");
    close.classList.add("hidden");
  } else {
    menu.classList.add("showMenu");
    open.classList.add("hidden");
    close.classList.remove("hidden")
  }
}