function initScore() {
    window.score = {};
    window.limit=0;
    for (i = 0; i < $("#experts").val(); i++) { 
        window.score[i] = [];
        for (j = 0; j < $("#candidates").val(); j++) {
            window.score[i][j] = 0;
        }
    }
    window.limit=$("#limit").val();
}

$(document).ready(function () {
    $("#errorDiv").hide();
    
    $("#jj").click(function(){
        initScore();
        setHtml('body', 'tmp/jj-table.html');
    });
    
    $("#faa").click(function(){
        initScore();
        setHtml('body','tmp/faa-table.html');
    });
});

function calculateWinners(results, limit) {
    // Gets concatenated string of winner candidates for the msg string.
    function getWinnerString(w) {
        var wStrings = [];
        $.each(w, function(k,v){
            wStrings.push("C" + (v+1));
        });
        return wStrings.join(", ");
    }
    
    var unique = [], winners = [], ranks = {}, res = {};
    $.each(results, function(key,val){
        // Filter out duplicate values in result scores
        if($.inArray(val, unique) === -1) unique.push(val);
        
        // Rank candidates by results
        if (!ranks[val]) {
            ranks[val] = [key];
        } else {
            ranks[val].push(key);
        }
    });
    
    // Sort in result scores descending order
    unique.sort(function(a,b){
        return b - a;
    });
    
    // Find winner(-s) and check if the results are valid
    $.each(unique, function(key,val){
        // Got winner(-s) from current rank, but need more
        if (winners.length + ranks[val].length < limit) {
            Array.prototype.push.apply(winners, ranks[val]); // merge arrays
        }
        // Got enough winners from current rank to suffice limit
        else if (winners.length + ranks[val].length == limit) {
            Array.prototype.push.apply(winners, ranks[val]); // merge arrays
            res.status = "success";
            res.msg = "Winners: " + getWinnerString(winners);
            return false; // breaks the $.each loop
        }
        // Current rank has more cadidates than the limit - more winners than the needed
        else {
            Array.prototype.push.apply(winners, ranks[val]); // merge arrays
            res.status = "warning";
            res.msg = "Warning: vote has " + (winners.length + ranks[val].length) + 
                      " winners: " + getWinnerString(winners) + " (specified limit was " + limit + ")." +
                      " Tie between " + getWinnerString(ranks[val]);
            return false; // breaks the $.each loop
        }
    });
    return res;
}