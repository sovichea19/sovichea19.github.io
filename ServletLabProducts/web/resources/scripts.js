$(function() {
    $('#btnAdd').click(addProduct);

    function addProduct() {
        var productName = $('#productName').val();
        var productPrice = $('#productPrice').val();
        var products = {name: productName, price: productPrice};

        $.post(
            'product',
            {product: JSON.stringify(products)},
            processData,
            'json'
        );
    }

    function processData(data) {
        var td1 = $('<td>').text(data.id);
        var td2 = $('<td>').text(data.name);
        var td3 = $('<td>').text(data.price);
        var tr = $('<tr').append(td1).append(td2).append(td3);
        $('tbody').append(tr);
    }
})