// jQuery(document).ready(listo);

// function listo() {
//   jQuery(".hamburger").click(function (e) {
//     e.preventDeafult();
//     jQuery("header .container nav").toggleClass("open");

//     jQuery(".hamburger i").toggleClass("fa-circle-xmark");
//   });
// }

$(document).ready(function() {
    $(".hamburger").click(function(){
        $("header .container nav").toggleClass("open");

        $(".hamburger i").toggleClass("fa-circle-xmark");
    });
    // esto es para remover el menu despleglable y se vaya a la pagina solicitada
    $("header .container nav a").click(function(){

        $("header .container nav").removeClass("open");
        $(".hamburger i").removeClass("fa-circle-xmark");


        var dev = $(this).attr("href");
        $("html,body").animate({
            "scrollTop": $(dev).offset().top - 76
        });

    });
});
