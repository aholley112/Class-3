//Write a JavaScript program that displays the multiplication table of a number up to 10 using a for loop.

let number = 5;

console.log(`Multiplication table of ${number}:`);
for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(`${number} x ${i} = ${result}`);
   
}
