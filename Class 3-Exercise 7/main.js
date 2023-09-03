//Write a JavaScript program that calculates and displays the factorial of a number. Prompt the user for a number and display its factorial on the console.

const userInput = prompt("Please enter a number:");
const number = parseInt(userInput);

{
  let factorial = 1;
  
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  console.log(`The factorial of ${number} is ${factorial}`);
}