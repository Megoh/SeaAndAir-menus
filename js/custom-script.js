$(document).ready(function() {
  var trigger = $(".hamburger"),
    overlay = $(".overlay"),
    isClosed = false;

  trigger.click(function() {
    hamburger_cross();
  });

  function hamburger_cross() {
    if (isClosed == true) {
      overlay.hide();
      trigger.removeClass("is-open");
      trigger.addClass("is-closed");
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass("is-closed");
      trigger.addClass("is-open");
      isClosed = true;
    }
  }

  $('[data-toggle="offcanvas"]').click(function() {
    $("#wrapper").toggleClass("toggled");
  });
});

const hamburgerButton = document.querySelector("#hamburgerButton");
const sidebarWrapper = document.querySelector("#sidebar-wrapper");

hamburgerButton.addEventListener("click", function() {
  //   sidebarWrapper.style.left = "-30px";
  sidebarWrapper.classList.toggle("invisiblee");
});
