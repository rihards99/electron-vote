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

function validateResults() {
    var errorExp = null;
    $.each(window.score, function (i, v) {
        var checked = false;
        $.each($("input[name='exp"+i+"']"), function (k, v) {
            if ($(v).is(':checked')) checked = true;
        });
        
        if (!checked) {
            errorExp = parseInt(i)+1;
            return false;
        }
    });
    return errorExp;
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
    
    $(".alert").hide();
    generateTable();
    
    $("#backBtn").click(function(){
        setHtml('body', 'tmp/start.html');
    });
    
    $("#resultsBtn").click(function(){
        
        var validationError = validateResults();
        if (validationError !== null){
            $(".alert").show();
            $("#errorMsg").html("Expert "+validationError+" not filled in!");
            return;
        }
        
        calculateResults();
        setHtml('body', 'tmp/jj-results.html');
    });
});