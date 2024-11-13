
let array  = prompt("Enter first array").split(",").map(Number);
console.log(`First array - ${array}`);

if (array.length==1) {
    console.log("Sum of paired elements- 0");
} else{
    console.log(sumEvenIndexes(array));
    console.log(findMax(array));
    console.log(findMin(array));
    bubbleSort(array);
    console.log(`Sorted array - ${array}`);
}
 


function sumEvenIndexes(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 2) { 
      sum += arr[i];
  }
  return `Sum of paired elements- ${sum}`;
}

function findMax(arr) {
  let max = 0;
  let maxIndex = 0;
  
  
  for (let i = 1; i < arr.length; i += 2) { 
      if (arr[i] > max) {
          max = arr[i];
          maxIndex = i;
      }
  }

  return `Max element: ${max} at index ${maxIndex}`;
}



function findMin(arr) {
  let min = arr[1];
  let minIndex = 1;
  
  
  for (let i = 1; i < arr.length; i += 2) { 
      if (arr[i] < min) {
          min = arr[i];
          minIndex = i;
      }
  }

  return `Min element: ${min} at index ${minIndex}`;
}

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
              let current = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = current;
          }
      }
  }
}







