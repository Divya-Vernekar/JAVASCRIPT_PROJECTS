let qty_minus = document.getElementsByClassName('qty-minus');
let qty = document.getElementsByClassName('qty');
let qty_plus = document.getElementsByClassName('qty-plus');
let prices = document.getElementsByClassName("price");



for(let i=0; i<qty.length; i++) {
    qty_minus[i].addEventListener("click", ()=>{
        if(qty[i].innerText>0)
        {
        qty[i].innerText--;
        }
    })

    qty_plus[i].addEventListener("click", ()=>{
        qty[i].innerText++;
    })
}
let add_to_cart = document.getElementsByClassName("add-to-cart");

let total_food_price = 0;


for(let i=0; i<qty.length; i++) {

    add_to_cart[i].addEventListener("click", ()=>{
        total_food_price = total_food_price + (qty[i].innerText*prices[i].innerText);
        console.log(total_food_price);
    })    
}


let checkout_btn = document.getElementsByClassName("checkout-btn");

function checkout(){
    localStorage.setItem('total',total_food_price);
    window.location.href="fullfoodcheckout.html";
}
window.onload = function(){
    displayTotal();
};

function displayTotal(){
    let total_span = document.getElementById("total-span");
    let service_span = document.getElementById("service-span");
    let delivery_span = document.getElementById("delivery-span");
    let amount_span = document.getElementById("amount-span");

    let total = parseInt(localStorage.getItem('total'));
    let service_charge = total/10;
    let delivery_fee = 45;

    total_span.innerText = total;
    service_span.innerText = service_charge;
    delivery_span.innerText = delivery_fee;
    amount_span.innerText = total + service_charge + delivery_fee;
}