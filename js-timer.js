document.addEventListener("DOMContentLoaded", load);

function load(){
    document.getElementById("timerB").addEventListener('click',lancerTimer,false);
    document.getElementById("chronoB").addEventListener('click',lancerChrono,false);
}

//l'état permet de changer l'action du bouton: lancer ou arrêter
var etatTimer = false;
var etatChrono = false;


var timerAff = "";
var chronoAff = "";

var dureeTimer;
var uniteTimer;

//variables pour le chronomètre
var dureeChrono;
var sec = 0;
var min = 0;
var h = 0;

//intervalle compte à rebours
var interv = setInterval(function () {
    if(etatTimer && dureeTimer >= 0){
        document.getElementById("timer").innerHTML = dureeTimer-- + " secondes restantes"   
    }
}, 1000);

//intervalle chronomètre
var interC = setInterval(function () {
    if(etatChrono){
        sec++;
        if(sec >= 60){
            min++;
            sec = 0;
        }

        if(min >= 60){
            h++;
            min = 0;
        }

        document.getElementById("chrono").innerHTML = h + ":" + min + ":" + sec;
    }
}, 1000);

function lancerTimer(){
    var interv;
    
    //activation du timer pour la première fois
    if(!etatTimer){
        dureeTimer = document.getElementById("timerDur").value;
        uniteTimer = document.querySelector('input[name="unite"]:checked').value;   //h, m ou s
        
        if(uniteTimer == "h"){
            dureeTimer *= 3600;
        }
        if(uniteTimer == "m"){
            dureeTimer *= 60;
        }
        
        document.getElementById("timerB").innerHTML = "Arrêter le timer";
        etatTimer = true;
        
    }
    else{
        //arrêter le timer
        clearInterval(interv);
        document.getElementById("timerB").innerHTML = "Activer le compte à rebours";
        document.getElementById("timer").innerHTML = "";
        etatTimer = false;
    }  
}

function lancerChrono(){
    var interv;
    
    //activation du chrono pour la première fois
    if(!etatChrono){
        etatChrono = true; 
        document.getElementById("chronoB").innerHTML = "Arrêter le chronomètre";
    }
    else{
        //arrêter le chrono
        clearInterval(interC);
        document.getElementById("chronoB").innerHTML = "Activer le compte à rebours";
        document.getElementById("chrono").innerHTML = "";
        etatChrono = false;
    }  
}

function arret(interval){
    
}