
const forme = document.querySelector('.forme');

forme.addEventListener('click', afficherAlerte);



// Fonction qui va afficher une alerte avec les toutes les propriétés et leurs valeurs de la classe .forme
function afficherAlerte(){

    // Crée un élement forme à partir de .forme <div>
    const forme = document.querySelector('.forme');
    console.log(forme);
    // Renvoie un objet qui contient toutes les propriétés style de .forme
    const style = getComputedStyle(forme)
    console.log(style)
    // On définit différentes propriétés à .forme
    const backgroundColor = forme.style.backgroundColor;
    const color = style.color;
    const height = style.height;
    const width = style.width;
    const display = style.display;
    const fontFamily = style.fontFamily;
    const fontSize = style.fontSize;

    //Affiche une alerte avec les propriétés style de forme et le valeurs
    alert('Class : ' + forme.className + 
            '\n - Background color : ' + backgroundColor + 
            '\n - Color : ' + color +
            '\n - Height : ' + height + 
            '\n - Width : ' + width +
            '\n - Display : ' + display +
            '\n - Display : ' + fontFamily + ' (' + fontSize + ')'
    );

}