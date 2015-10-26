function generateTable() {
    var html = "<tr><th>Expert</th>";
    for (i = 0; i < window.score[0].length; i++) { 
        html += "<th>C" + (i+1) + "</th>";
    }
    html += "</tr>";
    $.each(window.score, function(k,v){
        html += "<tr><td>" + (parseInt(k)+1) + "</td>";
        for (i = 0; i < window.score[0].length; i++) { 
            html += "<td><input type='radio' name='exp"+k+"' value='"+i+"'></td>";
        }
        html += "</tr>";
    });
    $(".table").html(html);
}

function calculateResults() {
    $.each($("input[type='radio']"), function (k, v) {
        if ($(v).is(':checked')) {
            var expNumber = parseInt($(v).attr('name').substring(3));
            window.score[expNumber][parseInt($(v).val())] += 1;
        }
    });
}

$(document).ready(function () {
    
    generateTable();
    
    $("#backBtn").click(function(){
        setHtml('body', 'tmp/start.html');
    });
    
    $("#resultsBtn").click(function(){
        calculateResults();
        setHtml('body', 'tmp/jj-results.html');
    });
});