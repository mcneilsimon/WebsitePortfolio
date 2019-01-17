/* ==============================================
|   |   |   | Preloader
================================================= */

/*The function inside onload is anonymous, its a function with no name.
  Window onload makes sure that the whole website is loaded */
$(window).on('load', function () {
    //gif goes aaway when page is loaded
    setTimeout(function() {
        $("#status").fadeOut();
        $("#preloader").delay(350).fadeOut('slow') 
    }, 1000)
})

//$(window).onload = function(){
// setTimeout(function(){
//   alert("Hello");
// }, 10000);
//};

/* ==============================================
|   |   |   | Team Section for owl-carousel slideshow
================================================= */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false, //hides the dots in a slideshow
        //lets us customize are previous and next icons
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            //breakpoint from 480 and up, width that are greater than 480 and up we will display two team members
            480: {
                items: 2
            }
        }
    });
});


/* ==============================================
|   |   |   | Progress bar animation
================================================= */
$(function () {


    $("#progress-elements").waypoint(function () {
        //each iterates each tag that has class name progress-bar
        $(".progress-bar").each(function () {

            $(this).animate({
                /*set the width property for each progress bar, aria-valuenow is an attribute in progress bar from bootstrap*/
                width: $(this).attr("aria-valuenow") + "%"

            }, 2000); //the 1000 is the animation time

        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});


/* ==============================================
|   |   |   | Responsive Tabs
================================================= */
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});


/* ==============================================
|   |   |   | Portfolio Filtering
================================================= */
$(window).on('load', function () {
    //Initialize Isotope
    $("#isotope-container").isotope({});

    //filter items on button click
    $("#isotope-filters").on('click', 'button', function () {
        //get filter value
        var filterValue = $(this).attr('data-filter')

        //filter portfolio items
        $("#isotope-container").isotope({
            filter: filterValue
        });

        //active button
        $("#isotope-filters").find('.active').removeClass('active')
        $(this).addClass('active')
    });
});


/* ==============================================
|   |   |   | Magnifier
================================================= 
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image'
    });

}); */


/* ==============================================
|   |   |   | Testimonials, Carousel Slider
================================================= */

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false, //hides the dots in a slideshow
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'] //lets us customize are previous and next icons
    });
});


/* ==============================================
|   |   |   | Stats Counter Up
================================================= */
$(function () { //jQuery document .ready method short form
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});


/* ==============================================
|   |   |   | Client Section Carousel Slider 
================================================= */
$(function () {
    $("#clients-list").owlCarousel({
        items: 6, //display 6 logos at a time
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false, //hides the dots in a slideshow
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'], //lets us customize are previous and next icons
        responsive: {
            //breakpoint from 0 and up, width that are greater than 480 and up we will display two team members
            0: {
                items: 2
            },
            //breakpoint from 480 and up, width that are greater than 480 and up we will display two team members
            480: {
                items: 3
            },
            //breakpoint from 768 and up, width that are greater than 480 and up we will display two team members
            768: {
                items: 6
            }
        }
    });
});

/* ==============================================
|   |   |   | Google Map
================================================= */
$(window).on('load', function () {

    //Map Variables
    var addressString = 'Oakville, Ontario'
    var myLatlng = {
        lat: 43.4669381322,
        lng: -79.6857955901
    };

    //1.Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng,
        gestureHandling: 'none',
    });

    //2. Add Marker 
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map, //the map variables
        title: "Click To See Address"
    });

    //3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    // Show info window when user clicks on the marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    /* 4. Resize Function, (window, 'resize') means we are listening for the when the browser window is being resized, then it trigger the function */
    google.maps.event.addDomListener(window, 'resize', function () {

        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });

});


/* ==============================================
|   |   |   | Navigation 
================================================= */

/* Show & Hide White Navigation */
$(function () {

    // show/hide nav on page load
    showHideNav();

    //load showHideNav when we start scrolling
    $(window).scroll(function () {
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            //Show white nav
            $("nav").addClass("white-nav-top")

            //Show dark logo
            $(".navbar-brand img").attr("src", "img/logo/simonlogo-black.png")

            //Show back to top bottom
            $("#back-to-top").fadeIn()

        } else {

            //Hide white nav
            $("nav").removeClass("white-nav-top")
            $(".navbar-brand img").attr("src", "img/logo/simonlogo.png")

            //Hide back to top button
            $("#back-to-top").fadeOut()
        }
    }

});

/* ==============================================
|   |   |   | Smooth Scrolling 
================================================= */
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        var scrollPosition = ""
        
        //get section id like #about, #services, #work, #team, etc
        var section_id = $(this).attr("href");
        //console.log(section_id);

        console.log(section_id);
        switch (section_id) {
            
            case "#home": 
                scrollPosition = $(section_id).offset().top - 71
                break;
            
            case "#about":
                scrollPosition = $(section_id).offset().top + 8
                break;
            
            case "#skills":
                scrollPosition = $(section_id).offset().top - 70
                break;
                
            case "#services":
                scrollPosition = $(section_id).offset().top + 25
                break;
                
            case "#portfolio":
                scrollPosition = $(section_id).offset().top - 60
                break;
                
            case "#blog":
                scrollPosition = $(section_id).offset().top - 70
                break;
                
            case "#contact":
                scrollPosition = $(section_id).offset().top - 5
                break;
                
        }
        console.log(scrollPosition);

        
        $("html, body").animate({
                                
            //gets the vertical scroll position of this section
            scrollTop: scrollPosition

        }, 1250, "easeInQuart"); //1.25 seconds


    })
});


/* ==============================================
|   |   |   | Mobile Menu
================================================= */
$(function () {
    
    // Show mobile navigation
    $("#mobile-nav-open-btn").click(function(){
       $("#mobile-nav").css("height", "100%"); 
    });
    
    // Hide mobile navigation
    $("#mobile-nav-close-btn, #mobile-nav a").click(function(){
       $("#mobile-nav").css("height", "0%"); 
    });
    
});

/* ==============================================
|   |   |   | Animation
================================================= */
$(function () {

    //Initialize Wow.js plugin, animate on scroll
    new WOW().init();
    
});

/* Using window on load because we need to apply animation to the page when the page is fully loaded */
$(window).on('load', function () {
    
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-heading-3").addClass("animated fadeInRight");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite"); /* Animation never stops */
    
});


































