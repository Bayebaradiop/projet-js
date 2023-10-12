const identification=document.getElementById("identiction");
const prenom=document.getElementById("prenom");
const nom=document.getElementById("Nom");
const telephone=document.getElementById("telephone");
const Adresse=document.getElementById("Adesse");
const numeroc=document.getElementById("numeroc");
const solde=document.getElementById("solde");
const selec=document.getElementById("selec");
const pour=document.getElementById("pour");

const invalide=document.getElementById("invalide");



telephone.onkeyup=function() {
    if(!isNaN(telephone.value)) {
        invalide.setAttribute("hidden", "");
        numeroc.value=parseInt(11062022);
    }
    else{
        invalide.removeAttribute("hidden");
         numeroc.value=" ";
    }

}
solde.onkeyup=function() {
    if(!isNaN(solde.value)) {
        sol.setAttribute("hidden", "");
        if (selec=="courant") {
            pour.value=parseInt((solde.value)*0,4);
        }
        if (selec=="Epargner") {
            pour.value=parseInt((solde.value)*0,05);
        }
       
    }
    else{
        sol.removeAttribute("hidden");
         solde.value=" ";
    }

}
