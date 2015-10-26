$(document).ready(function () {

    $("#backBtn").click(function () {
        setHtml('body', 'tmp/jj-table.html');
    });

    var candidateRes = [];
    $.each(window.score, function (i, v) {
        for (var j = 0; j < window.score[0].length; j++) {
            if (!candidateRes[j]) candidateRes[j] = 0;
            candidateRes[j] += window.score[i][j];
        }
    });

    var winnerIndex = 0, candidateLabels = [];
    for (var i = 0; i < window.score[0].length; i++) {
        if (candidateRes[i] > candidateRes[winnerIndex]) winnerIndex = i;
        candidateLabels.push("C" + (i + 1));
    }
    $("#currentWinner").html(candidateLabels[winnerIndex]);

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