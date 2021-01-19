document.addEventListener("DOMContentLoaded", () => {
  window.onload = function () {};
});
window.addEventListener("load", function () {
  try {
    console.log("script loaded");
    // if ($(".sidenav") !== undefined) $(".sidenav").sidenav();
    // var elems = document.querySelectorAll(".sidenav");
    // var instances = M.Sidenav.init(elems, {});

    $(".collapsible").collapsible();
    $(".sidenav").sidenav();

    console.log("script collapsible");

    $(".fixed-action-btn").floatingActionButton();
    $(".floating-sidenav").sidenav();
    console.log("script 3");
  } catch (e) {
    alert(e);
  }
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    $("#arrow_bottom").hide("slow");
    $("#fabActions").show("slow");
  } else {
    //document.getElementById("fabActions").style.display = "none";

    $("#fabActions").hide("slow");
  }
  if (window.pageYOffset == 0) {
    $("#arrow_bottom").show("slow");
  }
  prevScrollpos = currentScrollPos;
};
