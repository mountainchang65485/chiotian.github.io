TweenLite.set("#petals-wrap",{perspective:600})
TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})
var total =10,
    total02 =2;
var warp = document.getElementById("petals-wrap"),
    // warp02=	document.getElementById("container02"),
    w = window.innerWidth * 0.5 , 
    h = warp.innerWidth * -1;
for (i=0; i<total; i++){ 
  let Div = document.createElement('div');
  TweenLite.set(Div,{attr:{class:'petals'},x:R(0,w),y:R(200,150),z:R(-200,200)});
  warp.appendChild(Div);
  animm(Div);
}
var tl_p = gsap.timeline({repeat:-1, repeatDelay:0});
tl_p.to('.petals',{opacity:1,ease:Sine.easeInOut,delay:-0.5,duration:1,stagger:{each:0.2,from:0}})
    .to('.petals',{opacity:0,ease:Sine.easeInOut,delay:-1,duration:1.5,stagger:{each:0.5,from:0}})
function animm(elm){   
  TweenMax.to(elm,R(6,15),{y:h-100,ease:Linear.easeNone,repeat:-1,delay:-15});
  TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut(1.7)});
  TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut(1.7),delay:-5});
};
function R(min,max) {return min+Math.random()*(max-min)};
