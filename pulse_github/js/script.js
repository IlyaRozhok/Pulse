$(document).ready(function(){

  // Slider config

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

  // Tabs

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

    // Modals

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__cross').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order'). fadeIn('slow');
      });
    });
    
    // Form validation
  

    function validateForms(form) {    
      $(form).validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: "required",
          email: {
            required: true,
            email: true
          },
        },
        messages: {
          name: {
            required: "????????????????????, ?????????????? ???????? ??????",
            minlength: jQuery.validator.format("?????????????? {0} ??????????????")
          } ,
          phone: "????????????????????, ?????????????? ???????? ?????????? ????????????????",
          email: {
            required: "????????????????????, ?????????????? ???????? ??????????",
            email: "???????????????? e-mail"
          }
        },
      });
    }
    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');
    $('input[name=phone]').mask("+7(999) 999-9999");

    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('#thanks, .overlay').fadeIn('slow');

        $('form').trigger('reset');
      });
      return false;
    });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
        $('.up_btn').fadeIn();
      } else {
        $('.up_btn').fadeOut();
      }
    });

    $(function(){
      $("a[href^='#']").click(function(){
              var _href = $(this).attr("href");
              $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
              return false;
      });
});
  new WOW().init();
  });