$(document).ready(function () {

    $("#backBtn").click(function () {
        setHtml('body', 'tmp/jj-table.html');
    });

    var candidateRes = [];
    $.each(window.score, function (i, v) {
        for (var j = 0; j < window.score[0].length; j++) {
            if (!candidateRes[j])
                candidateRes[j] = 0;
            candidateRes[j] += window.score[i][j];
        }
    });

    console.log(candidateRes);

    var winnerIndex = 0, largest = 0, candidateLabels = [], multipleWinners = [];
    for (var i = 0; i < window.score[0].length; i++) {
        if (window.score[i] > largest) {
            winnerIndex = i;
            largest = window.score[i];
        }

        if (window.score[i] === largest) {
            multipleWinners.push("C" + (i + 1));
        }

        candidateLabels.push("C" + (i + 1));
    }
    console.log(multipleWinners);
//    $("#currentWinner").html(candidateLabels[winnerIndex]);
    if (window.limit >= multipleWinners.length) {
        $(".alert").addClass("alert-success");
        $("#currentWinner").html(candidateLabels[winnerIndex]);
    } else {
        $(".alert").addClass("alert-warning");
        for (var i = 0; i < multipleWinners.length; i++) {
            $("#currentWinner").append(multipleWinners[i] + ", ");
        }
        $("#currentWinner").append(" Limit is " + window.limit + ", Desired result is not achieved !");
    }

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