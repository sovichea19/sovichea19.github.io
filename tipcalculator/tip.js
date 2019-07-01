function calcTip() {
    var subtotalElem = document.getElementById('subtotal');
    var tipElem = document.getElementById('tip');
    var totalElem = document.getElementById('total');
    var subtotal = parseFloat(subtotalElem.value);
    var tip = parseFloat(tipElem.value);
    var total = subtotal * (tip + 100) / 100;
    totalElem.innerHTML = '$' + total;
}