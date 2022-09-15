function load(){
    /*document.getElementById("0").addEventListener('click',ajouter,false);
    document.getElementById("1").addEventListener('click',ajouter,false);
    document.getElementById("2").addEventListener('click',ajouter,false);
    document.getElementById("3").addEventListener('click',ajouter,false);
    document.getElementById("4").addEventListener('click',ajouter,false);
    document.getElementById("5").addEventListener('click',ajouter,false);
    document.getElementById("6").addEventListener('click',ajouter,false);
    document.getElementById("7").addEventListener('click',ajouter,false);
    document.getElementById("8").addEventListener('click',ajouter,false);
    document.getElementById("9").addEventListener('click',ajouter,false);
    document.getElementById("divi").addEventListener('click',ajouter,false);
    document.getElementById("multi").addEventListener('click',ajouter,false);
    document.getElementById("addi").addEventListener('click',ajouter,false);
    document.getElementById("soust").addEventListener('click',ajouter,false);
    document.getElementById("negate").addEventListener('click',ajouter,false);
    document.getElementById("egal").addEventListener('click',ajouter,false);*/
    document.getElementById("egal").addEventListener('click',calcul,false);
}


function ajouter(valeur){
    document.getElementById("resultat").innerHTML = valeur;
}

function afficher(){
    
}

function operation(type){
    switch(type){
        case('division'):
        break;

        case('multiplication'):
        break;

        case('addition'):
        break;

        case('soustraction'):
        break;

        case('negatif'):
        break;

        default:
    }
}

function calcul(){

}

// POSSIBILITE 1 créer un tableau avec le calcul final, 1 calcul à la fois, 2 nombres + opération, vide le tab à la fin
// POSSIBILITE 2 stocker les valeurs dans deux variables différentes et faire le calcul correspondant