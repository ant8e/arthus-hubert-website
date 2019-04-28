import 'bootstrap';

import '../scss/index.scss';

$('#alert').click(() => {
  alert('jQuery works!');
});

// Your jQuery code


$('.js-scrollTo').click(function() {
  var page = $(this).attr('href');
  var speed = 500; // Durée de l'animation (en ms)
  $('html, body').animate({
    scrollTop: $(page).offset().top
  }, speed);
  return false;
});