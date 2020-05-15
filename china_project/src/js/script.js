$(document).ready(function(){
    
    //validation
    function valideForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожайлуста, введите своё имя",
                phone: "Введите свой номер телефона",
                text: "Это поле обязательно",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введён адрес почты",
                }
            }
        });
    };

    valideForms('#consultation_form');
    valideForms('#questions_form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");



    //post mail
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "/mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('form').trigger('reset');
        });
        return false;
    });

    $('.reviews__inner').slick({
        speed:1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="image/reviews/left_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="image/reviews/right_arrow.png"></button>',
        responsive: [
            {
                breakpoint: 1222,
                settings: {
                dots: true,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                dots: true,
                arrows: false,
                mobileFirst: true
                }
            }
        ]
    });
})