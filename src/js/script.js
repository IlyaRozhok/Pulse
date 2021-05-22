$(document).ready(function(){

  const slider = tns({
    container: '.tiny-slider',
    items: 1,
    speed: 1000,
    slideBy: 'page',
    autoplay: false,
    nav: false,
    mouseDrag: true,
    preventActionWhenRunning: true,
    controlsText: [
      '<img src="icons/chevron_left.png">',
      '<img src="icons/chevron_right.png">'
    ],
  });

  $(function() {
  
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
  });
});

  /* METHOD goTO */
/*   document.querySelector('.prev').addEventListener ('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener ('click', function () {
    slider.goTo('next'); */