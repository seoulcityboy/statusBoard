$(function () {
    var table = $("table"),
        tableSum = 0,
        tableDone = 0,
        tableUndone =0;

    //total
    $(table).each(function(){
        var tatal = $(this).find("tbody tr").length;
        $(this).find(".jsTotalNum").text(tatal);

        return  tableSum += tatal;
    });

    $(table).each(function(){
        var doneLength = 0,
            undoneLength = 0;
        var dataTr= $(this).find("tbody tr");
        $(dataTr).each(function(){
            var lastTd = $(this).find("td:last"),
                task = $(lastTd).attr("data-task");
            if(task=="0"){
                $(lastTd).addClass("undone");
                undoneLength++;
            }else if(task==="1"){
                $(lastTd).addClass("done");
                doneLength++;
            }
        });
        $(this).find(".jsUndoneNum").text(undoneLength);
        $(this).find(".jsDoneNum").text(doneLength);
        return  tableDone += doneLength,tableUndone+=undoneLength;
    });

    $("#tableSum").text(tableSum);
    $("#tableDone").text(tableDone);
    $("#tableUndone").text(tableUndone);
    if(tableDone===0){
        $("#totalPer").text("0");
    }else{
        $("#totalPer").text((100/tableSum)*tableDone);
    }
});