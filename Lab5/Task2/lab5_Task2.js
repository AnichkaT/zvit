
let quantity = Number(prompt("Enter the number of droids ordered"));
let pricePerDroid  = Number(prompt("Enter the price of one droid"));
let customerCredits  = Number(prompt("Enter the amount of funds on the client's account"));

if (isNaN(quantity) || isNaN(pricePerDroid) || isNaN(customerCredits) 
    || customerCredits<=0|| pricePerDroid<=0|| quantity<=0) {
    console.log("You entered incorrect information");
} else{
    console.log(makeTransaction(quantity, pricePerDroid, customerCredits));
}
 

function makeTransaction(quantity, pricePerDroid, customerCredits) {
    
    let totalPrice = quantity * pricePerDroid;
  
  
    if (totalPrice > customerCredits) {
      return "Insufficient funds!";
    } else {
      return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }
  }