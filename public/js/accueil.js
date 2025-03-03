$(function() {
    getContentForCard("presentation");

    $(".btn-rotated").click(function () {
        let section = $(this).attr("id").slice(4);
        getContentForCard(section);   
    }) 


    $("#btn-competences").click(function() {
        setTimeout(() => {
            initializeRadarChart()
        }, 500);  
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
            return data
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
}


