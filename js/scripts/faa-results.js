$(document).ready(function () {

    $("#backBtn").click(function () {
        candidateRes.length=0;
        candidateRes=[]; 
        setHtml('body', 'tmp/faa-table.html');
    });

    // Found in js/scripts/start.js
    var result  = calculateWinners(candidateRes, window.limit);

    //  Generate labels for every result value in the chart
    var candidateLabels = [], textString="";
    for (var i = 0; i < candidateRes.length; i++) {
        candidateLabels.push("C" + (i + 1));
        textString= textString+"C" + (i + 1)+'='+candidateRes[i]+"<br/>";
    }

    $(".alert").addClass("alert-" + result.status);
    $("#currentWinner").html(result.msg);

    var ctx = $("#chart").get(0).getContext("2d");
    var data = {
        labels: candidateLabels,
        datasets: [
            {
                label: "Votes per candidate",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: candidateRes
            }
        ]
    };
    
    var myBarChart = new Chart(ctx).Bar(data, {
        responsive: true
    });
   // document.getElementById('Results').innerHTML= "<h3>"+textString+"</h3>"; 
});