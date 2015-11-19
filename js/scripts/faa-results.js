$(document).ready(function () {

    $("#backBtn").click(function () {
        setHtml('body', 'tmp/faa-table.html');
    });

    // Found in js/scripts/start.js
    var result  = calculateWinners(vaar, window.limit);

    //  Generate labels for every result value in the chart
    var candidateLabels = [];
    for (var i = 0; i < vaar.length; i++) {
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
                data: vaar
            }
        ]
    };

    var myBarChart = new Chart(ctx).Bar(data, {
        responsive: true
    });
});