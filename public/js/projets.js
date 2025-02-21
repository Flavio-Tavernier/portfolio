$(function() {

    getContentForCard("html-css-php");

    $(".btn-rotated").click(function () {
        let langage = $(this).attr("id").slice(4);
        getContentForCard(langage);
    })

    setTimeout(() => {
        $(".img-preview").click(function()
        {
            let element = $(this).attr("id").split('-');
            let projet = element[2];
            let nbImages = element[3];

            getImgForPopup(projet, nbImages)
        });

        $("#btn-fermer-popup-img-projet").click(function() {
            $("#container-popup-img-projet").css("display", "none")  
        });
    }, 500);
})


function getContentForCard(langage) {
    fetch('langages_projets\\' + langage + '.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors du chargement du fichier');
            }
            return response.text();
        })
        .then(data => {
            manageCardContentToDisplay(data);
            return data
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
}

function getImgForPopup (projet, nbImages) {
    let carousel = $('.carousel');
    carousel.flickity('destroy');

    let balisesImg = "";

    for (let i = 1; i <= nbImages; i++) {
        balisesImg += `<div class="carousel-cell"><img src="style/images/${projet}/${projet}-${i}.png" class="img-popup" alt=""></div>`;
    }

    $(".carousel").html(balisesImg);

    $("#titre-popup-img-projet").html(projet.toUpperCase());

    $("#container-popup-img-projet").css("display", "block");
    carousel.flickity();
}   


  


