var menu = document.querySelector(".main-navigation");

var x = function (menu) {
  if (menu) {
  menu.classList.remove("main-navigation--open");
  menu.classList.remove("main-navigation--cross");
  }
}

var toggle = document.querySelector(".main-navigation__toggler");

toggle.addEventListener("click", function (evt) {
  event.preventDefault();
  menu.classList.toggle("main-navigation--open");
  menu.classList.toggle("main-navigation--absolute");
});

document.onscroll = function(){
  var fix = document.querySelector("#scroll").getBoundingClientRect().top;
  menu.classList.add("main-navigation--fixed", fix <= window.innerHeight
   );
}
