$(document).ready(function(){
  $('.blog-slider').slick({
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 3,
    // variableWidth: true,
    infinite: true,
    draggable: false,
    nextArrow:
    `<button type='button' class='slick-next slick-arrow'>
    <h5>next</h5>
    <img src="./assets/img/iconfinder-arrow-forward/iconfinder-arrow-forward-1063879.png" alt="abc"></button>`,
    dots: true,
    responsive:[
      {
        breakpoint: 1120,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
      {
        breakpoint: 850,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 4,
      },
    },
      {
        breakpoint: 575,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 6,
      },
    },
  ],
  });
  $('.our-favourites__row').slick({
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 2,
    infinite: true,
    draggable: false,
    nextArrow:
    `<button type='button' class='slick-next '>
    <h5>next</h5>
    <img src="./assets/img/iconfinder-arrow-forward/iconfinder-arrow-forward-1063879.png" alt="next">
    </button>`,
    responsive:[
      {
        breakpoint: 1120,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
      {
        breakpoint: 850,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 4,
      },
    },
      {
        breakpoint: 620,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 4,
      },
    },
  ],
  });
  $('.discover__products-row').slick({
    slidesToShow: 5,
    arrows: true,
    slidesToScroll: 4,
    variableWidth: false,
    infinite: true,
    draggable: false,
    nextArrow:
    `<button type='button' class='slick-next '>
    <h5>next</h5>
    <img src="./assets/img/iconfinder-arrow-forward/iconfinder-arrow-forward-1063879.png" alt=""></button>`,
    responsive:[
      {
        breakpoint: 1120,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      },
    },
      {
        breakpoint: 920,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
      {
        breakpoint: 720,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
      },
    },
      {
        breakpoint: 490,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    //   {
    //     breakpoint: 390,
    //     settings: {
    //     arrows: false,
    //     draggable: true,
    //   },
    // },
  ],
  });
  // ****************************************
  $('.rabi-blog__slider').slick({
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    variableWidth: false,
    infinite: true,
    draggable: false,
    dots: true,
    nextArrow:
    `<button type='button' class='slick-next '>
    <h5>next</h5>
    <img src="./assets/img/iconfinder-arrow-forward/iconfinder-arrow-forward-1063879.png" alt="next"></button>`,
    responsive:[
      {
        breakpoint: 1350,
        settings: {
          arrows: false,
          draggable: true,
        },
      },
    ],
  });
  $('.rabi-blog__img').slick({
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    infinite: true,
    draggable: false,
    nextArrow:
    `<button type='button' class='slick-next '>
    <h5>next</h5>
    <img src="./assets/img/iconfinder-arrow-forward/iconfinder-arrow-forward-1063879.png" alt="next"></button>`,
    responsive:[
      {
        breakpoint: 1023,
        settings: {
          arrows: false,
          draggable: true,
        },
      },
    ],
  });
  $('.promo-blog__slider').slick({
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 3,
    infinite: true,
    draggable: false,
    dots: true,
    nextArrow:
    `<button type='button' class='slick-next '>
    <h5>next</h5>
    <img src="./assets/img/iconfinder-arrow-forward/iconfinder-arrow-forward-1063879.png" alt="next"></button>`,
    responsive:[
      {
        breakpoint: 1250,
        settings: {
          arrows: false,
          draggable: true,
        },
      },
      {
        breakpoint: 1120,
        settings: {
          arrows: false,
          draggable: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 840,
        settings: {
          arrows: false,
          draggable: true,
          slidesToShow: 2,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          draggable: true,
          slidesToShow: 1,
          slidesToScroll: 6,
        },
      },
    ],
  });
  $('.collection__product').slick({
    slidesToShow: 5,
    arrows: true,
    slidesToScroll: 4,
    infinite: true,
    draggable: false,
    dots: true,
    nextArrow:
    `<button type='button' class='slick-next '>
    <h5>next</h5>
    <img src="./assets/img/iconfinder-arrow-forward/iconfinder-arrow-forward-1063879.png" alt="abc"></button>`,
    responsive:[
      {
        breakpoint: 1269,
        settings: {
          arrows: false,
          draggable: true,
        },
      },
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 4,
          arrows: false,
          draggable: true,
        },
      },
      {
        breakpoint: 915,
        settings: {
          slidesToShow: 3,
          arrows: false,
          draggable: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          arrows: false,
          draggable: true,
          slidesToScroll: 7,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          arrows: false,
          draggable: true,
          slidesToScroll: 8,
        },
      },
  ],
  });
  $('.product__item__row').slick({
    slidesPerRow: 4,
    // slidesToScroll: 4,
    infinite: true,
    draggable: true,
    dots: true,
    arrows: false,
    rows: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive:[
      {
        breakpoint: 1150,
        settings: {
          slidesPerRow: 3,
          rows: 2,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesPerRow: 2,
          rows: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesPerRow: 1,
          rows: 4,
        },
      },
  ],
  });
  $('.promo-product__slider').slick({
    slidesToShow: 5,
    arrows: true,
    slidesToScroll: 4,
    infinite: true,
    draggable: false,
    dots: true,
    nextArrow:
    `<button type='button' class='slick-next '>
    <h5>next</h5>
    <img src="./assets/img/iconfinder-arrow-forward/iconfinder-arrow-forward-1063879.png" alt="next"></button>`,
    responsive:[
      {
        breakpoint: 1199,
        settings: {
          arrows: false,
          draggable: true,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          draggable: true,
          arrows: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          draggable: true,
          arrows: false,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
          draggable: true,
          arrows: false,
          slidesToScroll: 8,
        },
      },
  ],
  });
});