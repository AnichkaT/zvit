
let firstArray  = prompt("Enter first array").split(",").map(Number);
console.log(`First array - ${firstArray}`);
let secondArray   = prompt("Enter second array").split(",").map(Number);
console.log(`Second array - ${secondArray}`);
let maxLength   = Number(prompt("Enter max length"));

if (isNaN(maxLength) || maxLength<=0 || firstArray.length==0||secondArray.length==0) {
    console.log("You entered incorrect information");
} else{
    console.log(makeArray(firstArray, secondArray, maxLength));
}
 

function makeArray(firstArray, secondArray, maxLength) {
  let newArray = firstArray.concat(secondArray);
  if (newArray.length > maxLength) {
    return `New array - ${newArray.slice(0, maxLength)}`;
  } else {
    return `New array - ${newArray}`;
  }
}