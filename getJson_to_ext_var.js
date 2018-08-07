var json = (function () {
    var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': mapas[j],
            'dataType': "json",
            'success': function (data) {
                   json = data;
            }
        });
    return json;
})();
