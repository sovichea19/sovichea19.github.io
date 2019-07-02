"use strict";

var text, animation, size;

text = document.getElementById("textarea");
animation = document.getElementById("speed");
size = document.getElementById("size");

function start() {
    var splitFrame = text.value.split("=====\n");
    var i = 0, f = splitFrame.length;

    (function loop() {
        text.value = splitFrame[i];

        if (++i < f) {
            setTimeout(loop, 250)
        }
    })();
};

function stop(time) {

}

function startAnimation() {
    var time = setInterval(start, 250);
}

function setAnimation() {
    var animate = animation.options[animation.selectedIndex].innerHTML;
    text.value = ANIMATIONS[animate];
}

function setSize() {
    var fontsize = size.options[size.selectedIndex].value;
    text.style.fontSize = fontsize;
}

