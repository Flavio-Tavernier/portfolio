$(function() {

    getContentForCard("html-css-php");

    $(".btn-rotated").click(function () {
        let langage = $(this).attr("id").slice(4);
        getContentForCard(langage);
    })

    setTimeout(() => {
        $(".img-preview").click(function()
        {
            let id = $(this).attr("id").slice(4);
            console.log(id);
        });
    }, 1000);
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



  


