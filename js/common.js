/*防複製*/
document.oncontextmenu = function(){
    return false;
}
document.onselectstart = function(){
    return false;
}
document.onmousedown = function(){
    return false;
}