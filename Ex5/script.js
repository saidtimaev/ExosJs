const container = document.querySelector('.container');

const carre = document.createElement('div')


// Initialisation du compteur à 0
let compteur = 0;



carre.classList.add('carres');
carre.style.border = '1px solid black';
carre.style.display = 'inline-block';
carre.style.verticalAlign = 'top';
carre.style.height = '60px';
carre.style.width = '60px';
carre.style.backgroundColor = 'white';
carre.style.margin = '0';



document.addEventListener('keydown', function(event) {
    // Si on appui sur la touche BAS
    if (event.key === 'ArrowDown') {

        // Va afficher 225 cases exactement
        if (compteur < 225){
            compteur++;

        let newCarre = carre.cloneNode();

        container.append(newCarre);
        carre.style.backgroundColor = 'white';
        } 
    }
});


document.addEventListener('keydown', function(event) {
    // Si on appui sur la touche HAUT
    if (event.key === 'ArrowUp') {

        // Supprime la dernière case
        container.lastChild.remove();
    }
});

// Quand on clique sur une case
document.addEventListener('click', function(event) {
    
    // Si la case sur laquelle on clique fait partie de la div .container
    if (container.contains(event.target)){
        // Changer le background color de la case à black
        event.target.style.backgroundColor = 'black';
    }
    
   
});