window.onload = function(){
  initMap();
  $.get('data/OP_DTL_OWNRSHP_PGYR2016_P06302017.csv', function(data){
  $('#result').append(arrayToTable(Papa.parse(data).data));
});
}


function arrayToTable(tableData) {
    var table = $('<table></table>');
    $(tableData).each(function (i, rowData) {
        var row = $('<tr></tr>');
        $(rowData).each(function (j, cellData) {
            row.append($('<td>'+cellData+'</td>'));
        });
        table.append(row);
    });
    return table;
}


/*
$.ajax({
        type: "GET",
        url: "data/OP_DTL_OWNRSHP_PGYR2016_P06302017.csv",
        dataType: "text",
        success: function (data) {
            $('#result').append(arrayToTable(Papa.parse(data).data));
        },
        error: function (jqXHR, exception) {
            var msg = '';
            if (jqXHR.status === 0) {
              msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
              msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
              msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
              msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
              msg = 'Time out error.';
            } else if (exception === 'abort') {
              msg = 'Ajax request aborted.';
            } else {
              msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            console.log(msg);
          }
    });

    */
