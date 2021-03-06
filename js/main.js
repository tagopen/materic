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
if( $( window ).width() <= 967 ) {
  $('.toBottom').click(function(){
    $("html, body").animate({ scrollTop: $(".intent").offset().top + .07*$(window).outerHeight() }, 1500);
    return false;
  });
}
if( $( window ).width() >= 968 ) {
  $('.toBottom').click(function(){
    $("html, body").animate({ scrollTop: $(".intent").offset().top + .10*$(window).outerHeight() }, 1500);
    return false;
  });
}

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
  $('.sale__separator').toggleClass('in');
  $('.sale__spoiler').toggleClass('in');
  $('.sale__col').toggleClass('in');
});

$('.stage__slider--small').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous<i class="fa fa-angle-double-left" aria-hidden="true"></i></button>',
  nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next<i class="fa fa-angle-double-right" aria-hidden="true"></i></button>',
  adaptiveHeight: true,
  centerMode: true,
  asNavFor: '.stage__slider--marker'
});
$('.stage__slider--marker').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.stage__slider--small',
  dots: false,
  centerPadding: '10px',
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});