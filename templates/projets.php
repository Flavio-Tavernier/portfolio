<?php

include "header.php";



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/projet.css">
    <title>Document</title>
</head>
<body>



        <div id="titre-projets">
            PROJETS
        </div>


    

    <div id="container-projets-donut">

        <div id="container-projets">

            <div id="nav-bar-projets">
                <a id="btn-php" class="btn-rotated btn-navbars padd-increased"><p>PHP</p></a>
                <a id="btn-html-css" class="btn-rotated btn-navbars"><p>HTML/CSS</p></a>
                <a id="btn-java" class="btn-rotated btn-navbars"><p>Java</p></a>
                <a id="btn-csharp" class="btn-rotated btn-navbars"><p>C#</p></a>
                <a id="btn-python" class="btn-rotated btn-navbars"><p>Python</p></a>
            </div>


            <div id="borderline-projects">
                <div class="wrapper">
                    <div class="item"><div>php-1</div></div>
                </div>
            </div>


        </div>

        <div id="container-donut-projets">
            <div id="empeche-survol-souris-donut"></div>
            <canvas id="chart"></canvas>
        </div>
    </div>




<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="../js/chart.js"></script>
<script src="../js/projets.js"></script>
</body>
</html>


<?php

include "footer.php";



?>