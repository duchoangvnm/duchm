$(document).ready(function () {
    var slides = [
    { "src": "img/anh1.jpg" },
    { "src": "img/anh2.jpg" },
    { "src": "img/anh3.jpg" },
    { "src": "img/anh4.jpg" },
    { "src": "img/anh5.jpg" },
    { "src": "img/anh6.jpg" },
    { "src": "img/anh7.jpg" },
    { "src": "img/anh8.jpg" },
    { "src": "img/anh9.jpg" }]
    
    var carouselProps = {
        "width": window.innerWidth * 0.8,
        "height": window.innerHeight * 0.6,
        "slideLayout": "contain",
        "animation": "slide",
        "animationCurve": "ease-in",
        "animationDuration": 700,
        "animationInterval": 2500,
        "autoplay": true,
        "rotationDirection": "ltr",
        "navigation": null,
        "slides": slides,
        "perspective": 0
    };
    $(".ctht9295-gallery").jR3DCarousel(carouselProps);
    $('.settings').html('<pre>$(".ctht9295-gallery").jR3DCarousel(' + JSON.stringify(carouselProps, null, 4) + ')</pre>');
});