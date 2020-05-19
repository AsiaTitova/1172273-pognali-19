var form = document.querySelector(".personal-account__form");
var bgtextarea = form.querySelector("[name=bgtextarea]");
var actiontextarea = form.querySelector("[name=actiontextarea]");
var action = document.querySelectorAll(".action__wrap--textarea");
var submit = document.querySelector(".plan-steps__submit");

var x = function(action) {
  form.addEventListener("submit", function (evt) {
    if (!actiontextarea.value || !bgtextarea.value) {
      evt.preventDefault();
      action.classList.remove("action__wrap--error");
      form.offsetWidth = form.offsetWidth;
      action.classList.add("action__wrap--error");
    }
  });
}

for (i = 0; i < action.length; i++) {
  x(action[i]);
}
