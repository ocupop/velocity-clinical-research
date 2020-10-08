//main js
$(function() {
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
      name: 'Austin',
      radius: 15,
      city: 'Austin',
      state: 'TX',
      fillKey: 'locationPin',
      website: 'www.velocityclinical.com',
      latitude: 30.4748321,
      longitude: -97.8428763
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
      
      $('#map-modal').modal('toggle')
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
  
})