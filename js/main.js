/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// Old browser notification
$(function() { 
  $.reject({
    reject: {
      msie: 8
    },
    imagePath: 'img/icons/jReject/',
    display: [ 'chrome','firefox','safari','opera' ],
    closeCookie: true,
    cookieSettings: {
      expires: 60*60*24*365
    },
    header: 'Ваш браузер устарел!',
    paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
    paragraph2: 'Пожалуйста, установите современный браузер:',
    closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
    closeLink: 'Закрыть это уведомление',
  });
});

// Equal Height function
$.fn.equialHeight = function() {
  var $tallestcolumn = 0;
  var $currentHeight = 0;
  $.each($(this), function (index, value) {
    $currentHeight = $(this).height();
    if($currentHeight > $tallestcolumn)
    {
      $tallestcolumn = $currentHeight;
    }
  });
  $(this).height($tallestcolumn);
  return $(this);
} 

// jQuery for page scrolling feature - requires jQuery Easing plugin
$('.toBottom').click(function(){
  $("html, body").animate({ scrollTop: $(".intent").offset().top + .21*$(window).outerHeight() }, 1500);
  return false;
});

// Bootstrap carousel pause on hover
$('#carousel-example-generic, #carousel-example-generic2').hover(function () { 
  $(this).carousel('pause');
}, function () { 
  $(this).carousel('cycle');
});

// Set equial height
$('.sale__box .ic').equialHeight();
$('.sale__box__info--col1').equialHeight();
$('.sale__box__info--col2').equialHeight();

// 
$('.sale__spoiler--btn').click( function () {
  $('.sale__heading').toggleClass('in');
  $('.sale__spoiler').toggleClass('in');
  $('.sale__col').toggleClass('in');
});