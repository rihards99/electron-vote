$(document).ready(function () {

    $("#backBtn").click(function () {
        setHtml('body', 'tmp/faa-table.html');
    });


    var winnerIndex = 0, candidateLabels = [], Largest=0, MultipleWinners=[];
    for (var i = 0; i < vaar.length; i++) {
        if (vaar[i] > Largest){
            winnerIndex = i;
            Largest = vaar[i];
        }
        if(vaar[i] == Largest){
            MultipleWinners.push("C" + (i + 1));
        }
        candidateLabels.push("C" + (i + 1));
    }
    if(window.limit >= MultipleWinners.length){
        $(".alert").addClass("alert-success");
        for(var i=0; i<MultipleWinners.length;i++){
            $("#currentWinner").append(MultipleWinners[i]+", ");
        }
         $("#currentWinner").append(" Congratulations !");
    }else {
        $(".alert").addClass("alert-warning");
        for (var i=0; i < MultipleWinners.length;i++){
            $("#currentWinner").append(MultipleWinners[i]+", ");
        }
        $("#currentWinner").append(" Limit is "+window.limit+", Desired result is not achieved !");
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
                data: vaar
            }
        ]
    };
    console.log(MultipleWinners.length);
    console.log(window.limit);
    var myBarChart = new Chart(ctx).Bar(data, {
        responsive: true
    });
});