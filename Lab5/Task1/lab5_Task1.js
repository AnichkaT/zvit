
let country = prompt("Enter the country of delivery");
let price = Number(prompt("Enter the total cost of the product"));
let deliveryFee = Number(prompt("Enter the cost of delivery of the product"));

if (country == "" || isNaN(price) || isNaN(deliveryFee) || price<=0|| deliveryFee<=0) {
    console.log("You entered incorrect information");
} else{
    console.log(getShippingMessage(country, price, deliveryFee));
}
 




function getShippingMessage(country, price, deliveryFee) {
    let totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}
