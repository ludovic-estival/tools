document.addEventListener("DOMContentLoaded", load);

function load(){
    document.getElementById("valid").addEventListener('click',generer,false);
    document.getElementById("passLen").addEventListener('click',majRange,false);
}

//valeur range visible
//text result disable puis enable quand result générer

var motPasse;

function generer(){
//vérifier les cases cochées
//récupérer valeur range
//génération
}








function majRange(){
    var valeur = document.getElementById("passLen").value;
    document.getElementById("rangeVal").innerHTML = valeur; 
}