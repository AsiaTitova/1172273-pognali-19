var filters = document.querySelector(".country-filters__container");

if (filters) {
  filters.classList.add("country-filters__container--close");
}

var togglers = document.querySelector(".country-filters__toggler");

togglers.addEventListener("click", function (evt) {
  event.preventDefault();
  togglers.classList.toggle("toggler--open");
  togglers.classList.toggle("toggler--close");
  filters.classList.toggle("country-filters__container--close");
});
