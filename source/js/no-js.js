var body = document.querySelector("body");
var nav = document.querySelector("nav")
var togg = document.querySelector(".country-filters__toggler")
  body.classList.remove("no-js");
  nav.classList.remove("main-navigation--cross");
  nav.classList.remove("main-navigation--open");
  togg.classList.remove("toggler--close");
  togg.classList.add("toggler--open");
