var popup = document.querySelectorAll(".traveler-search__fieldset");

var y = function (popup) {
  if (popup) {
    popup.classList.remove("traveler-search__fieldset--open");
  }
}

var toggler = document.querySelectorAll(".traveler-search__toggler");

var x = function (popup, toggler) {
  toggler.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("traveler-search__fieldset--open");
  });
}

for (i = 0; i < popup.length; i++) {
  y(popup[i]);
  x(popup[i], toggler[i]);
}
