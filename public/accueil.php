<?php

include "header.php";

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/accueil.css">
    <title>Document</title>
</head>
<body>
    <div id="titre-accueil" class="titre-onglets">
        ACCUEIL
    </div>
    

    <div class="container-content">

        <div class="nav-bar-content">
            <a id="btn-presentation" class="btn-rotated btn-navbars padd-increased"><p>Présentation</p></a>
            <a id="btn-scolaire" class="btn-rotated btn-navbars"><p>Scolaire</p></a>
            <a id="btn-professionnel" class="btn-rotated btn-navbars"><p>Professionnel</p></a>
        </div>


        <div class="borderline-content">
            <div id="arrow-left" class="arrows arrows-display-none"></div>
            
            <div class="wrapper"></div>    
        </div>

    </div>


<script src="js/accueil.js"></script>
<script src="js/commun.js"></script>
</body>
</html>


<?php

include "footer.php";

?>