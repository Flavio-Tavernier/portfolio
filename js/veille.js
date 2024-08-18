$(function() {

    getContentForCard("informatique");

    $(".btn-rotated").click(function () {
        let domaine = $(this).attr("id").slice(4);
        getContentForCard(domaine); 
    }) 




})


function getContentForCard(domaine) {
    fetch('domaines_veille\\' + domaine + '.html')
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