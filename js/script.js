$(document).ready(function() {
    
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 900) {
            $('.header-3').addClass('header-top');
            $('.par-lead').addClass('paragraph-top');
            $('.link-tailor-made').addClass('link-top');
        } else {
            $('.header-3').removeClass('header-top');
            $('.par-lead').removeClass('paragraph-top');
            $('.link-tailor-made').removeClass('link-top');
        }

    });

    $(window).scroll(function(){
        let position = $(this).scrollTop();
        console.log(position);
        if(position >= 2100) {
            $('.info-card').addClass('card-left');
            $('.address-card').addClass('card-right');
        } else {
            $('.info-card').removeClass('card-left');
            $('.address-card').removeClass('card-right');
        }
    });

    $('#slider-one').carousel({
        interval: 4000,
    });

});