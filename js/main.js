$(document).ready(function(){
    
  $('.phone-slider').slick({
      arrows: false,
      dots: true,
      autoplay: true
  });
    
  $('.features__slider').slick({
      arrows: false,
      dots: true,
      autoplay: true
  });
    
    $('.js--scroll-to-landing').click(function () {
        
        $('html, body').animate({scrollTop: $('#landing').offset().top}, 800);
    });
    
});