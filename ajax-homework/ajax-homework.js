"use strict";

$(function() {
   $('#dropdown').change(function() {
        var file = "files/" + $('#dropdown').val();
        $.ajax({
            'url': file,
            'type': 'GET',
            'success': ajaxSuccess,
            'error': ajaxError
        });
   });
});

function ajaxSuccess(data) {
    $('#output').val(data);
}

function ajaxError(xhr, station, exception) {
    console.log(xhr, status, exception);
}