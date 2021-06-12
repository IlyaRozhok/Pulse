$(document).ready(function(){

  const slider = tns({
    container: '.tiny-slider',
    items: 1,
    speed: 1000,
    slideBy: 'page',
    autoplay: false,
    nav: false,
    mouseDrag: true,
    controlsText: [
      '<img src="icons/chevron_left.png">',
      '<img src="icons/chevron_right.png">'
    ],
    responsive: {
      320: {
        autoplay: true,
        nav: true,
        controls: false,
        items: 1,
        autoHeight: false,
      },
      1200: {
        items: 1,
        autoplay: false,
        nav: false,
        controls: true,
      }
    }
  });

  $(function() {
    $('ul.catalog__tabs').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
  });
    
    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
      });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
});

  /* METHOD goTO */
/*   document.querySelector('.prev').addEventListener ('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener ('click', function () {
    slider.goTo('next'); */