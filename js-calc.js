document.addEventListener("DOMContentLoaded", load);

function load(){
    document.getElementById("egal").addEventListener('click',calcul,false);
    document.getElementById("negate").addEventListener('click',negatif,false);
    document.getElementById("deci").addEventListener('click',decimal,false);
    document.getElementById("egal").disabled = true;
    activerOperations(false);
}

var nb1;
var nb2;
var oper; //stocke le symbole de l'opération

var result;
var affich = '';

var deciMode = false; //gérer le passage en décimal

var cptId = 0; //id pour l'historique
var resultHisto = [];

function ajouter(valeur){
    if(deciMode){
        //si nb2 est null, on est en train de saisir nb1
        if(nb2 == null){
            nb1 = parseFloat(nb1 + "." + valeur);
            affich = nb1;
            console.log(affich);
            afficher(affich);
            activerNombres(false);
            activerOperations(true);
            deciMode = false;
        }
        else{
            //on a saisi la partie entière de nb2
            nb2 = parseFloat(nb2 + "." + valeur);
            affich = nb1 + oper + nb2;
            afficher(affich);
            activerNombres(false);
            activerOperations(true);
            deciMode = false;
        }
    }
    else{
        if(nb1 == null){
            document.getElementById("resultat").innerHTML = "";
            nb1 = valeur;
            
            affich += valeur;
            activerOperations(true);
            activerNombres(false);
            afficher(affich);
        }
        else{
            nb2 = valeur;
            document.getElementById("negate").disabled = false;
            document.getElementById("egal").disabled = false;
            document.getElementById ("deci").disabled = false;
            console.log("hey");
            activerNombres(false);
            affich += valeur;
            afficher(affich);
        }
    }
}

function operation(type){
    activerNombres(true);
    activerOperations(false);
    affich += type;
    afficher(affich);
    oper = type;
}

function calcul(){
    switch(oper){
        case('/'):
        result=nb1/nb2;
        break;
        
        case('*'):
        result=nb1*nb2;
        break;
        
        case('+'):
        result=nb1+nb2;
        break;
        
        case('-'):
        result=nb1-nb2;
        break;
        
        default:
    }
    afficher(result);
    affich += ' = ' + result;
    resultHisto[cptId] = result;
    ajoutHisto(affich);
    reinitialiser();   
}

function negatif(){
    if(nb2 == null){
        nb1 = -nb1;
        affich = nb1;
        afficher(affich);
    }
    else{
        nb2 = -nb2;
        affich = nb1 + oper + nb2;
        afficher(affich);
    }
}

function decimal(){
    deciMode = true;
    affich += ".";
    afficher(affich);
    activerNombres(true);
    activerOperations(false);
}

function afficher(resultat){
    document.getElementById("resultat").innerHTML = resultat;
}

function reinitialiser(){
    nb1 = null;
    nb2 = null;
    oper = null;
    result = null;
    activerNombres(true);
    affich = '';
    document.getElementById("negate").disabled = true;
    document.getElementById("egal").disabled = true;
}

function ajoutHisto(operation){
    document.getElementById("historique").innerHTML += '<div class="pt-2"> <button id=' + cptId + ' onclick="recupHisto(' + cptId + ')" type="button" class="btn btn-outline-secondary btn-lg">' + operation + '</button> </div>';
    cptId++;
}

function recupHisto(id){
    if(nb1 == null){
        nb1 = resultHisto[id];
        afficher(nb1);
        affich = nb1;
        
        activerOperations(true);
        activerNombres(false);
    }
    else{
        nb2 = resultHisto[id];
        affich += nb2;
        afficher(affich);
        activerOperations(false);
        activerNombres(false);
        document.getElementById("egal").disabled = false;
        document.getElementById("negate").disabled = false;
    }
}

function activerOperations(valeur){
    if(valeur == true){
        document.getElementById("divi").disabled = false;
        document.getElementById("multi").disabled = false;
        document.getElementById("addi").disabled = false;
        document.getElementById("soust").disabled = false;
        document.getElementById("deci").disabled = false;
        document.getElementById("negate").disabled = false;
    }
    
    if(valeur == false){
        document.getElementById("divi").disabled = true;
        document.getElementById("multi").disabled = true;
        document.getElementById("addi").disabled = true;
        document.getElementById("soust").disabled = true;
        document.getElementById("deci").disabled = true;
        document.getElementById("negate").disabled = true;
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
