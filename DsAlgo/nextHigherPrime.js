// This challenge is a little bit more complex
// Write a function that takes a number as argument
// If the number is prime, return the number
// If not, return the next higher prime number
let counter = 0;
function myFunction(n) {
    for(let i=3; i<=Math.sqrt(n); i++,i++){
       if(n%i === 0){
        //    console.log(n);
            // console.log(i);
          n=n+2;
          i=1;
       }
       counter++;
    }
    return n;
}

const result = myFunction(7);
console.log(result,counter);