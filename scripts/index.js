//main js
$(document).ready(function() {
  console.log('hellow')

  if($('#us-map').length) {
    //d3 map prototype example
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
    var locations = [{
      name: 'Seattle',
      radius: 15,
      city: 'Seattle',
      state: 'WA',
      fillKey: 'locationPin',
      website: 'www.velocityclinical.com',
      latitude: 47.6062,
      longitude: -122.3321
    }
    ];

    map.bubbles(locations, {
      popupTemplate: function (geo, data) { 
        return ['<div class="hoverinfo">' +  data.name,
        '<br/>Location: ' +  data.city + data.state,
        '<br/>Website: ' +  data.website + '',
        '</div>'].join('');
      }
    });

    var locationMarker = d3.selectAll('circle').on('click', function(){
      console.log('clicked map marker')
      $('#exampleModal').modal('toggle')
    });
  }

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
        items: 2
      },
      666: {
        items: 3
      },
      991: {
        items: 2
      },
      1156: {
        items: 3
      },
    }
  })
  
})