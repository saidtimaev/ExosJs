

const valeurEuros = document.querySelector('input');

const valeurFrancs = document.querySelector('.affichageFrancs');


// L'écouteur d'évènement a été ajouté lorsque on écrit quelque chose dans champ d'un <input>
valeurEuros.addEventListener("input", function(){

    // Si la valeur de la balise <input> est une chaîne de caractères
    if (typeof valeurEuros.value === 'string'){
        valeurFrancs.innerHTML = 'Vous devez saisir une valeur numérique!';
    }else {
        // parseFloat permet de transformer une chaîne de caractères en un nombre flottant, toFixed() spécifie combien de chiffres après la virgule afficher
        valeurFrancs.innerHTML = parseFloat(valeurEuros.value * 6.55957).toFixed(2) + ' francs';
    }

})

