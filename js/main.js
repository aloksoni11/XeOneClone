$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:3,
        center: true,
        loop:true,
        mouseDrag:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
});