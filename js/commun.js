$(".btn-navbars").click(function() {
    console.log("click");

    elem = $(this);


    if ($(this).find("btn-rotated")) {
        $(".btn-navbars").removeClass("selected-language")
        elem.addClass("selected-language")
    }
    else if ($(this).find("btn-top-navbar")) {
        console.log("ouiiiii");
    }


    

    

})


function increasePaddBtnRotated(elem) {
    elem.css("padding-right", "2.5px");
    elem.css("padding-left", "2.5px");
}

function decreasePaddBtnRotated(elem) {
    elem.css("padding-right", "0px");
    elem.css("padding-left", "0px");
}

