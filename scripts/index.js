//main js
$(function() {
  console.log('hello')


  //instantiate parallax
  var rellax = new Rellax('.rellax', {
    speed: -2,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
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
          fills: {
            defaultFill: '#36c0f8', // Any hex, color name or rgb/rgba value,
            'locationPin': '#9467bd',
          },
          geographyConfig: {
            highlightOnHover: false,
            popupOnHover: false
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
            return ['<div class="hoverinfo">' +  data.title,
            '<br/>Location: ' +  data.city + data.state,
            '<br/>Website: ' +  data.url + '',
            '</div>'].join('');
          }
        });

        var locationMarker = d3.selectAll('circle').on('click', function(){
          var selected = $(this);
          console.log('selected', selected)
          const json = selected[0].dataset.info;
          const selected_location = JSON.parse(json);
          console.log('selected', selected_location)

          //build modal info
          $('.location-title').text(selected_location.title)
          $('.location-name').text(selected_location.location_name)
          $('.location-state').text(selected_location.state)
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
      autoplay: true,
      autoplayHoverPause: true,
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
      offset: -275,
      reverse: false
    })
      .setClassToggle(currentAnimation, "active")
      .addTo(controller);
  });
})