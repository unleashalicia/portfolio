var startX, startY, xCoordinate, yCoordinate, duration, opacity;

animate();


function animate(){
    for (var i=1; i<21; i++){
        startX = Math.random() * 100;
        startY = Math.random() * 100;
        opacityArr = [0, 1];
        opacity = opacityArr[Math.floor(Math.random()*2)];
        $('.firefly:nth-child('+i+')').css({
            left: startX + '%',
            top: startY + '%',
            opacity: opacity
        });
        move(i);
        flicker(i, opacity);
    }

}


function move(i){
    duration = 2 + (Math.random() * 8);
    xCoordinate = Math.random() * 100;
    yCoordinate = Math.random() * 100;

    $('.firefly:nth-child('+i+')').animate({
        left: xCoordinate +'%',
        top: yCoordinate + '%',
        easing: 'linear',
        duration: duration
    });

    setTimeout(function(){move(i)}, (duration * 1000));
}

function flicker(i, opacity){
    duration = Math.random() * 5;
    opacity = Math.abs(opacity - 1);

    $('.firefly:nth-child('+i+')').animate({
        opacity: opacity
    });

    setTimeout(function(){flicker(i, opacity)}, (duration * 1000));
}


