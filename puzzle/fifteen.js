(function () {
    "use strict";

    let randomSpace = 16;
    let currentTile = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, null];

    let initial = function() {
        let puzzlediv = $("#puzzlearea div");

        for (var i=0; i < puzzlediv.length; i++) {
            var puzzle = puzzlediv[i];
            var x = ((i % 4) * 100);
            var y = (Math.floor(i/4) * 100);

            puzzle.className = "tile";
            puzzle.id = i;
            puzzle.style.left = x + 'px';
            puzzle.style.top = y + 'px';
            puzzle.style.backgroundImage = 'url("image/tomandjerry.png")';
            puzzle.style.backgroundPosition = (-x) + 'px' + (-y) + 'px';
            puzzle.x = x;
            puzzle.y = y;
        }
    }

    initial();
})();