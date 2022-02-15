// Every object in js has its prototype

// Prototype means an object contains all properties available for that particular data type.
// JS does one thing it attach that object to our array or object or function so that all properties are accesible to us.


let arr= [1,2,3];

// getting an object of all the methods available for array
console.log(arr.__proto__);

let obj = {
    myName: "loveleet",
    city: "Kichha",
    getIntro: function () {
        console.log(this.myName + " from " + this.city);
    }
}

console.log(obj.__proto__);
console.log(obj.__proto__ == Object.prototype);

// what is proto of proto of an object
// ans is Null
console.log(obj.__proto__.__proto__);
console.log(Object.prototype.prototype); // undefined


// modify __proto__ of an object
// only for demo
//Never use it
let obj2 = {
    myName: "mayank"
}

obj2.__proto__ = obj;

// INHERITANCE
// obj2 inherits properties from obj if that property is not present in obj2
console.log("object2 proto modified:- ", obj2.__proto__);