//main js
$(function() {

  //instantiate parallax
  var rellax = new Rellax('.rellax', {
    speed: -1,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false,
    breakpoints: [576, 768, 992]
  });

  if($('#us-map').length) {
    $.ajax({
      type : 'GET',
      dataType : 'json',
      url: '/data/locations.json',
      success : function(data) {
        //load d3 map
        var map = new Datamap({
          element: document.getElementById('us-map'),
          scope: 'usa',
          responsive: true,
          fills: {
            defaultFill: '#36c0f8', // Any hex, color name or rgb/rgba value,
            'locationPin': '#284497',
          },
          geographyConfig: {
            highlightOnHover: false,
            popupOnHover: false,
            borderColor: '#ffffff',
            borderWidth: 2
          },
          bubblesConfig: {
            fillOpacity: 1,
            animate: true,
            borderWidth: 0,
            popupOnHover: true,
            highlightOnHover: true,
            highlightBorderColor: '#103CBE',
            highlightFillColor: '#103CBE',
            highlightBorderWidth: 3,
            highlightBorderOpacity: 1,
            highlightFillOpacity: 1,
            exitDelay: 100
          }
        });

        var locations = data;

        //base fields for setting up map pin and data
        // var locations = [{
        //   name: 'Austin',
        //   radius: 15,
        //   city: 'Austin',
        //   state: 'TX',
        //   fillKey: 'locationPin',
        //   website: 'www.velocityclinical.com',
        //   latitude: 30.4748321,
        //   longitude: -97.8428763
        // }
        // ];

        console.log(locations)
    
        map.bubbles(locations, {
          popupTemplate: function (geo, data) { 
            return ['<div class="hover-info shadow"><p>' + data.label  + '</p>' +
            '<h5>' + data.title + '</h5>' +
            '</div>'].join('');
          }
        });

        // Responsive Map Resize
        d3.select(window).on('resize', function() {
            map.resize();
        });

        var locationMarker = d3.selectAll('circle').on('click', function(){
          var selected = $(this);
          console.log('selected', selected)
          const json = selected[0].dataset.info;
          const selected_location = JSON.parse(json);
          console.log('selected', selected_location)

          //build modal info
          $('.location-title').text(selected_location.title)
          $('.location-label').text(selected_location.label)
          $('.location-address').text(selected_location.address)
          $('.location-phone').text(selected_location.phone)
          $('.location-email').text(selected_location.email)
          $('.location-image').css('background-image', 'url(' + selected_location.image + ')')
          $('.location-link').attr('href', selected_location.url)
          $('#map-modal').modal('toggle')
        });
      }
    });
  }

  if($('.owl-carousel').length){
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      navText: [
        '<i class="ri-arrow-left-s-line"></i>',
        '<i class="ri-arrow-right-s-line"></i>'
      ],
      stagePadding: 10,
      autoplay: false,
      autoplayHoverPause: true,
      center: true,
      responsive: {
        0: {
          items: 1
        },
        500: {
          items: 1
        },
        666: {
          items: 1
        },
        991: {
          items: 2
        },
        1156: {
          items: 3
        },
      }
    })
  }

  var controller = new ScrollMagic.Controller();

  $(".animate").each(function () {
    var currentAnimation = this;

    var scene = new ScrollMagic.Scene({
      triggerElement: currentAnimation,
      offset: -300,
      reverse: false
    })
      .setClassToggle(currentAnimation, "active")
      .addTo(controller);
  });

  function countup(el, val) {
    var count = new CountUp(el, 0, val, 0, 3, {
      useEasing: true
    });
    if (!count.error) {
      count.start();
    } else {
      console.error(count.error);
    }
  }

  $(".stat-number").each(function(){
    var currentAnimation = this;
    var count_number = $(this).data('count');
    var el_id = $(this).attr('id')
    var scene = new ScrollMagic.Scene({
      triggerElement: currentAnimation,
      offset: -250,
      reverse: false
    }).on('start', function(){
      countup(el_id, count_number);
    })
    .setClassToggle(currentAnimation, "active")
    .addTo(controller);
  })

  $('.read-more-wrapper').on('click', function(){
    $(this).toggleClass('open')
  })

  var controllerLazyLoad = new ScrollMagic.Controller();

  $('[data-lazy-type]').each(function () {
    var currentElement = this;
    var $this = $(this);
    var type = $this.data('lazy-type');
    var lazySrc = $this.data('lazy-src');
    var scene = new ScrollMagic.Scene({
      triggerElement: currentElement,
      reverse: false,
      offset: -350
    })
      .on('enter', function () {
        if (type == 'image') {
          $this.attr('src', lazySrc);
        }
        if (type == 'bg-image') {
          $this.css('background-image', 'url(' + lazySrc + ')')
        }
      })
      .on('exit', function () {
        if (type == 'bg-video') {
          // test to confirm this is working
          currentElement.pause();
        }
      })
      .setClassToggle(currentElement, "active")
      .addTo(controllerLazyLoad);
  })
})
  