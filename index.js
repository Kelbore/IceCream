"use strict";

window.onload = init;

function init() {
    const submitOrder = document.getElementById("submitOrder");
    submitOrder.onclick = submitOrderBtnClicked;
    const choiceCup = document.getElementById("choiceCup");
    choiceCup.onclick = choiceCupBtnClicked;
    let choiceCone = document.getElementById("choiceCone");
    choiceCone.onclick = choiceCupBtnClicked;
}

function choiceCupBtnClicked() {
    let choiceCup = document.getElementById("choiceCup");
    let choiceCone = document.getElementById("choiceCone");
    let toppings = document.getElementById("toppings");

    if(choiceCup.checked){
        toppings.style.display = "table";
    }
    if(choiceCone.checked) {
        toppings.style.display = "none";
    }
}

function submitOrderBtnClicked() {
    const numberOfScoops = +document.getElementById("numberOfScoops").value;
    const basePrice = document.getElementById("basePrice");
    const taxAmount = document.getElementById("taxAmount");
    const totalDue = document.getElementById("totalDue");

    let baseCost = 2.25;
    let tax = 0
    if(numberOfScoops == 1) {
      baseCost = 2.25;
    }
    if(numberOfScoops == 2) {
        baseCost = 2.25 + 1.25;
    }
    if(numberOfScoops == 3) {
        baseCost = 2.25 + 1.25 + 1.25;
    }
    if(numberOfScoops == 4) {
        baseCost = 2.25 + 1.25 + 1.25 + 1.25;
    }
    
    basePrice.innerHTML = baseCost;
    tax = baseCost*0.08;
    taxAmount.innerHTML = tax;
    totalDue.innerHTML = baseCost + tax;

    if(document.getElementById("dessertOne").checked) {
        baseCost += 0.50;
    }
    if(document.getElementById("dessertTwo").checked) {
        baseCost += 0.25;
    }
    if(document.getElementById("dessertThree").checked) {
        baseCost += 1.25;
    }
    if(document.getElementById("dessertFour").checked) {
        baseCost += 0.25;
    }

    basePrice.innerHTML = baseCost;
    tax = baseCost * 0.08;
    taxAmount.innerHTML = tax;
    totalDue.innerHTML = baseCost + tax;
}
