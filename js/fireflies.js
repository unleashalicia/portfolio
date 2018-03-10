var startX, startY, xCoordinate, yCoordinate;

animate();


function animate(){
    for (var i=1; i<21; i++){
        startX = Math.random() * 100;
        startY = Math.random() * 100;
        var opacityArr = [0, 1];
        var opacity = opacityArr[Math.floor(Math.random()*2)];
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
    var duration = Math.random() * 5;
    var opacity = Math.abs(opacity - 1);
    var wait = (Math.random() * 6000000) + 1000000;

    $('.firefly:nth-child('+i+')').animate({
        opacity: opacity
    });

    setTimeout(function(){flicker(i, opacity)}, (duration * 1000));
    setTimeout(function(){
        die(i);
    }, wait);
}

function die(i){
    $('.firefly:nth-child('+i+')').animate({
        opacity: 0
    }).remove();
}


