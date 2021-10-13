
$(document).ready(function(){
    $(".first-layer").click(function(){
          $('.first-layer').removeClass('main-menu-active');
          $('.deco-dots-outline').removeClass('deco-dots-active');
          $('ul.subs > li > a').removeClass('rollover');
          $(this).addClass("main-menu-active");
          $(this).find('.deco-dots-outline').toggleClass('deco-dots-active');
          
    }).mouseover(function(){
      $(this).addClass("rollover") //滑鼠移入這個元素時新增class(rollover)
    }).mouseout(function(){
      $(this).removeClass("rollover") //滑鼠移開這個元素時移除class(rollover)
    });
    
  $('#st-trigger-effects').on('click',function(){
      $('#st-container').toggleClass('st-menu-open close-trigger');
      $(this).toggleClass('close-trigger');
      $('.top-slash').toggleClass('rotate-top');
      $('.mid-slash').toggleClass('slash-hide');
      $('.btm-slash').toggleClass('rotate-btm');
      $('.st-menu').toggleClass('menu-open');
  });
  $('#st-container').click(function(){
      $(document).find('.close-trigger').removeClass('st-menu-open close-trigger');
      $(document).find('.burger-bar').removeClass('rotate-top slash-hide rotate-btm');
      $(document).find('.st-menu').removeClass('menu-open');
  })
 
})