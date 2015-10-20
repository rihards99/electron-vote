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

$(document).ready(function () {
    
    generateTable();
    
    $("#backBtn").click(function(){
        setHtml('body', 'tmp/start.html');
    });
    
    $("#resultsBtn").click(function(){
        setHtml('body', 'tmp/jj-results.html');
    });
    
//    $("input[type='radio']").change(function (e) {
//        var score = {opt1: 0, opt2: 0, opt3: 0};
//
//        $.each($("input[type='radio']"), function (k, v) {
//            if ($(v).is(':checked')) {
//                score[$(v).val()] += 1;
//            }
//        });
//
//        var maxKey = getHighestValueKey(score);
//        $("#currentWinner").html("C" + (parseInt(maxKey)+1));
//    });
});