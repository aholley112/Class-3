//Write a JavaScript program that prompts the user for two numbers and performs the four basic arithmetic operations (addition, subtraction, multiplication, division) on those numbers. Display the results on the console.

const firstNumberInput = prompt("Enter the first number:");
const secondNumberInput = prompt("Enter the second number:");

const firstNumber = parseFloat(firstNumberInput);
const secondNumber = parseFloat(secondNumberInput);

  const addition = firstNumber + secondNumber;
  const subtraction = firstNumber - secondNumber;
  const multiplication = firstNumber * secondNumber;
  const division = secondNumber !== 0 ? firstNumber / secondNumber : "Cannot divide by zero";

  console.log(`Addition: ${addition}`);
  console.log(`Subtraction: ${subtraction}`);
  console.log(`Multiplication: ${multiplication}`);
  console.log(`Division: ${division}`);
