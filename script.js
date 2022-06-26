
/**/
const unit = 40;
/**/

/**/
const speed = 2.5; // todo: throw an error if unit % speed !== 0
/**/

/**/
var keys = {
    /**/
    w: { pressed: 0 },
    a: { pressed: 0 },
    s: { pressed: 0 },
    d: { pressed: 0 },
    /**/
}

/**/
var canvas = document.querySelector("canvas");
/**/

/**/
canvas.width  = 11 * unit;
/**/
canvas.height = 13 * unit;
/**/

/**/
var ctx = canvas.getContext("2d");
/**/

/**/
var map = new Map(ctx, unit, "blue");
/**/

/**/
var player = new Player(ctx, map, unit, speed, 1, 1, 12, true, "yellow"); // try to change keepMoving property
/**/

/**/
function animate(){
    /**/
    window.requestAnimationFrame(animate);
    /**/
    if (player.isMoving()){
        /**/
        player.animationCallback();
        /**/
    }
    /**/
    if (keys.w.pressed){ player.setNextDirection("U"); player.isMoving() ? void(0) : player.canGo("U") && player.goTo("U") && player.setMoving(1); }
    if (keys.s.pressed){ player.setNextDirection("D"); player.isMoving() ? void(0) : player.canGo("D") && player.goTo("D") && player.setMoving(1); }
    if (keys.a.pressed){ player.setNextDirection("L"); player.isMoving() ? void(0) : player.canGo("L") && player.goTo("L") && player.setMoving(1); }
    if (keys.d.pressed){ player.setNextDirection("R"); player.isMoving() ? void(0) : player.canGo("R") && player.goTo("R") && player.setMoving(1); }
    /**/
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    /**/
    map.render();
    /**/
    player.render();
    /**/
}

/**/
animate();
/**/

/**/
window.addEventListener("keydown", (e) => {
    /**/
    switch (e.key){
        /**/
        case "z": keys.w.pressed = 1; break; // be careful with the keys I have a qwerty keyboard with an azerty configuration
        case "q": keys.a.pressed = 1; break;
        case "s": keys.s.pressed = 1; break;
        case "d": keys.d.pressed = 1; break;
        /**/
    }
});

/**/
window.addEventListener("keyup", (e) => {
    /**/
    switch (e.key){
        /**/
        case "z": keys.w.pressed = 0; break;
        case "q": keys.a.pressed = 0; break;
        case "s": keys.s.pressed = 0; break;
        case "d": keys.d.pressed = 0; break;
        /**/
    }
});