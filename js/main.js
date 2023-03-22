// toggle menu
$(`.toggle-icon`).click(function (){
    $('nav').toggleClass('toggle-menu')
});

$(`a`).click(function (){
    $('nav').removeClass('toggle-menu');
});

// When the user scrolls the page, execute myFunction

$(window).scroll(function ()
{
    if($(this).scrollTop()>1){
        $('#header').addClass("scrol");
    }else{
        $('#header').removeClass("scrol");
    }
});

//client carousel fuction

if (jQuery('#client').length) {
    jQuery('#client').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dotsEach: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items:2
            },
            1140: {
                items:3
            },
        }
    })
}