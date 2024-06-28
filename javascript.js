document.onkeydown = function(e){
    console.log("key code is:", e.keyCode)
    if(e.keyCode==38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if(e.keyCode==39){
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left =  dinox + 112 + "px";
    }
    if(e.keyCode==37){
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left =  (dinox - 112) + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.dino');
    obstacle = document.querySelector('.obstacle')

    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy =  parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy =  parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX = math.abs(dx-ox);
    offsety = math.abs(dy-oy);
    consol.log(offsetX , offsetY)
    if(offsetX93 && offsetY <52){
        gameOver.style.visibility= 'visible';
        obstacle.classList.remove('obstacleAni')
    }
    else{
        score+=1;
        updateScore(score);
    }

}, 100);

function updateScore(score){
    scoreCont.innerHTML = "your Score: " +sore

}
