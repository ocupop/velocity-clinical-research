!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){$(document).ready((function(){if(console.log("hellow"),$("#us-map").length){new Datamap({element:document.getElementById("us-map"),scope:"usa",fills:{defaultFill:"#36c0f8",locationPin:"#9467bd"},geographyConfig:{highlightOnHover:!1,popupOnHover:!1}}).bubbles([{name:"Seattle",radius:15,city:"Seattle",state:"WA",fillKey:"locationPin",website:"www.velocityclinical.com",latitude:47.6062,longitude:-122.3321}],{popupTemplate:function(e,t){return['<div class="hoverinfo">'+t.name,"<br/>Location: "+t.city+t.state,"<br/>Website: "+t.website,"</div>"].join("")}});d3.selectAll("circle").on("click",(function(){console.log("clicked map marker"),$("#exampleModal").modal("toggle")}))}$(".owl-carousel").owlCarousel({loop:!0,margin:30,nav:!0,navText:['<i class="ri-arrow-left-s-line"></i>','<i class="ri-arrow-right-s-line"></i>'],stagePadding:10,autoplay:!0,autoplayHoverPause:!0,responsive:{0:{items:1},500:{items:2},666:{items:3},991:{items:2},1156:{items:3}}})}))}]);