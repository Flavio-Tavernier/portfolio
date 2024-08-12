$(function() {


    $(".btn-rotated").each(function () {
        $(this).click(function () {
            $(".btn-rotated").each(function () {
                $(this).removeClass("padd-increased")
            }) 

            $(this).addClass("padd-increased");

            changeProjetsAffiches($(this).attr("id"));
        })

        
        
    }) 


    function changeProjetsAffiches(idOfbutton) {
        $(".wrapper").html("");

        switch(idOfbutton) {
            case 'btn-php' :
                $(".wrapper").append('<div class="item"><div>php-1</div></div>');
                break;
            case 'btn-html-css' :
                $(".wrapper").append('<div class="item"><div>box-1</div></div> <div class="item"><div>box-1</div></div> <div class="item"><div>box-1</div></div>');
                break;
            case 'btn-java' :
                $(".wrapper").append('<div class="item"><div>box-1</div></div>');
                break;
            case 'btn-csharp' :
                $(".wrapper").append('<div class="item"><div>box-1</div></div> <div class="item"><div>box-1</div></div> <div class="item"><div>box-1</div></div>');
                break;
            case 'btn-python' :
                    $(".wrapper").append('<div class="item"><div>box-1</div></div>');
                    break;
            default :
                console.log("bouton inconnu");
        }
    }


})




