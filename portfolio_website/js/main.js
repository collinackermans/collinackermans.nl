$(window).scroll(function() {
    if ($(window).scrollTop() > 1) {
        $('header').addClass('scrolled');
        $('.scrolltotop').addClass('active');
        $('.goback').addClass('active');
        console.log('scrolled');
    } else {
        $('header').removeClass('scrolled');
        $('.scrolltotop').removeClass('active');
        $('.goback').removeClass('active');
        console.log('unscrolled');
    }
});

$('.scrolltotop').click(function(){
        $("html, body").animate({ scrollTop: 0 });
});


$('.skill-btn').click(function(){

    $('.soort-coderen, .soort-videografie,').remove();
    console.log('geklikt');


});

