$(document).ready(function () {



    // if scrolled navbar fixed top
    $(window).scroll(function (e) {
        if ($("html").scrollTop() >= 25) {
            $("#myNavbar .navbar").addClass("scrolled");
        } else {
            $("#myNavbar .navbar").removeClass("scrolled");
        }
    });



    // costomization owlCarusel for primary slider
    $('#primary-slider .items').owlCarousel({
        loop: true,
        autoWidth: false,
        margin: 0,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,

        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    ResetText();
    TetxAnimation();
    var owl = $('#primary-slider .owl-carousel');
    owl.owlCarousel();
    // Listen to owl events
    owl.on('translated.owl.carousel', function (event) { 
        TetxAnimation();
    });
     owl.on('change.owl.carousel', function (event) {
        ResetText(); 
    });
    // reset text animation
    function ResetText() {
        $("#primary-slider h1").css({
            top: '30%',
            opacity: '0'
        });
        $("#primary-slider h4").css({
            top: '60%',
            opacity: '0'
        });
        $("#primary-slider ul").css({
            top: '70%',
            opacity: '0'
        });
    }
    // change text animation
    function TetxAnimation() {

        $("#primary-slider .items .active h1").animate({
            top: '40%',
            opacity: '1'
        },500);
        $("#primary-slider .items .active h4").animate({
            top: '50%',
            opacity: '1'
        },900);
        $("#primary-slider .items .active ul").animate({
            top: '60%',
            opacity: '1'
        },900);
        

    }



      // costomization owlCarusel for category slider
      console.log($('#catigories .items .item'));
      $("#catigories .items").owlCarousel({
        loop:true,
        margin:15,
        nav:true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })
    
});