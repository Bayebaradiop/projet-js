const budget_input=document.getElementById('budget_input');
const budget=document.getElementById('budget');
const budget_amount=document.getElementById('budget_amount');
const depense=document.getElementById('depense');
const balance=document.getElementById('balance');
const expense_amount=document.getElementById('expense_amount');
const balance_amount=document.getElementById('balance_amount');
const libellede=document.getElementById('libellede');
const montantde=document.getElementById('montantde');



function calculer() {
    if ((budget_input.value)!="") {
    
        budget.innerHTML=`<span>$ </span><span  id="budget_amount">${budget_input.value}</span></h4>`;
    }
    
    
}