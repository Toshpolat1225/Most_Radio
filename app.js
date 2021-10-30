$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$(document).ready(function() {
  var btn = $(".playIcon");
  btn.click(function() {
    btn.toggleClass("paused");
    return false;
  });
});