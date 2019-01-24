import "bootstrap";
// Alternatively we can import features individually.
// Also make sure to update the project.config.js if you are going to take this approach
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';

import App from "./App";
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all";
import ScrollMagic from "ScrollMagic";
import "animation.gsap";

var controller = new ScrollMagic.Controller();

function animZoom() {
  $(".zoom").each(function() {
    var currentAnimation = this;
    console.log("zoom");

    var zoomAnimation = new TimelineMax()
      .from(currentAnimation, 0.5, { scale: 1 }, 0)
      .to(currentAnimation, 5, { scale: 1.2 });

    var scene = new ScrollMagic.Scene({
      triggerElement: currentAnimation,
      offset: -250
    })
      .setTween(zoomAnimation)
      //.addIndicators({ name: 'slide up', colorEnd: '#0070ff' })
      .addTo(controller);
  });
}

animZoom();
