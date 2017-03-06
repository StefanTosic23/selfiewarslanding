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
        
        $('html, body').animate({scrollTop: $('.js--landing').offset().top}, 800);
    });
    $('.js--scroll-to-subscribe').click(function () {
        
        $('html, body').animate({scrollTop: $('.js--subscribe').offset().top}, 1800);
    });
    
});