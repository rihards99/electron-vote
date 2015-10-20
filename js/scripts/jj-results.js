$(document).ready(function () {
    
    $("#backBtn").click(function(){
        setHtml('body', 'tmp/jj-table.html');
    });
    
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Votes per candidate'
        },
        xAxis: {
            categories: ['opt1', 'opt2', 'opt3','opt1', 'opt2', 'opt3','opt1', 'opt2', 'opt3']
        },
        yAxis: {
            title: {
                text: 'Votes'
            }
        },
        series: [{
            name: 'Votes',
            data: [1, 2, 4,1, 2, 4,1, 8, 4]
        }]
    });
});