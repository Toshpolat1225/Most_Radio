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
 var inputSlider = document.querySelector('.inputSlider');
 var muteVolume = document.querySelector('.muteVolume');


inputSlider.addEventListener('mousemove', function(){
    console.log(inputSlider.value);
     var x =inputSlider.value;
     var color =`linear-gradient(90deg, rgb(255, 204, 129)` +x +`%, rgb(255, 255, 255)`+ x+"%)";
     inputSlider.style.background =color;
 });
muteVolume.addEventListener('click', function () {

    if (inputSlider.value == 0) {
        inputSlider.value = 100;
    }
    else {
        inputSlider.value = 0
    }
    var x = inputSlider.value;
     var color =`linear-gradient(90deg, rgb(255, 204, 129)` +x +`%, rgb(255, 255, 255)`+ x+"%)";
     inputSlider.style.background =color;
 });