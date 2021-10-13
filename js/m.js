
/* Burger nav */
$('.burger, .overlay, a.main-option, #xx').click(function(){
    $('.burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('aside').toggleClass('show');
    $('body').toggleClass('overflow');
});

$(' #pd-list-menu,.pd-list-menu-dropdown').mouseover(function(){
   $('.pd-list-menu-dropdown').addClass('droped');
}).mouseleave(function(){
   $('.pd-list-menu-dropdown').removeClass('droped');
});