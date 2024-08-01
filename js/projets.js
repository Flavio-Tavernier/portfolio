$(function() {


    $(".btn-rotated").each(function () {
        $(this).click(function () {
            $(".btn-rotated").each(function () {
                $(this).removeClass("padd-increased")
            }) 

            $(this).addClass("padd-increased");
        })
    }) 


    function increasePaddBtnRotated(elem) {
        elem.css("padding-right", "2.5px");
        elem.css("padding-left", "2.5px");
    }

    function decreasePaddBtnRotated(elem) {
        elem.css("padding-right", "0px");
        elem.css("padding-left", "0px");
    }


})




