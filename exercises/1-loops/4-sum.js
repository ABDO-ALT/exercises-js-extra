/*
Sum
If we sum all even numbers between 50 and 100 what is the result?
Build a function, that calculates the sum of all even numbers between a start number and end number
*/
function sumAll(endNumber) {
    let sum = 0; 
    for (let i = 50; i <= endNumber; i++) {
      if (i % 2 === 0) {
        sum += i;
      }
    }
    return sum;
  }
  endNumber = 100;
  console.log("the end result is " + sumAll(endNumber));