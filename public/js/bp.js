
// Slider Open & Close
function openSlider(){
  $('.slider-ui').removeClass('hidden');
  $('.slider-ui').addClass('show');
}
function closeSlider(){
  $('.slider-ui').removeClass('show');
  $('.slider-ui').addClass('hidden');
  $('.room-line.assign-ui').removeClass('show')
}

// Document Ready
$( document ).ready(function() {

  // DEMO ONLY: Calendar Click Event Listner
  $('.table-calendar .room').click(function(){
    location.href='/bp-calendar-select'
  });

  // 모바일 달력 선택 Toggle
  $('td.selectable').click(function(){
    $(this).toggleClass('selected');
    $('#bookSelectedBtn').hide();
    $('td.selectable.selected').each(function(){
      $('#bookSelectedBtn').show();
    });
  });

  // Carousel Swipe on Mobile
  $(".carousel").swiperight(function() {
    $(this).carousel('prev');
  });
  $(".carousel").swipeleft(function() {
      $(this).carousel('next');
  });


});

