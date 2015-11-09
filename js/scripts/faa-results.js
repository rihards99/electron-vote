$(document).ready(function () {

    $("#backBtn").click(function () {
        setHtml('body', 'tmp/faa-table.html');
    });


    var winnerIndex = 0, candidateLabels = [];
    for (var i = 0; i < vaar.length; i++) {
        if (vaar[i] > vaar[i+1]) winnerIndex = i;
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
                data: vaar
            }
        ]
    };
    var myBarChart = new Chart(ctx).Bar(data, {
        responsive: true
    });
});