const cases = document.querySelector('.container');


const listeCases = cases.querySelectorAll('.carre');

// Variable qui va permettre de remplir la case cliquée selon le joueur actuel
let jouerActuel = 'X';

// Compteur de tours
let compteurTours = 0;


const auTourDe = document.querySelector('.auTourDe');

// Affiche la personne qui doit jouer en premier
auTourDe.innerHTML = "It's X turn!";


// A chaque element de listeCases on va ajouter un écouteur d'évènement sur click qui appelera la fonction cocher
listeCases.forEach(function(element){

    

    element.addEventListener('click', cocher)



})

function cocher(Event){

    // Va afficher X ou O dans la case cliquée
    Event.currentTarget.innerHTML = jouerActuel;

    // Va afficher à qui de jouer à tour suivant
    const auTourDe = document.querySelector('.auTourDe');


    //Si le joueur actuel est X on va changer le joueur actuel à O pour le tour suivant
    if ( jouerActuel === 'X'){
        jouerActuel = 'O';
        // Le X s'affichera en rouge
        Event.currentTarget.style.color = 'red';
        // On va afficher que c'est au tour de O de jouer
        auTourDe.innerHTML = "It's O turn!";
        // On compte les tours joués
        compteurTours++;
    } else {
        // Si le joueur actuel est O
           jouerActuel = 'X';
        // Le O s'affichera en vert  
        Event.currentTarget.style.color = 'green';

        // On va afficher que c'est au tour de X de jouer 
        auTourDe.innerHTML = "It's X turn!";
        // On compte les tours joués
        compteurTours++;
    }

    // Si 9 tours on été joués on affiche que la partie est terminée
    if (compteurTours == 9){
        auTourDe.innerHTML = "Partie terminée!";
    }
    
    // Enlèves l'écouteur d'évènement à la fin pour qu'on ne puisse plus recliquer sur la case
    Event.currentTarget.removeEventListener('click', cocher);
    
}

