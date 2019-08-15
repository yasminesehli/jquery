function bold()
{
   
    var getText= document.getElementById("textarea");
    getText.style.fontWeight="Bolder";
   
}
function Italic()
{
   
    var getText= document.getElementById("textarea");
    getText.style.fontStyle="italic";
}

function under()
{
    var getText= document.getElementById("textarea");
    getText.style.textDecoration="Underline"; 
}


function Size(){
    var myselect = document.getElementById("list");   
    var size = myselect.options[myselect.selectedIndex].value;   
    document.getElementById("textarea").style.fontSize= size+"px";  
}
function Font() {
    var myselect = document.getElementById("list2");   
    var font = myselect.options[myselect.selectedIndex].value;   
    document.getElementById("textarea").style.fontFamily = font;  
}

$(".block button").css("opacity","0");

$(".imageblock1").mouseenter(
    function(){
        $(".imageblock1").css({"opacity":"0.5"});
        $(".button1").css("opacity","1");
    }
)

$(".imageblock1").mouseleave(
    function(){
        $(".imageblock1").css("opacity","1");
        $(".button1").css("opacity","0");
    }
)
$(".imageblock2").mouseenter(
    function(){
        $(".imageblock2").css({"opacity":"0.5"});
        $(".button2").css("opacity","1");
    }
)

$(".imageblock2").mouseleave(
    function(){
        $(".imageblock2").css("opacity","1");
        $(".button2").css("opacity","0");
    }
)
$(".imageblock3").mouseenter(
    function(){
        $(".imageblock3").css({"opacity":"0.5"});
        $(".button3").css("opacity","1");
    }
)

$(".imageblock3").mouseleave(
    function(){
        $(".imageblock3").css("opacity","1");
        $(".button3").css("opacity","0");
    }
)


$(".imageblock4").mouseenter(
    function(){
        $(".imageblock4").css({"opacity":"0.5"});
        $(".button4").css("opacity","1");
    }
)

$(".imageblock4").mouseleave(
    function(){
        $(".imageblock4").css("opacity","1");
        $(".button4").css("opacity","0");
    }
)




$(".imageblock5").mouseenter(
    function(){
        $(".imageblock5").css({"opacity":"0.5"});
        $(".button5").css("opacity","1");
    }
)

$(".imageblock5").mouseleave(
    function(){
        $(".imageblock5").css("opacity","1");
        $(".button5").css("opacity","0");
    }
)





$(".imageblock6").mouseenter(
    function(){
        $(".imageblock6").css({"opacity":"0.5"});
        $(".button6").css("opacity","1");
    }
)

$(".imageblock6").mouseleave(
    function(){
        $(".imageblock6").css("opacity","1");
        $(".button6").css("opacity","0");
    }
)


$(".imageblock7").mouseenter(
    function(){
        $(".imageblock7").css({"opacity":"0.5"});
        $(".button7").css("opacity","1");
    }
)

$(".imageblock7").mouseleave(
    function(){
        $(".imageblock7").css("opacity","1");
        $(".button7").css("opacity","0");
    }
)


$(".imageblock8").mouseenter(
    function(){
        $(".imageblock8").css({"opacity":"0.5"});
        $(".button8").css("opacity","1");
    }
)

$(".imageblock8").mouseleave(
    function(){
        $(".imageblock8").css("opacity","1");
        $(".button8").css("opacity","0");
    }
)


$(".imageblock9").mouseenter(
    function(){
        $(".imageblock9").css({"opacity":"0.5"});
        $(".button9").css("opacity","1");
    }
)

$(".imageblock9").mouseleave(
    function(){
        $(".imageblock9").css("opacity","1");
        $(".button9").css("opacity","0");
    }
)

// $("img").css("opacity","0");






