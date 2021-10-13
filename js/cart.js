$('.add-cart,.add-cart-w').on('click', function () {
    var cart = $('#cart'),
        imgtodrag = $(this).parent('.pd-card').find("img").eq(0),
        cartTotal = cart.attr('data-totalitems'),
        newCartTotal = parseInt(cartTotal) + 1;
    if (imgtodrag) {
        var imgclone = imgtodrag.clone().offset({
            top: imgtodrag.offset().top,
            left: imgtodrag.offset().left
        }).css({
            'opacity': '0.5',
            'position': 'absolute',
            'height': '150px',
            'width': '150px',
            'z-index': '2000'
        }).appendTo($('body')).animate({
            'top': cart.offset().top + 15,
            'left': cart.offset().left + 15,
            'width': 10,
            'height': 10
        }, 500);
        
        setTimeout(function () {
            cart.addClass('shake').attr('data-totalitems', newCartTotal);
        }, 500);
        setTimeout(function () {
            cart.removeClass('shake');
        }, 1000);

        imgclone.animate({
            'width': 0,
            'height': 0
        },function() {
            $(this).detach()
        });
    } 
});