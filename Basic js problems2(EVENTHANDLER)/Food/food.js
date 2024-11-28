let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");

let sum=0;

box1.addEventListener("click",()=>{
    sum = sum + 45;
})
box2.addEventListener("click",()=>{
    sum = sum + 20;
})
box3.addEventListener("click",()=>{
    sum = sum + 30;
})


let checkout = document.getElementById("checkout");
checkout.addEventListener("click",()=>{
    let service_charge = sum/10;
    let delivery_charge = 45;
    let total = sum + service_charge + delivery_charge;

    console.log("Food: Rs : " + sum);
    console.log("service charge: Rs : " + service_charge);
    console.log("Delivery charges: Rs : " + delivery_charge);
    console.log("Total: Rs : " + total);
})

let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let qty = document.getElementById("qty");

plus.addEventListener("click", ()=>{
    let value = parseInt(qty.innerText);
    value = value + 1;
    qty.innerText = value;
})

minus.addEventListener("click", ()=>{
    let value = parseInt(qty.innerText);
    
    if(value>0) {
        value = value - 1;
        qty.innerText = value;
    }
})










/*
  print the below on console the exact format as specified

  Food: Rs 160
  service charge: Rs 16 (10% of the food)
  Delivery fee: Rs 45
  Total: Rs 221
*/