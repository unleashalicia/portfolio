
$(document).ready(
    function(){
        $( "#email" ).append( $("<a>",{text: "alicia.adams.evans@gmail.com",href:"mailto:alicia.adams.evans@gmail.com"}));

        $("#aliciaName").css({
            color: "rgba(255, 255, 255, 1)",
            fontSize: "4rem",
            filter: "blur(2px)"
        });


        setTimeout(function(){
            $("#aliciaName").css({
                textShadow: "10px 10px 30px black"
            })
        }, 200);

        setTimeout(function(){
            $("#aliciaName").css({
                filter: "blur(0px)"
            });
        }, 300);

    }
);

