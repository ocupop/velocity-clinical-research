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
          fills: {
            defaultFill: '#36c0f8', // Any hex, color name or rgb/rgba value,
            'locationPin': '#284497',
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
            '<br/>Location: ' +  data.label,
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
})

// const read_more_wrapper = document.querySelector('.read-more-wrapper');
// let isOpen = false;
// document.querySelector('.read-more').addEventListener('click', () => {
//   isOpen = !isOpen;
//   isOpen ? read_more_wrapper.classList.add('open') : read_more_wrapper.classList.remove('open')   
// });

// $('[data-count]').each(function(){
//   var count_number = $(this).data('count');
//   var el_id = $(this).attr('id')

//   console.log(el_id, count_number)
//   countup(el_id, count_number);
// })



// function countUp(el, count){
//   var div_by = 100,
//       speed = Math.round(count / div_by),
//       $display = $(el),
//       run_count = 1,
//       int_speed = 24;
  
//   var int = setInterval(function() {
//     if(run_count < div_by){
//       $display.text(speed * run_count);
//       run_count++;
//     } else if(parseInt($display.text()) < count) {
//       var curr_count = parseInt($display.text()) + 1;
//       $display.text(curr_count);
//     } else {
//       clearInterval(int);
//     }
//   }, int_speed);
// }



  