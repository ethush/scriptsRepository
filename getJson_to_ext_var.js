/**
 * Get the values from a URL using Ajax and return them to an external variable for further processing.
 */

var json = (function () {
    var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': $the_url,
            'dataType': "json",
            'success': function (data) {
                   json = data;
            }
        });
    return json;
})();
