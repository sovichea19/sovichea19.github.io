"use strict";

/**
 * Author: Sovichea Cheth
 * ID: 985421
 */

let speed = 250;
let index = 0;
let timer;

window.onload = function () {
    document.getElementById("start").onclick = function () {
        controlDisable(true);
        let animation = document.getElementById("animation").value;
        let contents = ANIMATIONS[animation];
        contents = contents.split("=====\n");
        timer = setInterval((contents) => {
            document.getElementById("text-area").value = contents[index];
            index === contents.length - 1 ? index = 0 : index++;
        }, speed, contents);

    };

    document.getElementById("stop").onclick = function () {
        controlDisable(false);
        index = 0;
        clearInterval(timer);
        timer = null;
        document.getElementById("text-area").value = "";
    };

    function controlDisable(active) {
        document.getElementById("start").disabled = active;
        document.getElementById("stop").disabled = !active;
        document.getElementById("animation").disabled = active;
    }

    document.getElementById("fontsize").addEventListener("change", event => {
        document.getElementById("text-area").style.fontSize = event.target.value;
    });

    document.getElementById("turbo").addEventListener("change", event => {
        event.target.checked ? speed = "50" : speed = "250";
    });

};







