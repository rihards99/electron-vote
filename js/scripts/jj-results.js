$(document).ready(function () {

    $("#backBtn").click(function () {
        candidateRes.length=0;
        candidateRes=[]; 
        $.each(window.score, function (i, v) {
        for (var j = 0; j < window.score[0].length; j++) {
            window.score[i][j]=0;
        }
    });
        setHtml('body', 'tmp/jj-table.html');
    });

    // Calculate results for every candidate out of the score recieved
    var candidateRes = [];
    $.each(window.score, function (i, v) {
        for (var j = 0; j < window.score[0].length; j++) {
            if (!candidateRes[j])
                candidateRes[j] = 0;
            candidateRes[j] += window.score[i][j];
        }
    });
    
    // Found in js/scripts/start.js
    var result  = calculateWinners(candidateRes, window.limit);

    //  Generate labels for every result value in the chart
    var candidateLabels = [];
    for (var i = 0; i < candidateRes.length; i++) {
        candidateLabels.push("C" + (i + 1));
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
});