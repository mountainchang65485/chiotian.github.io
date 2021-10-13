TweenLite.set("#container #container02",{perspective:600})
TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})
var total = 10,
    total02 =10;
var warp = document.getElementById("container"),
    warp02=	document.getElementById("container02"),
    w = $('.page_content').width() , 
    h = $('.page_content').height();
for (i=0; i<total; i++){ 
  let Div = document.createElement('div');
  TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
  warp.appendChild(Div);
  animm(Div);
}
for (i=0; i<total02; i++){ 
  let Div = document.createElement('div');
  TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
  warp02.appendChild(Div);
  animm(Div);
}
function animm(elm){   
  TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
  TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
  TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
};
function R(min,max) {return min+Math.random()*(max-min)};