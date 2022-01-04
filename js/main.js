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
 * Calendar popups
 */
function calenderSweetAlert() {
  if (document.URL.includes("events.html")) {
    var buttons = document.getElementsByClassName("calendar__button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function (evnt) {
        var button = evnt.originalTarget;
        var info = button.getAttribute("info");
        var title = button.innerHTML;
        Swal.fire({
          title: title,
          text: info,
          iconColor: "#19424e",
          color: "#19424e",
          background: "#f3faff",
          icon: "info",
          confirmButtonText: "OK",
          confirmButtonColor: "#19424e",
        });
      });
    }
  }
}

/**
 * Checks if contact form info is valid
 * and uses Sweet Alert for output
 */
function checkValidContact() {
  var name = document.getElementById("nameContact").value;
  var email = document.getElementById("emailContact").value;
  var message = document.getElementById("messageContact").value;

  if (name !== "" && validateEmail(email) && message !== "") {
    Swal.fire({
      title: "Success!",
      text: "We will respond to your message as soon as possible!",
      icon: "success",
      confirmButtonText: "Continue",
      iconColor: "#19424e",
      color: "#19424e",
      background: "#f3faff",
      confirmButtonColor: "#19424e",
    }).then((result) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      location.reload();
    });
  } else {
    if (name == "") {
      Swal.fire({
        title: "Error!",
        text: "Please fill out your name",
        icon: "error",
        confirmButtonText: "Continue",
        confirmButtonColor: "#19424e",
        iconColor: "#19424e",
        color: "#19424e",
        background: "#f3faff",
      });
    } else if (message == "") {
      Swal.fire({
        title: "Error!",
        text: "Please fill out your message",
        icon: "error",
        confirmButtonText: "Continue",
        confirmButtonColor: "#19424e",
        iconColor: "#19424e",
        color: "#19424e",
        background: "#f3faff",
      });
    } else if (!validateEmail(email)) {
      Swal.fire({
        title: "Error!",
        text: "Please enter valid email address",
        icon: "error",
        confirmButtonText: "Continue",
        confirmButtonColor: "#19424e",
        iconColor: "#19424e",
        color: "#19424e",
        background: "#f3faff",
      });
    }
  }
}

/**
 * Checks if email is valid
 */
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

/**
 * Calls function
 */

function main() {
  changeNav();
  calenderSweetAlert();
}

document.addEventListener("DOMContentLoaded", function () {
  main();
});
