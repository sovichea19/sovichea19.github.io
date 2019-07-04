// $(document).ready(function () {
//     $("div.boundary").mouseenter(function () {
//         $(this).addClass("youlose").css({
//             "background": "red"
//         });
//         $("h2#status").append("<h3>").text("You LOSER! You have moved over the element : " + $(this).attr("class"));
//     });
//     $("#start").click(function () {
//         $("div.boundary").css({
//             "background": "white"
//         });
//     });
//
//     $("#end").mouseenter(function () {
//         $("h2#status").append("<h3>").text("You win. Congratulations!");
//     })
// });

"use strict";

$(document).ready(function() {
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