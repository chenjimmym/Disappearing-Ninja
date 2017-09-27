$(document).ready(function(){
    // alert("ready");
    $("img").click(function(){
        $(this).hide(800);
    });

    $("button").click(function(){
        $("img").show(800);
    })
});

