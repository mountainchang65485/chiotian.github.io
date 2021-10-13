
var tab_h = $('.sub-option-wrap').height(),
    tab_h_num = parseInt(tab_h); 
     $('.sub-option-wrap').css('top',`-${tab_h_num}px`);
// $('li.tab_method').click(function(){
// });
// $(window).resize(function(){
//     $('.sub-option-wrap').css('top',`-${tab_h_num}px`);
// })
// $('ul.main-option li.active').mouseover(function(){
// }).mouseleave(function(){
//     $('.sub-option-wrap').css('top','0%');
// });

// $('.sub-option-wrap').mouseover(function(){
//       $(this).css('top',`-${tab_h}px`);
// }).mouseleave(function(){
//     setTimeout(function(){
//         $('.sub-option-wrap').css('top','0%');
//     },100);
// });