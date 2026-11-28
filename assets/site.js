// XLTab site — mobile navigation.
(function () {
  "use strict";

  var tog = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");
  if (!tog || !navLinks) return;

  var setNav = function (open) {
    navLinks.classList.toggle("open", open);
    tog.setAttribute("aria-expanded", open ? "true" : "false");
  };

  tog.addEventListener("click", function () {
    setNav(!navLinks.classList.contains("open"));
  });
  navLinks.addEventListener("click", function (e) {
    if (e.target.closest("a")) setNav(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setNav(false);
  });
})();
