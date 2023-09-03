  // Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

   let newArray =[];
   function arrayOfMultiples(num,length){

    for ( i=1;i<=length;i++){
        newArray.push(num*i);
    }
    return newArray;

   }
   console.log(arrayOfMultiples(6,3));