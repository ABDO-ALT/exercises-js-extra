/*
Max
Given an array of numbers, create a function to return the maximum 
*/

//function max(numbers) {
//your code here
//console.log(numbers);
// return Math.max(...numbers);
//return Math.max.apply(null,numbers);
//   let m = 0; // memory
//   for (const number of numbers) {
//     //console.log(number);
//     //
//     if(m < number){
//       m = number;
//     }
//   }
//   return  m
// }
​
function max(numbers) {
  //console.log(numbers);
  let m = -Infinity;
​
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 && numbers[i] > m) {
      m = numbers[i];
    }
  }
  return m;
}

const numbersArray1 = [1,3,5,9];
const numbersArray2 = [7,8,5,7,3,6];

console.log("Maximum number in first array is " + max(numbersArray1));
console.log("Maximum number in second array is " + max(numbersArray2));