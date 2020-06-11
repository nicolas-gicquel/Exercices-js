// DOM - Document Object Model

// Définir l'interface

const form = document.querySelector('#course-form');
const listeTache = document.querySelector('.collection');
const supprimeListe = document.querySelector('.supprimer-course');
const contenuTache = document.querySelector('#contenuTache');
const filter = document.querySelector('#filter');

//Application

malisteTache()

function malisteTache() {
    // Ajouter un évènement
    form.addEventListener('submit', ajouterUneTache);

    //Supprimer une tâche
    listeTache.addEventListener('click', supprimerUneTache);

    //Nettoyer la liste de tâche
    supprimeListe.addEventListener('click', nettoyerLaListe);

    // Filtrer le tâches
    filter.addEventListener('keyup', filtrerLesTaches);

}

//Ajouter une tâche

function ajouterUneTache(event) {
    if (contenuTache.value === '') {
        alert('Ajoutez une tâche')
    }
    event.preventDefault();

    //Ajouter une balise
    const li = document.createElement('li');

    //Ajouter une class dans <li>
    li.className = "collection-item";

    //Relier le contenu du formulaire dans <li>
    li.appendChild(document.createTextNode(contenuTache.value));

    //Créer le lien <a>
    const link = document.createElement('a');

    // Ajouter une class à <a>
    link.className = 'delete-item secondary-content';

    // Ajouter l'icone
    link.innerHTML = '<ion-icon name="close-circle"></ion-icon>';

    // Relier <a> dans le <li>
    li.appendChild(link);

    // Relier  <li> à <ul>
    listeTache.appendChild(li);

    contenuTache.value = '';
}

//Supprimer une tâche

function supprimerUneTache(event) {
    if (event.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Voulez vraiment supprimer?'))
            event.target.parentElement.parentElement.remove();
    }
}

//Nettoyer la liste de tâche

function nettoyerLaListe() {
    listeTache.innerHTML = '';
}

// Filtrer

function filtrerLesTaches(event) {
    const contenuClavier = event.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function(tache) {
            const motCle = tache.firstChild.textContent;
            if (motCle.toLocaleLowerCase().indexOf(contenuClavier) != -1) {
                tache.getElementsByClassName.display = 'block'
            } else {
                tache.style.display = 'none';
            }
        }
    );
    console.log(contenuClavier);
}