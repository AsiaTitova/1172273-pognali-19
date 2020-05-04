var popup = document.querySelectorAll(".traveler-search__fieldset");
var toggler = document.querySelectorAll(".traveler-search__toggler");

var x = function (popup, toggler) {
  toggler.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("traveler-search__fieldset--open");
  });
}

for (i = 0; i < popup.length; i++) {
  x(popup[i], toggler[i]);
}
