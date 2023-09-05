//Create a function that checks if a given number is prime.

function ifPrime(num){
    
    if (num < 2) { 
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(ifPrime(8));

