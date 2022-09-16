function load(){
    document.getElementById("egal").addEventListener('click',calcul,false);
    activerOperations(false);
}

var nb1;
var nb2;
var result;

function ajouter(valeur){
    if(typeof nb1 === 'undefined'){
        nb1 = valeur;
        activerOperations(true);
        activerNombres(false);
        result = valeur;
        afficher(result);
    }
    else{
        nb2 = valeur;
        activerNombres(false);
        result += valeur;
        afficher(result);
    }
}

function operation(type){
    activerNombres(true);
    activerOperations(false);
    result += type;
    afficher(result);

    switch(type){
        case('/'):
        calcul(nb1/nb2);
        break;

        case('*'):
        calcul(nb1*nb2);
        break;

        case('+'):
        calcul(nb1+nb2);
        break;

        case('-'):
        calcul(nb1-nb2);
        break;

        case('neg'):
        calcul(nb1/nb2);
        break;

        case(','):
        calcul(nb1/nb2);
        break;

        default:
    }
}

function calcul(resultat){
    afficher(resultat);
}

// POSSIBILITE 1 créer un tableau avec le calcul final, 1 calcul à la fois, 2 nombres + opération, vide le tab à la fin
// POSSIBILITE 2 stocker les valeurs dans deux variables différentes et faire le calcul correspondant


function afficher(resultat){
    document.getElementById("resultat").innerHTML = resultat;
}

function reinitialiser(){
    document.getElementById("resultat").innerHTML = "";
}

function activerOperations(valeur){
    if(valeur == true){
        document.getElementById("divi").disabled = false;
        document.getElementById("multi").disabled = false;
        document.getElementById("addi").disabled = false;
        document.getElementById("soust").disabled = false;
        document.getElementById("negate").disabled = false;
        document.getElementById("deci").disabled = false;
        //voir égal
    }
    
    if(valeur == false){
        document.getElementById("divi").disabled = true;
        document.getElementById("multi").disabled = true;
        document.getElementById("addi").disabled = true;
        document.getElementById("soust").disabled = true;
        document.getElementById("negate").disabled = true;
        document.getElementById("deci").disabled = true;
    }
}

function activerNombres(valeur){
    if(valeur == true){
        document.getElementById("0").disabled = false;
        document.getElementById("1").disabled = false;
        document.getElementById("2").disabled = false;
        document.getElementById("3").disabled = false;
        document.getElementById("4").disabled = false;
        document.getElementById("5").disabled = false;
        document.getElementById("6").disabled = false;
        document.getElementById("7").disabled = false;
        document.getElementById("8").disabled = false;
        document.getElementById("9").disabled = false;
    }
    
    if(valeur == false){
        document.getElementById("0").disabled = true;
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
    }

}
