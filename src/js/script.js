/* $(document).ready(function(){
    $('.carousel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron_right.png"></button>',
        adaptiveHeight: true,
        speed: 1200
      });
  }); */
  const slider = tns({
    container: '.tiny-slider',
    items: 1,
    speed: 1000,
    slideBy: 'page',
    autoplay: false,
    nav: false,
    mouseDrag: true,
    preventActionWhenRunning: true,
   /*  controlsText: [
      '<img src="icons/chevron_left.png">',
      '<img src="icons/chevron_right.png">'
    ], */
    controls: false,
  });

  document.querySelector('.prev').addEventListener ('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener ('click', function () {
    slider.goTo('next');
  });