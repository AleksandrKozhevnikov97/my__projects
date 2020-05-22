// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         prevArrow: '<button type="button" class="slick-prev"><img src="image/slider/button__left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="image/slider/button__right.png"></button>',
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         centerMode: true,
//         centerPadding: "400px"
//     });
//   });

$(document).ready(function(){
    $('.reviews__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="image/slider/button__left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="image/slider/button__right.png"></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "1px",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
          }
        ]
      });
  });



$(document).ready(function(){
    $('.carousel').carousel();
  });