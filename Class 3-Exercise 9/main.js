//Write a JavaScript program that calculates and displays the sum of all numbers from 1 to 100 using a while loop.

let sum = 0;
let num = 1;

while (num <= 100) {
  sum += num;
  num++;
}

console.log(`The sum of numbers from 1 to 100 is: ${sum}`);