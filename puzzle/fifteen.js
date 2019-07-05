$(document).ready(function () {

    let randomSpace = 16;
    let currentTile = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, null];


    initial = function () {
        let puzzlediv = $('#puzzlearea div');
        for (var i = 0; i < puzzlediv.length; i++) {
            var puzzle = puzzlediv[i];
            // calculate x and y for this piece
            var x = ((i % 4) * 100);
            var y = (Math.floor(i / 4) * 100);
            // set basic style and background
            puzzle.className = "puzzlepiece";
            puzzle.id = i;
            puzzle.style.left = x + 'px';
            puzzle.style.top = y + 'px';
            puzzle.style.backgroundImage = 'url("tomandjerry.png")';
            puzzle.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
            puzzle.x = x;
            puzzle.y = y;
        }
    };
    initial();

    $("#puzzlearea div").click(function () {
        let blankspace = currentTile.indexOf(null);
        let nearbyPieces = [null, null, null, null];
        let index = 0;
        if (blankspace > 3) {
            let up = blankspace - 4;
            nearbyPieces[0] = currentTile[up];
        }
        if ((blankspace % 4) >= 0 && (blankspace % 4) < 3) {
            let right = blankspace + 1;
            nearbyPieces[1] = currentTile[right];
        }
        if (blankspace < 12) {
            let down = blankspace + 4;
            nearbyPieces[2] = currentTile[down];
        }
        if ((blankspace % 4) <= 3 && (blankspace % 4) > 0) {
            let left = blankspace - 1;
            nearbyPieces[3] = currentTile[left];
        }
        let divId = parseInt(this.id);
        //verifies if the piece can be moved
        if (nearbyPieces.includes(divId)) {
            let PiecePosition = nearbyPieces.indexOf(divId);
            currentTile[blankspace] = divId;
            let y = parseInt(this.style.top);
            let x = parseInt(this.style.left);
            let newY = 0;
            let newX = 0;
            switch (PiecePosition) {
                case 0:
                    currentTile[blankspace - 4] = null;
                    newY = y + 100;
                    this.style.top = newY + 'px';
                    break;
                case 1:
                    currentTile[blankspace + 1] = null;
                    newX = x - 100;
                    this.style.left = newX + 'px';
                    break;
                case 2:
                    currentTile[blankspace + 4] = null;
                    newY = y - 100;
                    this.style.top = newY + 'px';
                    break;
                case 3:
                    currentTile[blankspace - 1] = null;
                    newX = x + 100;
                    this.style.left = newX + 'px';
                    break;
                default:
            }
        }
    });

    //When the user clicks shuffle button
    $("#shufflebutton").click(function () {
        let divs = $(".puzzlepiece");
        var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        function shuffle(o) {
            for (var j, x, i = o.length;
                 i; j = parseInt(Math.random() * i),
                     x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        };
        var random = shuffle(numbers);
        randomSpace = parseInt(Math.random() * 15);
        let afterBlank = false;


        for (var i = 0; i <= divs.length; i++) {
            if (randomSpace === i) {
                afterBlank = true;
                currentTile[i] = null;
            } else {
                var div;
                let randomindex;
                if (afterBlank) {
                    randomindex = random[i - 1];
                    // div = divs[randomindex];
                } else {
                    randomindex = random[i];
                }
                currentTile[i] = randomindex;
                div = divs[randomindex];
                var x = (((i) % 4) * 100);
                var y = (Math.floor((i) / 4) * 100);
                div.style.left = x + 'px';
                div.style.top = y + 'px';
            }
        }
    });

});