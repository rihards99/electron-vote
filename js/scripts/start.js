function initScore() {
    window.score = {};
    for (i = 0; i < $("#experts").val(); i++) { 
        window.score[i] = [];
        for (j = 0; j < $("#candidates").val(); j++) {
            window.score[i][j] = 0;
        }
    }
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