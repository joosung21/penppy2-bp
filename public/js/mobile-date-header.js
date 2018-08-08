var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
  var windowWidth = $(window).width();

  if(scroll_pos > 60) {
    console.log('work');
    $('.mobile-calendar-controler').css('top', (scroll_pos - 56) + 'px');
    $('.mobile-calendar-controler').addClass('sticky');
  } else {
    $('.mobile-calendar-controler').css('top', 0);
    $('.mobile-calendar-controler').removeClass('sticky');
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