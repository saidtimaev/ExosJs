const container = document.querySelector('.container');

const carre = document.createElement('div')




// Ajoute class .carres à l'element carre
carre.classList.add('carres');
// Ajoute des propriétés à la classe .carres de l'element carre
carre.style.display = 'inline-block';
carre.style.verticalAlign = 'top';
carre.style.height = '60px';
carre.style.width = '60px';
carre.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
carre.style.margin = '0';


document.addEventListener('keydown', function(event) {
    // Si on appui sur la touche BAS
    if (event.key === 'ArrowDown') {


        let newCarre = carre.cloneNode();

        // Ajoute des carrés à l'élément div .container
        container.append(newCarre);
        carre.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    }
});


document.addEventListener('keydown', function(event) {
    // Si on appui sur la touche HAUT
    if (event.key === 'ArrowUp') {

        // Supprime le dernier carré crée
        container.lastChild.remove();
    }
});