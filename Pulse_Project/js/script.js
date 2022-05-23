$(document).ready(function(){
  $('.carusel__inner').slick({
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/right.png"></button>',
    dots: false,
    ifinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }  
      },

      {
        breakpoint: 961,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }  
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
    
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__items__active)', function() {
    $(this)
      .addClass('catalog__items__active').siblings().removeClass('catalog__items__active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content__active').eq($(this).index()).addClass('catalog__content__active');
  });

  // $('.catalog-item__link').each(function(i){
  //   $(this).on('click', function(e){
  //     e.preventDefault();
  //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content__active');
  //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list__active');
  //   })
  // });

  // $('.catalog-item__list__back').each(function(i){
  //   $(this).on('click', function (e){
  //     e.preventDefault();
  //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content__active');
  //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list__active');
  //   })
  // });


  function Toggle_item(item){
    $(item).each(function(i){
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content__active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list__active');      
      });
    })
  };

  Toggle_item('.catalog-item__link');
  Toggle_item('.catalog-item__list__back');

  // Modal

  $('[data-modal=consultation]').on('click', function(){
    $('.overlay, #consultation').fadeIn();
  });

  $('.modal__back').on('click', function(){
    $('.overlay, #consultation, #thanks, #order').fadeOut('fast');
  });

  $('.catalog-item__btn').each(function(i){
    $(this).on('click', function(){
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('fast');
    })
  });

  function myvalidForms (form){
    $(form).validate({
      rules: {
        name: "required",
        phone: {
          required: true,
          minlength: 7
        },
        email: {
          required: true,
          email: true
        }
      },

      messages: {
        name: "Пожалуйста, введите свое имя",
        phone: {
          required: "Пожалуйста введите номер телефона ",
          minlength: jQuery.validator.format("Минимум {0} символов")
        },
        email: {
          required: "Пожалуйста, введите адресс электронный почты ",
          email: "Не правильно введён адресс электронный почты"
        }
      }

    })
  }

  myvalidForms('#consultation-form form');
  myvalidForms('#consultation form');
  myvalidForms('#order form');

  $("input[name=phone]").mask("+99999-999-99-99");

  $('form').submit(function(e){
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function(){
        $(this).find("input").val("");
          $('#consultation, #order').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');
        $('form').trigger('reset');
    });
    return false;
    
  })

  //Smooth scroll


  $(window).scroll(function(){
    if($(this).scrollTop() > 1600){
      $('.pageup').fadeIn();
    }else {
      $('.pageup').fadeOut();
    }
    
  });

  new WOW().init();
});


           


