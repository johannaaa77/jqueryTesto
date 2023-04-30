//$("h1").hide();
//$(document).ready(function(){

//});

$(function(){

    $("p").css({"backgroud-color": "red"});

});
$(function(){

    $("#segundo").css({"backgroud-color": "blue"});

});
$(function(){

    $(".primero").css({"backgroud-color": "purple"});

});
$(function(){

    $("button").click(function(){
        alert("Hola");
    });

});
//$(function(){
    //$("button").click(function(){
   // $("#segundo").hide();
//});

//});
$(function(){

    $("btn-hide").dblclick(function(){
        $("#segundo").hide();
    });

});


$(function(){

    $("btn-show").click(function(){
        $("#segundo").show();
    });

});

$(function(){

    $(".primero").mouseenter(function(){
        $("#segundo").hide();
    });

});

$(function(){

    $(".primero").mouseleave(function(){
        $("#segundo").show();
    });

});


$(function(){

    $(".primero").mouseenter(function(){
        $("#segundo").fadeOut();
    });

});

$(function(){

    $(".primero").mouseleave(function(){
        $("#segundo").fadeIn();
    });

});

$(function(){

    $(".primero").mouseenter(function(){
        $("#segundo").slideDown();
    });

});


$(function(){

    $(".primero").mouseleave(function(){
        $("#segundo").slideUp();
    });

});

$(function(){

    $(".primero").animate({width: "300px"});

    $(".primero").mouseenter(function(){
        $("#segundo").slideDown();
    });

});


$(function(){

    $("#btn-hide").click(function(){
        alert($("#segundo").text());

    });

    

});


$(function(){

    $("#btn-hide").click(function(){
        alert($("#segundo").html());

    });

    

});


$(function(){

    $("#btn-hide").click(function(){
        alert($("#segundo").attr("title"));

    });

    

});



$(function(){

    $("#btn-hide").click(function(){
        $("#segundo").text("hola");

    });

    

});



$(function(){

    $("#btn-hide").click(function(){
        $("#segundo").html("hola <strong>programadores</strong>");

    });

    

});


$(function(){

    $("#btn-hide").click(function(){
        $("#segundo").append("hola <strong>programadores</strong>");

    });

    

});


$(function(){

    $("#btn-hide").click(function(){
        $("#segundo").prepend("hola <strong>programadores</strong>");

    });
  

});


$(function(){

    $("#btn-hide").click(function(){
        $("#segundo").after("<p>hola <strong>programadores</strong></p>");

    });
 

});



$(function(){

    $("#btn-hide").click(function(){
        $("#segundo").before("<p>hola <strong>programadores</strong></p>");

    });

});



$(function(){

    $("#btn-hide").click(function(){
        $("#segundo").remove();

    });

});

$(function(){

    $("#btn-hide").click(function(){
        $("#btn-show").empty();

    });

});


$(function(){

    $("#btn-hide").click(function(){
        $("h1").addClass("red");

    });

});


$(function(){

    $("#btn-hide").click(function(){
        $("h1").removeClass("red");

    });

});


$(function(){

    $("#btn-hide").click(function(){
        $("h1").toggleClass("red");

    });

});