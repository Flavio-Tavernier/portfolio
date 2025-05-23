<?php 

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
    <title>Flavio TAVERNIER</title>
</head>
<body>
    <div id="nav-bar">
        <a class="btn-navbars btn-top-navbar" href="accueil" id="btn-accueil">Accueil</a>
    </div>

    <div id="nav-bar-smartphone">
        <div id="menu">
            <div id="menu-bar" onclick="navbarSmartphoneOnClick()">
                <div id="bar1" class="bar"></div>
                <div id="bar2" class="bar"></div>
                <div id="bar3" class="bar"></div>
            </div>
            <nav class="nav" id="nav">
                <ul>
                <li><a href="accueil">Accueil</a></li>
                </ul>
            </nav> 
        </div>
        <div class="menu-bg" id="menu-bg"></div>
    </div>


    <div id="nav-bar-underline"></div>

    

    
    <script src="js/bibliotheques/jquery/jquery-3.7.1.slim.min.js"></script>    
</body>
</html>




