$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img src="img/icons/Arrowleft.svg" alt="" class="arrow-left">',
        nextArrow: '<img src="img/icons/Arrowrigth.svg" alt="" class="arrow-rigth">',
       
        
    });


    $('.logo__logo').on('click', function(){
        $('.menu').addClass('active');
    });
    $('.close-btn').on('click', function(){
        $('.menu').removeClass('active');
    });
   
});