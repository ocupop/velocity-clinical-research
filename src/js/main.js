!function(e){var t={};function o(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(n,l,function(t){return e[t]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){$((function(){console.log("hello");new Rellax(".rellax",{speed:-1,center:!0,wrapper:null,round:!0,vertical:!0,horizontal:!1,breakpoints:[576,768,992]});$("#us-map").length&&$.ajax({type:"GET",dataType:"json",url:"/data/locations.json",success:function(e){var t=new Datamap({element:document.getElementById("us-map"),scope:"usa",fills:{defaultFill:"#36c0f8",locationPin:"#9467bd"},geographyConfig:{highlightOnHover:!1,popupOnHover:!1}}),o=e;console.log(o),t.bubbles(o,{popupTemplate:function(e,t){return['<div class="hoverinfo">'+t.title,"<br/>Location: "+t.label,"<br/>Website: "+t.url,"</div>"].join("")}});d3.selectAll("circle").on("click",(function(){var e=$(this);console.log("selected",e);var t=e[0].dataset.info,o=JSON.parse(t);console.log("selected",o),$(".location-title").text(o.title),$(".location-label").text(o.label),$(".location-address").text(o.address),$(".location-phone").text(o.phone),$(".location-email").text(o.email),$(".location-image").css("background-image","url("+o.image+")"),$(".location-link").attr("href",o.url),$("#map-modal").modal("toggle")}))}}),$(".owl-carousel").length&&$(".owl-carousel").owlCarousel({loop:!0,margin:30,nav:!0,navText:['<i class="ri-arrow-left-s-line"></i>','<i class="ri-arrow-right-s-line"></i>'],stagePadding:10,autoplay:!1,autoplayHoverPause:!0,center:!0,responsive:{0:{items:1},500:{items:1},666:{items:1},991:{items:2},1156:{items:3}}});var e=new ScrollMagic.Controller;$(".animate").each((function(){new ScrollMagic.Scene({triggerElement:this,offset:-275,reverse:!1}).setClassToggle(this,"active").addTo(e)}))})),$("[data-count]").each((function(){var e,t,o,n,l,a,r=$(this).data("count");console.log(r),e=$(this),t=r,o=Math.round(t/100),n=$(e),l=1,a=setInterval((function(){if(l<100)n.text(o*l),l++;else if(parseInt(n.text())<t){var e=parseInt(n.text())+1;n.text(e)}else clearInterval(a)}),24)}))}]);