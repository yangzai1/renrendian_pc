'use strict';
function getPos(obj){
    var l = 0;
    var t = 0;
    while(obj){
        l += obj.offsetLeft;
        t += obj.offsetTop;

        obj = obj.offsetParent;

    }
    return {left:l,top:t};

}

window.onresize=window.onscroll=window.onload = function () {
    var aImg=document.getElementsByTagName('img');
    for(var i=0;i<aImg.length;i++){
        var clientH=document.documentElement.clientHeight;
        var scrollT=document.documentElement.scrollTop || document.body.scrollTop;
        if(getPos(aImg[i]).top<(clientH+scrollT)){
            aImg[i].src=aImg[i].getAttribute('_src');
        }
    }
};