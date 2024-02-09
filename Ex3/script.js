const cases = document.querySelector('.container');


const listeCases = cases.querySelectorAll('.carre');

let jouerActuel = 'X';

let compteurTours = 0;


const auTourDe = document.querySelector('.auTourDe');
auTourDe.innerHTML = "It's X turn!";

listeCases.forEach(function(element){

    

    element.addEventListener('click', cocher)



})

function cocher(Event){

    Event.currentTarget.innerHTML = jouerActuel;

    const auTourDe = document.querySelector('.auTourDe');


    if ( jouerActuel === 'X'){
        jouerActuel = 'O';
        Event.currentTarget.style.color = 'red';
        auTourDe.innerHTML = "It's O turn!";
        compteurTours++;
    } else {
           jouerActuel = 'X';
        Event.currentTarget.style.color = 'green';
        auTourDe.innerHTML = "It's X turn!";
        compteurTours++;
    }

    if (compteurTours == 9){
        auTourDe.innerHTML = "Partie terminée!";
    }
    

    Event.currentTarget.removeEventListener('click', cocher);
    
}

