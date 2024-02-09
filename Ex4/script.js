const container = document.querySelector('.container');

const carre = document.createElement('div')





carre.classList.add('carres');
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

        container.append(newCarre);
        carre.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    }
});


document.addEventListener('keydown', function(event) {
    // Si on appui sur la touche HAUT
    if (event.key === 'ArrowUp') {


        container.lastChild.remove();
    }
});