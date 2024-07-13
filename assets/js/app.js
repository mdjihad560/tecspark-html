"use strict";

(function ($) {
  "use strict";

  /*--------------------------------------------------------------
   [Table of contents]
  
  TECSPARK PRELOADER JS INIT
  TECSPARK HEADER SEARCH JS INIT
  TECSPARK STICKY MENU JS INIT
  TECSPARK MENU SIDEBAR JS INIT
  TECSPARK SKILLBAR JS INIT
  TECSPARK HERO SLIDER INIT
  TECSPARK FOUR COLUMN SLIDER INIT
  TECSPARK THREE COLUMN SLIDER INIT
  TECSPARK FOUR COLUMN SLIDER TWO INIT
  TECSPARK TWO COLUMN SLIDER INIT
  TECSPARK ONE COLUMN SLIDER INIT
  TECSPARK THREE COLUMN SLIDER TWO INIT
  TECSPARK BRAND SLIDER INIT
  TECSPARK COUNTER JS INIT
  TECSPARK COUNTER JS TWO INIT
  TECSPARK MAP JS
  TECSPARK WOW JS
   
  -------------------------------------------------------------------*/

  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };
  $(function () {
    /*--------------------------------------------------------------
    TECSPARK PRELOADER JS INIT
    --------------------------------------------------------------*/
    $(".tecspark-preloader-wrap").fadeOut(500);

    /*--------------------------------------------------------------
    TECSPARK HEADER SEARCH JS INIT
    ------------------------------------------------------------*/
    $(".tecspark-header-search, .tecspark-header-search-close, .search-overlay").click(function () {
      $(".tecspark-header-search-section, .search-overlay").toggleClass("open");
    });

    /*--------------------------------------------------------------
    TECSPARK STICKY MENU JS INIT
    --------------------------------------------------------------*/
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('#sticky-menu').addClass('sticky-menu');
      } else {
        $('#sticky-menu').removeClass('sticky-menu');
      }
    });

    /*--------------------------------------------------------------
    TECSPARK MENU SIDEBAR JS INIT
    --------------------------------------------------------------*/
    $(".tecspark-header-barger").on("click", function (e) {
      $(".tecspark-sidemenu-column, .offcanvas-overlay").addClass("active");
      event.preventDefault(e);
    });
    $(".tecspark-sidemenu-close, .offcanvas-overlay").on("click", function () {
      $(".tecspark-sidemenu-column, .offcanvas-overlay").removeClass("active");
    });

    /*--------------------------------------------------------------
    TECSPARK HERO SLIDER INIT
    --------------------------------------------------------------*/
    /*----------- Custom Animaiton For Slider ----------*/

    $('[data-ani-duration]').each(function () {
      var durationTime = $(this).data('ani-duration');
      $(this).css('animation-duration', durationTime);
    });
    $('[data-ani-delay]').each(function () {
      var delayTime = $(this).data('ani-delay');
      $(this).css('animation-delay', delayTime);
    });
    $('[data-ani]').each(function () {
      var animaionName = $(this).data('ani');
      $(this).addClass(animaionName);
      $('.slick-slide [data-ani]').addClass('slider-animated');
    });
    $('.global-carousel').on('afterChange', function (event, slick, currentSlide, nextSlide) {
      $(slick.$slides).find('[data-ani]').removeClass('slider-animated');
      $(slick.$slides[currentSlide]).find('[data-ani]').addClass('slider-animated');
    });
    var hero_slider = $('.tecspark-hero-slider');
    if (hero_slider.is_exist()) {
      hero_slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        speed: 800,
        lazyLoad: 'progressive',
        prevArrow: '<button class="slide-arrow tecspark-hero-next"><i class="ri-arrow-left-s-line"></i></button>',
        nextArrow: '<button class="slide-arrow tecspark-hero-prev"><i class="ri-arrow-right-s-line"></i></button>'
      }).slickAnimation();
    }

    /*--------------------------------------------------------------
    TECSPARK FOUR COLUMN SLIDER INIT
    --------------------------------------------------------------*/
    var four_column_slider = $('.tecspark-4column-slider');
    if (four_column_slider.is_exist()) {
      four_column_slider.slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        centerMode: true,
        centerPadding: '150px',
        responsive: [{
          breakpoint: 1600,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 1399,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            centerPadding: '100px'
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }, {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            centerPadding: '0px'
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    TECSPARK THREE COLUMN SLIDER INIT
    --------------------------------------------------------------*/
    var three_column_slider = $('.tecspark-3column-slider');
    if (three_column_slider.is_exist()) {
      three_column_slider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        centerMode: true,
        centerPadding: '100px',
        responsive: [{
          breakpoint: 1399,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 850,
          settings: {
            slidesToShow: 1,
            centerPadding: '70px'
          }
        }, {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            centerPadding: '0px'
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    TECSPARK FOUR COLUMN SLIDER TWO INIT
    --------------------------------------------------------------*/
    var four_column_slider2 = $('.tecspark-4column-slider2');
    if (four_column_slider2.is_exist()) {
      four_column_slider2.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        responsive: [{
          breakpoint: 1399,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    TECSPARK TWO COLUMN SLIDER INIT
    --------------------------------------------------------------*/
    var two_column_slider = $('.tecspark-2column-slider');
    if (two_column_slider.is_exist()) {
      two_column_slider.slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 1
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    TECSPARK ONE COLUMN SLIDER INIT
    --------------------------------------------------------------*/
    var t_one_column_slider = $('.tecspark-1column-slider');
    if (t_one_column_slider.is_exist()) {
      t_one_column_slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        speed: 800,
        prevArrow: '<button class="slide-arrow tecspark-t-next"><i class="ri-arrow-left-s-line"></i></button>',
        nextArrow: '<button class="slide-arrow tecspark-t-prev"><i class="ri-arrow-right-s-line"></i></button>'
      });
    }

    /*--------------------------------------------------------------
    TECSPARK THREE COLUMN SLIDER TWO INIT
    --------------------------------------------------------------*/
    var three_column_slider2 = $('.tecspark-3column-slider2');
    if (three_column_slider2.is_exist()) {
      three_column_slider2.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        responsive: [{
          breakpoint: 1299,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    TECSPARK BRAND SLIDER INIT
    --------------------------------------------------------------*/
    var tecspark_brand_slider = $('.tecspark-brand-slider');
    if (tecspark_brand_slider.is_exist()) {
      tecspark_brand_slider.slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: 'linear',
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [{
          breakpoint: 1199,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    TECSPARK COUNTER JS INIT
    --------------------------------------------------------------*/
    var tecspark_counter = $('#tecspark-counter');
    if (tecspark_counter.is_exist()) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(tecspark_counter).offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.tecspark-counter').each(function () {
            var $this = $(this),
              countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
              countNum: countTo
            }, {
              duration: 4000,
              easing: 'swing',
              step: function step() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function complete() {
                $this.text(this.countNum);
              }
            });
          });
          a = 1;
        }
      });
    }

    /*--------------------------------------------------------------
    TECSPARK COUNTER JS TWO INIT
    --------------------------------------------------------------*/
    var tecspark_counter2 = $('#tecspark-counter2');
    if (tecspark_counter2.is_exist()) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(tecspark_counter2).offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.tecspark-counter2').each(function () {
            var $this = $(this),
              countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
              countNum: countTo
            }, {
              duration: 4000,
              easing: 'swing',
              step: function step() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function complete() {
                $this.text(this.countNum);
              }
            });
          });
          a = 1;
        }
      });
    }
  }); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  $(window).on("load", function () {}); // End window LODE

  /*--------------------------------------------------------------
  TECSPARK MAP JS
  ------------------------------------------------------------*/
  var google_map = $('#map');
  if (google_map.is_exist()) {
    var init = function init() {
      var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        disableDefaultUI: true,
        center: new google.maps.LatLng(40.6700, -73.9400),
        styles: [{
          "featureType": "landscape.man_made",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f7f1df"
          }]
        }, {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
            "color": "#d0e3b4"
          }]
        }, {
          "featureType": "landscape.natural.terrain",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.business",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.medical",
          "elementType": "geometry",
          "stylers": [{
            "color": "#fbd3da"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#bde6ab"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffe15f"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#efd151"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffffff"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "black"
          }]
        }, {
          "featureType": "transit.station.airport",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#cfb2db"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#a2daf2"
          }]
        }]
      };
      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        // icon: 'assets/images/all-img/contact/map.png',
        title: 'tecspark'
      });
      var contentString = '<div id="content">' + '<div id="tpw">' + '<h3>tecspark' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 280
      });
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function () {
        marker.setAnimation(null);
      }, 750); //time it takes for one bounce   

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
      });
    };
    google.maps.event.addDomListener(window, 'load', init);
  }

  /*--------------------------------------------------------------
  TECSPARK WOW JS
  ------------------------------------------------------------*/
  var wow = new WOW({
    mobile: false,
    // default
    tablet: false
  });
  wow.init();
})(jQuery);