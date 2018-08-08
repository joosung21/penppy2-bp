var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
  var windowWidth = $(window).width();

  if(scroll_pos > 199) {
    $('.table-mobile-calendar-header').css('top', (scroll_pos - 199) + 'px');
  } else {
    $('.table-mobile-calendar-header').css('top', 0);
  }

}

window.addEventListener('scroll', function(e) {

  last_known_scroll_position = window.scrollY;

  if (!ticking) {

    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;

  }

});