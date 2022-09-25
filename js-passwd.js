document.addEventListener("DOMContentLoaded", load);

function load(){
    document.getElementById("valid").addEventListener('click',generer,false);
    document.getElementById("passLen").addEventListener('click',majRange,false);
    document.getElementById("result").disabled = true;
    
}


const nombres = ["0","1","2","3","4","5","6","7","8","9"];
const symboles = ["&","#","-","@","$","%","!","?",";","."];
const lettres = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//booléen pour l'état des checkbox
var majus = true;
var nbres = false;
var symb = false;

var passwdLen = 8;

function generer(){

    inputValues();
    var passWd = "";
    
    //Aucune case cochée
    if(!majus && !nbres && !symb){
        for(var i=0; i<passwdLen; i++){
            var indice = Math.floor(Math.random() * lettres.length);
            passWd += lettres[indice];
        }
    }
    
    //Majuscule
    if(majus && !nbres && !symb){
        for(var i=0; i<passwdLen; i++){
            var majusBool = Math.random();
            
            //true
            if(majusBool < 0.5){
                var indice = Math.floor(Math.random() * lettres.length);
                passWd += lettres[indice].toUpperCase();
            }
            //false
            else{
                var indice = Math.floor(Math.random() * lettres.length);
                passWd += lettres[indice];
            }
            
        }
    }
    
    //Nombres
    if(!majus && nbres && !symb){    
        for(var i=0; i<passwdLen; i++){
            var valeur = Math.floor(Math.random() * 2); //0, 1
            
            //Lettre
            if(valeur == 0){
                var indice = Math.floor(Math.random() * lettres.length);
                passWd += lettres[indice];
            }

            //Nombre
            if(valeur == 1){
                var indice = Math.floor(Math.random() * nombres.length);
                passWd += nombres[indice];
            }
        }
    }

    //Symboles
    if(!majus && !nbres && symb){ 
        for(var i=0; i<passwdLen; i++){
            var valeur = Math.floor(Math.random() * 2); //0, 1
            
            //Lettre
            if(valeur == 0){
                var indice = Math.floor(Math.random() * lettres.length);
                passWd += lettres[indice];
            }

            //Symbole
            if(valeur == 1){
                var indice = Math.floor(Math.random() * symboles.length);
                passWd += symboles[indice];
            }
        }
    }

    //Majuscules et nombres
    if(majus && nbres && !symb){     
        for(var i=0; i<passwdLen; i++){
            var valeur = Math.floor(Math.random() * 2); //0, 1
            
            //Lettre
            if(valeur == 0){
                var indice = Math.floor(Math.random() * lettres.length);
                var majOuPas = Math.random();

                //Majuscule
                if(majOuPas <0.5){
                    passWd += lettres[indice].toUpperCase();
                }
                //Minuscule
                else{
                    passWd += lettres[indice];
                }
            }

            //Nombre
            if(valeur == 1){
                var indice = Math.floor(Math.random() * nombres.length);
                passWd += nombres[indice];
            }
        }
    }

    //Majuscules et symboles
    if(majus && !nbres && symb){
        for(var i=0; i<passwdLen; i++){
            var valeur = Math.floor(Math.random() * 2); //0, 1
            
            //Lettre
            if(valeur == 0){
                var indice = Math.floor(Math.random() * lettres.length);
                var majOuPas = Math.random();

                //Majuscule
                if(majOuPas <0.5){
                    passWd += lettres[indice].toUpperCase();
                }
                //Minuscule
                else{
                    passWd += lettres[indice];
                }
            }

            //Symbole
            if(valeur == 1){
                var indice = Math.floor(Math.random() * symboles.length);
                passWd += symboles[indice];
            }
        }
    }

    //Nombres et symboles
    if(!majus && nbres && symb){    
        for(var i=0; i<passwdLen; i++){

            var valeur = Math.floor(Math.random() * 3); //0, 1 ou 2

            //Lettre
            if(valeur == 0){
                var indice = Math.floor(Math.random() * lettres.length);
                passWd += lettres[indice];
            }

            //Nombre
            if(valeur == 1){
                var indice = Math.floor(Math.random() * nombres.length);
                passWd += nombres[indice];
            }

            //Symbole
            if(valeur == 2){
                var indice = Math.floor(Math.random() * symboles.length);
                passWd += symboles[indice];
            }
        }
    }

    //Majuscules, nombres et symboles
    if(majus && nbres && symb){    
        for(var i=0; i<passwdLen; i++){

            var valeur = Math.floor(Math.random() * 3); //0, 1 ou 2

            //Lettre
            if(valeur == 0){
                var indice = Math.floor(Math.random() * lettres.length);
                var majOuPas = Math.random();

                //Majuscule
                if(majOuPas <0.5){
                    passWd += lettres[indice].toUpperCase();
                }
                //Minuscule
                else{
                    passWd += lettres[indice];
                }
            }

            //Nombre
            if(valeur == 1){
                var indice = Math.floor(Math.random() * nombres.length);
                passWd += nombres[indice];
            }

            //Symbole
            if(valeur == 2){
                var indice = Math.floor(Math.random() * symboles.length);
                passWd += symboles[indice];
            }
        }
    }
    
    afficherResult(passWd);
}

function inputValues(){
    majus = document.getElementById("maj").checked;
    nbres = document.getElementById("nbr").checked;
    symb = document.getElementById("sym").checked;
    passwdLen = document.getElementById("passLen").value;
}

function majRange(){
    var valeur = document.getElementById("passLen").value;
    document.getElementById("rangeVal").innerHTML = valeur; 
}

function afficherResult(valeur){
    document.getElementById("result").disabled = false;
    document.getElementById("result").value = valeur;
}