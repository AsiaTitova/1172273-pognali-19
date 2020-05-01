var filters = document.querySelector(".country-filters__show");
var world = document.querySelector(".country-filters__part-world")
var toggler = document.querySelector(".country-filters__toggler");
var open = document.querySelector(".toggler__text--open");
var close = document.querySelector(".toggler__text--close");

toggler.addEventListener("click", function (evt) {
  event.preventDefault();
  toggler.classList.toggle("toggler--open");
  toggler.classList.toggle("toggler--close");
  filters.classList.toggle("country-filters__show--close");
  filters.classList.toggle("country-filters__show--open");
  world.classList.toggle("country-filters__part-world--close");
  open.classList.toggle("toggler__text--show");
  close.classList.toggle("toggler__text--show");
});
