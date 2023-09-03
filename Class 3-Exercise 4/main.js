//Write a JavaScript program that checks if a number is even or odd. Display a message on the console indicating whether the number is even or odd.

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
  
  // Examples
  const number1 = 4;
  const number2 = 3;
  
  console.log(`${number1} is ${checkEvenOrOdd(number1)}.`);
  console.log(`${number2} is ${checkEvenOrOdd(number2)}.`);