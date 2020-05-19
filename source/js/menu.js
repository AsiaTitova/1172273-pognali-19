var body = document.querySelector("body");
var nav = document.querySelector("nav")
  body.classList.remove("no-js");
  nav.classList.remove("main-navigation--cross");
  nav.classList.remove("main-navigation--open");

var menu = document.querySelector(".main-navigation");

var toggle = document.querySelector(".main-navigation__toggler");

toggle.addEventListener("click", function (evt) {
  event.preventDefault();
  menu.classList.toggle("main-navigation--open");
});
