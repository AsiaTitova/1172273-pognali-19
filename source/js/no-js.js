var body = document.querySelector("body");
var nav = document.querySelector("nav");
var button = document.querySelector(".no-js__toggler");

  body.classList.remove("no-js");
  nav.classList.remove("main-navigation--cross");
  nav.classList.remove("main-navigation--open");

  if (button) {
    button.classList.remove("toggler--close");
    button.classList.add("toggler--open");
  }
