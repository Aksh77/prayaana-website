$( document ).ready(function() {
    $("#aboutlink").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 600);
    });
    $("#contactlink").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 600);
    });
    $("#gallerylink").click(function() {
        location.href = 'gallery.html';
    });

    $("#homelink").click(function() {
        location.href = 'index.html';
    });

});