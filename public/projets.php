<?php

include "header.php";



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/projet.css">
    <link rel="stylesheet" href="js/bibliotheques/flickity/flickity.css">
    <title>Document</title>
</head>
<body>



        <div id="titre-projets" class="titre-onglets">
            PROJETS
        </div>


    
        

    <div id="container-content-projets" class="container-content">

        <div class="nav-bar-content-top">
            <!-- https://www.flaticon.com/fr/auteurs/christ-design -->
            <a id="btn-personnel" class="btn-contexte btn-navbars padd-increased-top"><img class="logo-nav-bar-projets" src="style/logosNavBarProjets/logoHome.png" alt=""></a>
            <!-- https://www.flaticon.com/fr/auteurs/najmunnahar -->
            <a id="btn-professionnel" class="btn-contexte btn-navbars"><img class="logo-nav-bar-projets" src="style/logosNavBarProjets/logoMallette.png" alt=""></a>
            <!-- https://www.flaticon.com/fr/auteurs/those-icons -->
            <a id="btn-scolaire" class="btn-contexte btn-navbars"><img class="logo-nav-bar-projets" src="style/logosNavBarProjets/logoDiplome.png" alt=""></a>
        </div>

        <div id="container-projets" class="container-content">

        

            <div class="nav-bar-content-left">
                <a id="btn-html-css-php" class="btn-rotated btn-navbars padd-increased"><p>HTML/CSS/PHP</p></a>
                <a id="btn-java" class="btn-rotated btn-navbars"><p>Java</p></a>
                <a id="btn-csharp" class="btn-rotated btn-navbars"><p>C#</p></a>
                <a id="btn-python" class="btn-rotated btn-navbars"><p>Python</p></a>
            </div>

            <div class="borderline-content">
                <div class="wrapper">
 
                </div>
            </div>
        </div>


        <div id="container-popup-img-projet">
            <div id="popup-container-titre" class="titre-containers">
                <p id="titre-popup-img-projet">GSB</p>
                <button id="btn-fermer-popup-img-projet">FERMER</button>
            </div>
            <div id="popup-container-img">
                <div class="carousel">
                </div>
            </div>
        </div>
    </div>

<script src="js/projets.js"></script>
<script src="js/commun.js"></script>
<script src="js/bibliotheques/flickity/flickity.pkgd.min.js"></script>
</body>
</html>


<?php

include "footer.php";



?>