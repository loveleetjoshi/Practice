// Regular functions :- returns single value or nothing

// Generator Functions :- returns ('yield') multiple values, 
// one after other, on demand.

function* generator() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}



// generator object
const generatorObj = generator();
console.log([...generatorObj]);


/*
// code execution starting
const one = generatorObj.next();
console.log(one); // returns 1st yield

const two = generatorObj.next();
console.log(two); // return 2nd yield

const three = generatorObj.next();
console.log(three); // return last value & done: true

const four = generatorObj.next();
console.log(four); // return undefined & done: true
*/



// Generators are iterable
// prints only value whose done is true 
// for (const value of generatorObj) {
//     console.log(value); 
// }

// to finishing generator function at any step
// call generator.return(value);

