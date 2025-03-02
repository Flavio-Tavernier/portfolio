$(function() {

    setContexte("personnel");

    $(".btn-contexte").click(function() {
        let contexte = $(this).attr("id").slice(4);

        setContexte(contexte);

    });


    $(".btn-contexte").each(function () {
        $(this).click(function () {
            $(".btn-contexte").each(function () {
                $(this).removeClass("padd-increased-top")
            }) 
    
            $(this).addClass("padd-increased-top");
        })
    }) 
})

function setContexte(contexte) {
    let contentNavBar = "";

    switch (contexte) {
        case 'personnel':
            contentNavBar = `
                <a id="btn-/personnel/html-css-php" class="btn-rotated btn-navbars padd-increased"><p>HTML/CSS/PHP</p></a>
                <a id="btn-/personnel/python" class="btn-rotated btn-navbars"><p>Python</p></a>`;        
            break;
        case 'professionnel':
            contentNavBar = `
                <a id="btn-/professionnel/html-css-php" class="btn-rotated btn-navbars padd-increased"><p>HTML/CSS/PHP</p></a>`;        
            break;
        case 'scolaire':
            contentNavBar = `
                <a id="btn-/scolaire/html-css-php" class="btn-rotated btn-navbars padd-increased"><p>HTML/CSS/PHP</p></a>
                <a id="btn-/scolaire/java" class="btn-rotated btn-navbars"><p>Java</p></a>
                <a id="btn-/scolaire/csharp" class="btn-rotated btn-navbars"><p>C#</p></a>
                <a id="btn-/scolaire/python" class="btn-rotated btn-navbars"><p>Python</p></a>`;        
            break;
        default:
            contentNavBar = `
                <a><p>QUE FAIS-TU LÀ ?</p></a>`;  
            break;
    }
    $(".nav-bar-content-left").html(contentNavBar);

    getContentForCard(`/${contexte}/html-css-php`);

    $(".btn-rotated").click(function () {
        let langage = $(this).attr("id").slice(4);

        getContentForCard(langage);
    })

    $(".btn-rotated").each(function () {
        $(this).click(function () {
            $(".btn-rotated").each(function () {
                $(this).removeClass("padd-increased")
            }) 
    
            $(this).addClass("padd-increased");
        })
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
}


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
    let carousel = $('.carousel').flickity();
    carousel.flickity('destroy');

    let balisesImg = "";

    for (let i = 1; i <= nbImages; i++) {
        balisesImg += `<div class="carousel-cell"><img src="style/images/${projet}/${projet}-${i}.png" class="img-popup" alt=""></div>`;
    }

    $(".carousel").html(balisesImg);

    $("#titre-popup-img-projet").html(projet.toUpperCase());
    $("#container-popup-img-projet").css("display", "block");

    carousel.flickity({
        autoPlay: true,
        wrapAround: true, 
        imagesLoaded: true,
    });
}   


  


