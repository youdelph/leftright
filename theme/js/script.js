const MAIN = document.getElementById('main');
const BTN_LEFT = document.getElementById('btn-left');
const BTN_RIGHT = document.getElementById('btn-right');

let contenuMain = '';

function affichageMain (direction) {
    contenuMain = '<img src=".\\theme\\images\\' + direction + '.png " alt="' + direction +'"></img><p>Vous avez cliqué sur le bouton ' + direction.toUpperCase() + '</p>';
    MAIN.innerHTML = contenuMain;
}


BTN_LEFT.addEventListener("click", function(event){
    affichageMain('left');
}, false);

BTN_RIGHT.addEventListener("click", function(event){
    affichageMain('right');
}, false);