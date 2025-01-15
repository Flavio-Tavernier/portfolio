$(function() {
    getContentForCard("professionnel");

    $(".btn-rotated").click(function () {
        let section = $(this).attr("id").slice(4);
        getContentForCard(section);   
    }) 
})


function getContentForCard(section) {
    fetch('sections_accueil\\' + section + '.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors du chargement du fichier');
            }
            return response.text();
        })
        .then(data => {
            manageCardContentToDisplay(data);
            changePage();
            
            return data
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
}



function changePage() {
    $("#arrow-right, #arrow-left").click(function() {
        destinationPage = $(this).attr("destination");
        getContentForCard(destinationPage)
    })
}
