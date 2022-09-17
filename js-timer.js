document.addEventListener("DOMContentLoaded", load);

function load(){
    document.getElementById("timerB").addEventListener('click',lancerTimer,false);
    document.getElementById("chronoB").addEventListener('click',lancerChrono,false);
    //document.getElementById("deci").addEventListener('click',decimal,false);
    //document.getElementById("egal").disabled = true;
    //activerOperations(false);
}

//1h = 3600s 

//l'état permet de changer l'action du bouton: lancer ou arrêter
var etatTimer = false;
var etatChrono = false;


var timerAff = "";
var chronoAff = "";

var dureeTimer;
var uniteTimer;

function lancerTimer(){
    dureeTimer = document.getElementById("timerDur").value;
    uniteTimer = document.querySelector('input[name="unite"]:checked').value;   //h, m ou s
    
    switch(uniteTimer){
        case('h'):
        timerAff = dureeTimer + ":00:" + "00";
        majTimer(timerAff);
        break;
        
        case('m'):
        timerAff =  dureeTimer + "00";
        majTimer(timerAff);
        break;
        
        case('s'):
        timerAff = dureeTimer;
        majTimer(timerAff);
        break;
        default:
    }
    
    var secondes = 0;
    var minutes = 0;
    var heures = 0;
    
    var dureeSecondes = dureeTimer * 60;
    
   const interv = setInterval(function () {
        if(dureeTimer<=0){
            clearInterval(interv);
        }
        document.getElementById("timer").innerHTML = dureeTimer--;
    }, 1000);
    
}

function lancerChrono(){
    
}

function majTimer(){
    document.getElementById("timer").innerHTML += dureeTimer--;
}

function majChrono(valeur){
    document.getElementById("chrono").innerHTML = valeur;
}