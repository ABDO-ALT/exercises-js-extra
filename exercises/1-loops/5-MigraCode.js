/*
MigraCode

Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Migra" instead of the
number, and for numbers divisible by 5 (and not 3), print "Code" instead.

When you have that working, modify your program to print "MigraCode" for
numbers that are divisible by both 3 and 5 (and still print "Migra" or "Code"
for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out
a significant percentage of programmer candidates. So if you solved it, your
labor market value just went up.)
*/

function allNumber(numbers) {
  let number = 0;
  for (let i = 1; i <= numbers; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + " MigraCode");
    } else if (i % 3 === 0) {
      console.log(i + " Code");
    } else if (i % 5 === 0) {
      console.log(i + " Migra");
    }
  }
  return number;
}
numbers = 100;
allNumber(numbers);
