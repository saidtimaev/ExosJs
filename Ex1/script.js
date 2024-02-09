
const forme = document.querySelector('.forme');

forme.addEventListener('click', afficherAlerte);



function afficherAlerte(){

    const forme = document.querySelector('.forme');
    const style = getComputedStyle(forme)
    const backgroundColor = style.backgroundColor;
    const color = style.color;
    const height = style.height;
    const width = style.width;
    const display = style.display;
    const fontFamily = style.fontFamily;
    const fontSize = style.fontSize;

    alert('Class : ' + forme.className + 
            '\n - Background color : ' + backgroundColor + 
            '\n - Color : ' + color +
            '\n - Height : ' + height + 
            '\n - Width : ' + width +
            '\n - Display : ' + display +
            '\n - Display : ' + fontFamily + ' (' + fontSize + ')'
    );

}