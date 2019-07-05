
$(document).ready(function() {
    "use strict";

    $("div.boundary").mouseenter(function() {
        $(this).addClass("lose").css({
            "background": "red"
        });
        $("#status").text("You lose!");
    });

    $('#start').click(function() {
        $("div.boundary").css({
            "background": "white"
        });
        $("#status").text('Click the "S" to begin.');
    });

    // $("#end").mouseenter(function() {
    //
    //     $("#status").text("You win!");
    // });

    //Handle cheat
    $("#maze").mouseenter(function() {
        $("#end").mouseenter(function() {
            $("#status").text("You win!");
        });
    })
});