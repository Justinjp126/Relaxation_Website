/**
 * Changes the navbar to sticky and adds
 * classes once the user scrolls down
 * and vice versa
 */
function changeNav() {
  window.addEventListener("scroll", function () {
    var page = document.URL;
    var nav = document.getElementById("nav");
    var home = document.getElementById("home");
    var about = document.getElementById("about");
    var events = document.getElementById("events");
    var sign_up = document.getElementById("sign-up");
    var rw = document.getElementById("icon");
    var period = document.getElementById(".");
    var scrollTop =
      window.pageYOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
    if (scrollTop > 0) {
      nav.classList.add("navActive");
      home.classList.add("navActiveColor");
      about.classList.add("navActiveColor");
      events.classList.add("navActiveColor");
      sign_up.classList.add("navActiveColor");
      rw.classList.add("navActiveColor");
      period.classList.add("navActiveColorPurple");
      if (page.includes("index.html")) {
        home.classList.remove("white");
        rw.classList.remove("white");
        about.classList.remove("light-white");
        events.classList.remove("light-white");
        sign_up.classList.remove("light-white");
      }
    } else {
      nav.classList.remove("navActive");
      home.classList.remove("navActiveColor");
      about.classList.remove("navActiveColor");
      events.classList.remove("navActiveColor");
      sign_up.classList.remove("navActiveColor");
      rw.classList.remove("navActiveColor");
      period.classList.remove("navActiveColorPurple");
      nav.classList.remove("navActive");
      if (page.includes("index.html")) {
        home.classList.add("white");
        rw.classList.add("white");
        about.classList.add("light-white");
        events.classList.add("light-white");
        sign_up.classList.add("light-white");
      }
    }
  });
}

/**
 * Calls function
 */

function main() {
  changeNav();
}

document.addEventListener("DOMContentLoaded", function () {
  main();
});
