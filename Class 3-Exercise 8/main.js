//Write a JavaScript program that determines if a given year is a leap year. Prompt the user for a year and display a message on the console indicating whether it is a leap year or not.

const userInput2 = prompt("Please enter a year:");
const year = parseInt(userInput2);

 if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}