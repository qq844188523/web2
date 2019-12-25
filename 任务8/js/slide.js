 window.onload = function() {
    var list = document.querySelector('.slide-img');
    var img = document.querySelectorAll('.slide-img img');
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var button = document.querySelector('.slide-button').getElementsByTagName('span');
    var slide = document.querySelector('.slide');
    var index = 0;
    var img1 = document.createElement('img');
    img1.src = img[0].src;
    list.appendChild(img1); 
    var img2 = document.createElement('img');
    img2.src = img[img.length-1].src;
    list.insertBefore(img2,img[0]);

    function animate(offset) {
        var speed = offset/70;
        var animate = true;
        var newLeft = parseInt(list.style.left) + offset;
        function go(){
            if ( (speed > 0 && parseInt(list.style.left) < newLeft) || (speed < 0 && parseInt(list.style.left) > newLeft)) {
                        list.style.left = parseInt(list.style.left) + speed + 'em';
                        setTimeout(go, 10);
            }else {       
                animated=false;
                list.style.left=newLeft+"em";
                if (newLeft >-75) {
                    list.style.left=-300+"em";
                }
                if (newLeft <-300) {
                    list.style.left=-75+"em";
                } 
            }
        }

        go();
        
    }


    prev.onclick = function() {             
        animate(75);
        showbutton(-1);
    }
    next.onclick = function() {  
        animate(-75);
        showbutton(1);
    }

    function showbutton(m){
       for(var i=0;i<button.length;i++){
            if(button[i].className == "on"){
                button[i].className = "";
            }
       }
        index =index+m;
       if(index<0){
            index = 3;
       }else if(index>3){
            index = 0;
       }
       button[index].className = "on";
    }

    function play(){
        timer=setInterval(function(){
            next.onclick();
        },4000);
    }
    function stop(){
        clearInterval(timer);
    }
   play();
    slide.onmouseover=stop;
    slide.onmouseout=play;

}