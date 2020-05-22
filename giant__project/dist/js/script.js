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
        centerPadding: "1px"
      });
  });



$(document).ready(function(){
    $('.carousel').carousel();
  });