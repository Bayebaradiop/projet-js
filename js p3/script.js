const new_item=document.getElementById("new-item");
const item_left=document.getElementById("item-left");
const body_left=document.getElementById("body-left");
const body_right=document.getElementById("body-right");
let tabitem=[];
new_item.focus();

new_item.addEventListener("keyup",function(touche) {
    if(touche.key=="Enter"){
        ajouter();
    }
});
function ajouter() {
    let newitemValue=new_item.value.trim();
    if(newitemValue!=""){
        tabitem.push(newitemValue);
    }else{
        alert("Veuillez remplir le champ svp");
    }
    new_item.value="";
    liste();
}

function liste() {
    body_left.innerHTML="";
    tabitem.forEach((element,i) => {
        let trElement=`<div class="rounded " style="background-color: #f3f3f3;" id="item-left">
        <p ondblclick="double('${i}')" class="rounded border border-primary p-2 text-black">${element}</p>
        </div>`;
        body_left.innerHTML+=trElement;
    });
}
// body_left.addEventListener("dblclick", function (clique) {
//     if(clique.button=="Click"){
//         body_left.value=body_right.value;
//     }
// });


function double(indice) {
    body_right.innerHTML="";
    let trElement=`<div class="rounded " style="background-color: #f3f3f3;" id="item-right">
        <p ondblclick="doubles('${indice}')" class="rounded border border-primary p-2 text-black">${tabitem[indice]}</p>
        </div>`;
        body_right.innerHTML+=trElement;
    tabitem.forEach((element,i) => {
        
    });
    tabitem.splice(indice, 1);
    liste();
}


// body_right.addEventListener("dblclick", function (cli) {
//     if(cli.button=="Click"){
//         body_left.value=body_right.value;
//     }
// });


function doubles(indices) {
    body_left.innerHTML="";
    tabitem.forEach(element => {
        let trElement=`<div class="rounded " style="background-color: #f3f3f3;" id="item-left">
        <p ondblclick="doubles()" class="rounded border border-primary p-2 text-black">${element}</p>
        </div>`;
        body_left.innerHTML+=trElement;
    });
    tabitem.splice(indices, 1);
    liste();
}
