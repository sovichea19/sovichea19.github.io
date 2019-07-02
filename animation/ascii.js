"use strict";

/**
 * Author: Sovichea Cheth
 * ID: 985421
 */

var text, animation, size, speed;
var interval;

window.onload = function() {
    text = document.getElementById("textarea");
    animation = document.getElementById("animation");
    size = document.getElementById("size");
    speed = document.getElementById("speed");
};

// text = document.getElementById("textarea");
// animation = document.getElementById("animation");
// size = document.getElementById("size");

function start() {
    //We will have to split the animation with split frame
    let splitFrame = text.value.split("=====\n");
    let i = 0, f = splitFrame.length;

    (function loop() {
        text.value = splitFrame[i];

        if (++i < f) {
            setTimeout(loop, 250)
        }
    })();
};

function stop(time) {
    interval = clearInterval();
}

//When the user clicks on start button
function startAnimation() {
    interval = setInterval(start, 250);
}

//When the user selects animation drop down
function setAnimation() {
    var animate = animation.options[animation.selectedIndex].innerHTML;
    alert(animate);
    text.value = ANIMATIONS[animate];
}

//When the user selects size
function setSize() {
    var fontsize = size.options[size.selectedIndex].value;
    text.style.fontSize = fontsize;
}

//When the user check the box
function setSpeed() {
    var turbo = speed.checked;
    //alert(turbo);
    if(turbo === true) {
        interval = setInterval(start, 50);
    } else {
        interval = setInterval(start, 250);
    }
}

