$(init);

function init() {
    
    //initialisation
    $(accueil);
    $(projets);
    $(propos);

    $("#accueil").show();
    $("#projets").hide();
    $("#propos").hide();

    //bouton de menu
    $("#btnAccueil").click(btnAccueil);
    $("#btnProjets").click(btnProjets);
    $("#btnPropos").click(btnPropos);

} //fin init

////////////////////////////////////
/*Javascript pour les boutons menu*/
////////////////////////////////////

function btnAccueil() {
    $("#accueil").show();
    $("#projets").hide();
    $("#propos").hide();
} //fin btnAccueil

function btnProjets() {
    $("#accueil").hide();
    $("#projets").show();
    $("#propos").hide();
} //fin btnProjets

function btnPropos() {
    $("#accueil").hide();
    $("#projets").hide();
    $("#propos").show();
} //fin btnPropos

///////////////////////////
/*Chargement des contenus*/
///////////////////////////

function accueil() {
    $("#accueil").load("templates/accueil.txt");
} //fin accueil

function projets() {
    $("#projets").load("templates/projets.txt");
} //fin projets

function propos() {
    $("#propos").load("templates/propos.txt");
} //fin propos
