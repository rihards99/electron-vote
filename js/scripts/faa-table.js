
function generateTable() {
    var html = "<tr><th>Expert</th>";
    vaar=[];    
    for (i = 0; i < window.score[0].length; i++) { 
        html += "<th>C" + (i+1) + "</th>";
        vaar[i]=0;
    }
    html += "</tr>";
    $.each(window.score, function(k,v){
        html += "<tr><td>" + (parseInt(k)+1) + "</td>";
        for (i = 0; i < window.score[0].length; i++) { 
        html += "<td><select name='"+i+"'> <option value='0'>Abstain</option> <option value='1'>For</option> <option value='-1'>Against</option>  </select></td>";
        }
        html += "</tr>";
    });
    $(".table").html(html);
}
function calculateResults() {
   $.each($("select"), function (k, v) {
       Vote = parseInt($(v).attr('name'));
       vaar[Vote] = parseInt($(v).val()) + vaar[Vote];     
    });
}
$(document).ready(function () {
    
    generateTable();
    
    $("#backBtn").click(function(){
        setHtml('body', 'tmp/start.html');
    });
    
    $("#resultsBtn").click(function(){
        calculateResults();
        //console.log(vaar);
        setHtml('body', 'tmp/faa-results.html');
    });
    

});