const prenom=document.getElementById('prenom');
const nom=document.getElementById('nom');
const datenaiss=document.getElementById('datenaiss');
const Email=document.getElementById('Email');
const liste=document.getElementById('liste');
let tabp=[];

function generer() {
    if ((prenom.value && nom.value && datenaiss.value)!="") {
        Email.value=prenom.value[0] + nom.value + datenaiss.value +"@2022";
    }
    else{
        alert("hjklmklm");
    }
    
}
function enregistrer(){ 
    if ((prenom.value && nom.value && datenaiss.value)!=""){
        let personne={
            prenom:prenom.value,
            nom:nom.value,
            datenaiss:datenaiss.value,
            Email:Email.value

        }
        tabp.push(personne);
        prenom.value=" ";
        nom.value=" ";
        datenaiss.value=" ";
        Email.value=" ";
            listerp();
    }
    
}
function listerp () {
    liste.innerHTML=" ";
    let cpt=0;
    tabp.forEach((element,i) => {
        cpt++;
        liste.innerHTML+=`
        <tr>
        
        <td>
            ${cpt}
        
        </td>
        <td>
        ${element.nom}
    
    </td>
    <td>
    ${element.prenom}

</td>    
<td>
${element.Email}

</td>    
<td>
${element.Email}

</td>      

<td>    
<td>
<button class="btn btn-dark btn-sm text-center" onclick="supprimer(${i})">Supprimer</button>
</td>      
</td>      
        </tr>
        
        `
    });
    
}

function supprimer(i) {
    if(confirm("Koula Bayiiii Nga Supprimer li Té Dioumo")){
        confirm("Kholatalll bou bakh");
        confirm("so beusa té dinagne khamné dioumo gnou supprimer ko")
        tabp.splice(i,1);
        listerp();
    }
   
    
}