let interval;

function biggerDecoration() {
    //alert("Hello World");
    //document.getElementById('text').style.fontSize = '24pt';

    interval = setInterval(fontTimer, 500);
    //clearInterval(interval);
}

function checkbox() {
    //alert("Hello World");

    if (document.getElementById('bling').checked === true) {
        document.getElementById('text').style.fontWeight = 'bold';
        document.getElementById('text').style.color = 'green';
        document.getElementById('text').style.textDecoration = 'underline';
        document.body.style.backgroundImage = "url('hundred-dollar-bill.jpg')";
    } else {
        document.getElementById('text').style.fontWeight = 'normal';
        document.getElementById('text').style.color = 'black';
        document.getElementById('text').style.textDecoration = 'normal';
        document.body.style.backgroundImage = "";
    }
}

function fontTimer() {
    var text = document.getElementById('text');
    var fontSize = window.getComputedStyle(text, null).getPropertyValue('font-size');
    document.getElementById('text').style.fontSize = parseInt(fontSize) + 2 + 'px';
}

function pigLatin() {
    var text = document.getElementById("text").value;
    document.getElementById('text').value = translatePigLatin(text);
}

//Function to translate to pig latin
function translatePigLatin(str) {
    // Create variables to be used
    var pigLatin = '';
    var regex = /[aeiou]/gi;

    // Check if the first character is a vowel
    if (str[0].match(regex)) {
        pigLatin = str + 'way';

    } else {

        // Find how many consonants before the first vowel.
        var vowelIndice = str.indexOf(str.match(regex)[0]);

        // Take the string from the first vowel to the last char
        // then add the consonants that were previously omitted and add the ending.
        pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
    }

    return pigLatin;
}