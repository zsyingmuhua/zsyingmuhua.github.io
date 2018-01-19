
$(function(){

    $(".part4").find("dl").mouseover(function(){
        $(".part4").find("dl").find("strong").css("background","#019dce");
        $(this).find("strong").css("background","#ed1c22");

    });

    $("body").mouseenter(function(){
        $(".zhsh-img").find("li").find("h1").stop().css("bottom","-41px");
    });

    $(".zhsh-img").find("li").mouseenter(function(){
        $(".zhsh-img").find("li").find("h1").stop().css("bottom","-41px");
        $(this).find("h1").animate({"bottom":"6px"},300);

    });



    //导航js
    $(".nav-ul").find("li").hover(function(){

        $(".nav-ul").find("li").find(".second-ul").css("display","none");

        $(this).find(".second-ul").css("display","block");
    })


    $(".nav-ul").find("li").mouseleave(function(){

        $(".nav-ul").find("li").find(".second-ul").css("display","none");

    });


});