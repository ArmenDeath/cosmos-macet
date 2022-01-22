$(function(){
    $('.slider__box').slick({
        prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/arrow-left.png" alt="left">',
        nextArrow: '<img class="slider__arrow slider__arrow-rigth" src="images/arrow-rigth.png" alt="rigth">',
    });


    $('.menu-btn').on('click', function(){
        $('.menu__list').toggleClass('active');
    });

});