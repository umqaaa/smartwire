$(document).ready(function(){
    $('.block-carousel__inner').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        adaptiveHeight: true,
        speed: 1500,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/left-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/right-arrow.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });   
});
 //Modal
  $('[data-modal=video]').on('click', function() {
    $('.overlay, #video').fadeIn('slow');
  });
  $('[data-modal=domofon]').on('click', function() {
    $('.overlay, #domofon').fadeIn('slow');
  });
  $('[data-modal=thanks]').on('click', function() {
    $('.overlay, #thanks').fadeIn('slow');
  });
  $('[data-modal=security]').on('click', function() {
    $('.overlay, #security').fadeIn('slow');
  });
  $('.modal__close').on('click', function() {
      $('.overlay, #video, #domofon, #thanks, #security').fadeOut('slow')
  });
  $('.block-contact__btn').on('click', function() {
    $('.overlay,  #thanks').fadeIn('slow')
    });

    $('form').validate({
        rules: {
            name: "required",
            checkbox: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Пожалуйста, введите свое имя",
            phone: "Пожалуйста, введите свой номер телефона",
            checkbox: "Пожалуйста, подтвердите",
            email: {
                required: "Пожалуйста, введите свой почтовый адрес",
                email: "Неправильно введен адрес почты"
            }
        }
    });
        $('form').submit(function(e) {
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                $('.overlay, #thanks').fadeIn('slow');
                
                $('form').trigger('reset');
            });
            return false;
        });
    









