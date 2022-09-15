function load(){
    document.getElementById("boutton1").addEventListener('click',ajouter,false);
    document.getElementById("boutton2").addEventListener('click',afficher,false);
}

var tab = ["a"];

function ajouter(){
    for(var i=0; i<=100; i++){
        document.getElementById("bar").style.width = i+"%"; 
    }
}

function afficher(){
    document.getElementById("champ").innerHTML = "";
    for(var i=0; i<tab.length; i++){
        document.getElementById("champ").innerHTML  += tab[i];
    }
}
/*
function load(){
    document.formValar.valarName.onchange = function(){
        infoValar(document.formValar.valarName.value);
    };
    
    //Formulaire Maiar
    document.formMaiar.maiarName.onchange = function(){
        infoMaiar(document.formMaiar.maiarName.value);
    };
    
    //Slider
    document.getElementById("nextMap").addEventListener('click',nextImage,false);
    
}*/


/*
function infoValar(valeur){
    switch(valeur){
        case 'aule':
        document.getElementById("infosValar").innerHTML = "<p>Le forgeron créateur des Nains</p> <a href=\"https://lotr.fandom.com/wiki/Aulë#Maiar_of_Aulë\">Plus d'infos</a>";
        document.getElementById("imageValar").innerHTML = "<img src='images/aule.jpg' alt='aman'/>";
        break;
        
        case 'este':
        document.getElementById("infosValar").innerHTML = "<p>Epouse de Lorien</p> <a href=\"https://lotr.fandom.com/wiki/Estë\">Plus d'infos</a>";
        document.getElementById("imageValar").innerHTML = "";
        break;
        
        case 'lorien':
        document.getElementById("infosValar").innerHTML = "<p>Connu sous le nom d'Irmo, créateur des rêves.</p> <a href=\"https://lotr.fandom.com/wiki/Irmo\">Plus d'infos</a>";
        document.getElementById("imageValar").innerHTML = "";
        break;
        
        case 'mandos':
        document.getElementById("infosValar").innerHTML = "<p>Responsable des âmes des Elfes</p> <a href=\"https://lotr.fandom.com/wiki/Mandos\">Plus d'infos</a>";
        document.getElementById("imageValar").innerHTML = "<img src='images/mandos.jpg' alt='mandos'/>";
        break;
        
        case 'manwe':
        document.getElementById("infosValar").innerHTML = "<p>Roi des Valar et frère de Melkor. Les Aigles sont ses serviteurs.</p> <a href=\"https://lotr.fandom.com/wiki/Manwë\">Plus d'infos</a>";
        document.getElementById("imageValar").innerHTML = "<img src='images/manwe.jpg' alt='manwe'/>";
        break;
        
        case 'melkor':
        document.getElementById("infosValar").innerHTML = "<p>Le plus puissant des Valar. Maître de Sauron, des Balrogs et des Dragons. Aussi connu sous le nom de Morgoth.</p> <a href=\"https://lotr.fandom.com/wiki/Melkor\">Plus d'infos</a>";
        document.getElementById("imageValar").innerHTML = "<img src='images/melkor.png' alt='melkor'/>";
        break;
        
        case 'nessa':
        document.getElementById("infosValar").innerHTML = "<p>Epouse de Tulkas.</p> <a href=\"https://lotr.fandom.com/wiki/Nessa\">Plus d'infos</a>";
        document.getElementById("imageValar").innerHTML = "";
        break;
        
        case 'nienna':
        document.getElementById("infosValar").innerHTML = "<p>Soeur de Mandos et Lorien.</p> <a href=\"https://lotr.fandom.com/wiki/Nienna\">Plus d'infos</a>";
        document.getElementById("imageValar").innerHTML = "";
        break;
        
        case 'orome':
        document.getElementById("infosValar").innerHTML = "<p>Premier Valar a avoir découvert les Elfes lors de leur éveil dans le lac de Cuiviénen.</p> <a href=\"https://lotr.fandom.com/wiki/Oromë\">Plus d'infos</a>";
        document.getElementById("imageValar").innerHTML = "";
        break;
        
        case 'tulkas':
        document.getElementById("infosValar").innerHTML = "<p>Captura et enferma Melkor lors de la Bataille de la Grande Colère.</p> <a href=\"https://lotr.fandom.com/wiki/Tulkas\">Plus d'infos</a>";
        document.getElementById("imageValar").innerHTML = "<img src='images/tulkas.png' alt='tulkas'/>";
        break;
        
        case 'ulmo':
        document.getElementById("infosValar").innerHTML = "<p>Contrôle les océans.</p> <a href=\"https://lotr.fandom.com/wiki/Ulmo\">Plus d'infos</a>";
        document.getElementById("imageValar").innerHTML = "<img src='images/ulmo.jpg' alt='ulmo'/>";
        break;
        
        case 'vaire':
        document.getElementById("infosValar").innerHTML = "<p>Epouse de Mandos.</p> <a href=\"https://lotr.fandom.com/wiki/Vairë\">Plus d'infos</a>";
        document.getElementById("imageValar").innerHTML = "";
        break;
        
        case 'vana':
        document.getElementById("infosValar").innerHTML = "<p>Soeur de Yavanna.</p> <a href=\"https://lotr.fandom.com/wiki/Vána\">Plus d'infos</a>";
        document.getElementById("imageValar").innerHTML = "";
        break;
        
        case 'varda':
        document.getElementById("infosValar").innerHTML = "<p>Epouse de Manwe et créatrice des étoiles.</p> <a href=\"https://lotr.fandom.com/wiki/Varda\">Plus d'infos</a>";
        document.getElementById("imageValar").innerHTML = "";
        break;
        
        case 'yavanna':
        document.getElementById("infosValar").innerHTML = "<p>Responsable de la nature.</p> <a href=\"https://lotr.fandom.com/wiki/Yavanna\">Plus d'infos</a>";
        document.getElementById("imageValar").innerHTML = "";
        break;
        
        
        default:
        document.getElementById("infosValar").innerHTML = "";
        document.getElementById("imageValar").innerHTML = "";
    }
}

function infoMaiar(valeur){
    switch(valeur){
        case 'aigles':
        document.getElementById("infosMaiar").innerHTML = "Un sorcier";
        break;
        
        case 'balrogs':
        document.getElementById("infosMaiar").innerHTML = "Un guerrier";
        break;
        
        case 'eonwe':
        document.getElementById("infosMaiar").innerHTML = "Un mage";
        break;
        
        case 'gandalf':
        document.getElementById("infosMaiar").innerHTML = "Un mage";
        break;
        
        case 'ilmare':
        document.getElementById("infosMaiar").innerHTML = "Un mage";
        break;
        
        case 'mages':
        document.getElementById("infosMaiar").innerHTML = "Un mage";
        break;
        
        case 'melian':
        document.getElementById("infosMaiar").innerHTML = "Un mage";
        break;
        
        case 'osse':
        document.getElementById("infosMaiar").innerHTML = "Un mage";
        break;
        
        case 'radagast':
        document.getElementById("infosMaiar").innerHTML = "Un mage";
        break;
        
        case 'saruman':
        document.getElementById("infosMaiar").innerHTML = "Un mage";
        break;
        
        case 'sauron':
        document.getElementById("infosMaiar").innerHTML = "Un mage";
        break;
        
        case 'uimen':
        document.getElementById("infosMaiar").innerHTML = "Un mage";
        break;
        
        default:
        document.getElementById("infosMaiar").innerHTML = "";
        document.getElementById("imagesMaiar").innerHTML = "";
    }
}





var images = ["<img src='images/ardaFirstAge.jpg' id=\"arda1\" onclick=\"zoom('arda1')\">", 
"<img src='images/ardaSecondAge.jpg' id=\"arda2\" onclick=\"zoom('arda2')\">",
"<img src='images/ardaThirdAge.jpg' id=\"arda3\" onclick=\"zoom('arda3')\">"];

var legendes = ["<p>Carte d'Arda lors de l'Age I</p>", 
"<p>Carte d'Arda lors de l'Age II. Le Beleriand est submergé lors de la Guerre de la Grande Colère. La mer d'Helcar se vide et devient la région du Mordor.</p>",
"<p>Carte d'Arda lors des Ages III et IV. L'île de Numenor est submergée. Aman s'éloigne de la Terre du Milieu. Il est maintenant impossible d'y accéder.</p>"];

var cptImages = 1;
var cptLegendes = 1;

function nextImage(){
    if(cptImages > images.length-1){
        cptImages = 0;
        cptLegendes = 0;
    }
    
    document.getElementById("carte").innerHTML = images[cptImages];
    document.getElementById("legende").innerHTML = legendes[cptLegendes];
    cptImages++;
    cptLegendes++;
}

var etatZoom = false;
//false pour image non zoomée

function zoom(id){
    var image = document.getElementById(id);
    var currentWidth = image.clientWidth;
    
    if(etatZoom == false){
        image.style.width = (currentWidth + 200)  + "px";
        etatZoom = true;
    }
    else{
        image.style.width = (currentWidth - 200)  + "px";
        etatZoom = false;
    }
    
}

*/