  $(document).ready(function() {
/* begin Menu Mobile Header */
$('button.menu_mobile_hidden').click(function() {
    $('#main_header nav').slideToggle('slow');
});

$(window).resize(function() {
   if ($(window).width() > 560){
    $('#main_header nav').removeAttr('style')
   }
});
/* end Menu Mobile Header */

/* begin bxSlider Featured Articles */
  $('.slider_featured_articles').bxSlider({
    slideWidth: 368,
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 30,
    pager: false
  });
/* end bxSlider Featured Articles */

/* begin bxSlider Clients */
  $('.slider_clients').bxSlider({
    slideWidth: 151,
    minSlides: 1,
    maxSlides: 6,
    moveSlides: 1,
    slideMargin: 12,
    pager: false
  });
/* end bxSlider Clients */

/* begin mixitup */
var mixer = mixitup('.mixitup_container',{
    load: {
    filter: '.category-art',
},
});   
/* end mixitup */

/* begin Slick Slider Portfolio */
 $('.slick_slider_portfolio').slick({ 
    arrows: false,
    dots: true,
    slidesToShow: 6, 
    slidesToScroll: 2, 
    variableWidth: true
      });    
/* end Slick Slider Portfolio */

/* begin bxSlider Slider Blog Post Next Section */
  $('.blog_next_post_slider').bxSlider({
    slideWidth: 370,
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 30,
    pager: false
  });
/* end bxSlider Slider Blog Post Next Section */

/* begin Animate CSS */
$('.team_member_img').hover(function() {
    $(this).addClass('animated bounce');
}, function() {
    $(this).removeClass('animated bounce');
});
  
new WOW().init();  
/* end Animate CSS */

/* begin Blog DOM */
 $(window).resize(function() {
  if($(window).width() < 992){
    $('.change_before').prependTo('.change_block');
  } else{
    $('.change_before').appendTo('.change_block');
  }
}); 
/* end Blog DOM */

/* begin Footer DOM */
 $(window).resize(function() {
  if($(window).width() < 560){
    $('.terms').prependTo('.header_second');
  } else{
    $('.terms').appendTo('.header_second');
  }
}); 
/* end Footer DOM */

/* begin Back to Top Button */
	if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
/* end Back to Top Button */

//########################  
  });