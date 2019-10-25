/* --------------------------------------------------- */
/* WOW.js
------------------------------------------------------ */
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       200,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

/* --------------------------------------------------- */
/* Preloader
------------------------------------------------------ */
$(window).load(function() {
  // will first fade out the loading animation
  $("#loader").fadeOut("fast", function(){

    // will fade out the whole DIV that covers the website.
    $("#preloader").delay(300).fadeOut("fast");
    $("#mlh-trust-badge").css("visibility", "visible");
    $("#mlh-trust-badge").css("opacity", "1");

  });
});
$(document).ready(function() {
 // Home animation preload
 if ($(window).width() <= 576) {
   $("#home").addClass("home-animation-mobile");
 }
 else {
   $("#home").addClass("home-animation");
 }
 $("#home-title, #home-subtitle").addClass("wow");
 $("#home-buttons").addClass("animated");

 // Initialize smooth scroll
 var scroll = new SmoothScroll('a[href*="#"]', {
 	speed: 1500,
 	speedAsDuration: true,
  offset: function (anchor, toggle) {
		// An example returning different values based on whether the clicked link was in the header nav or not
		if (toggle.classList.contains('nav-link')) {
			return 75;
		} else {
			return 0;
		}
	}
 });
});
