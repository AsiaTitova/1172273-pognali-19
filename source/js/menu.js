var menu = document.querySelector(".main-navigation");

var toggle = document.querySelector(".main-navigation__toggler");

toggle.addEventListener("click", function (evt) {
  event.preventDefault();
  menu.classList.toggle("main-navigation--open");
});
