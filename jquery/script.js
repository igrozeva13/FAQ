$(document).ready(function(){
    $("#plus-1").click(function(){
        $("#answer-box-1").slideDown(750);
        $("#minus-1").slideDown(0);
        $("#plus-1").slideUp(0);
    });

    $("#minus-1").click(function(){
        $("#answer-box-1").slideUp(750);
        $("#minus-1").slideUp(0);
        $("#plus-1").slideDown(0);
    });

    $("#plus-2").click(function(){
        $("#answer-box-2").slideDown(750);
        $("#minus-2").slideDown(0);
        $("#plus-2").slideUp(0);
    });

    $("#minus-2").click(function(){
        $("#answer-box-2").slideUp(750);
        $("#minus-2").slideUp(0);
        $("#plus-2").slideDown(0);
    });
});
