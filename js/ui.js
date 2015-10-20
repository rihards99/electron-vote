function setHtml(selector, path) {
    $.get(path, function(data){
        $(selector).html(data);
    });
}

function getHighestValueKey(score) {
    var highestKey = null;
    $.each(score, function (k, v) {
        if (!highestKey || score[k] > score[highestKey])
            highestKey = k;
    });
    return highestKey;
}