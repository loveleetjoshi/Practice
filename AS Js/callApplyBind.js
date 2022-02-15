let name1 = {
    firstname: "Loveleet",
    lastname: "Joshi",
}

let name2 = {
    firstname: "Sachin",
    lastname: "Tendulkar",
}

const printFullName = function(hometown = '', state = '', country){
    console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + state + ", " + country);
}

//funtion borrowing ---> .call() method
printFullName.call(name1, "Kichha", "UK");
printFullName.call(name2,"Mumbai", "Maharastra");



// ---> .apply() method
// same as .call() small diff. is arguments are pased in an array
printFullName.apply(name1, ["Kichha", "UK"]);



// ---> .bind() method
// dosn't invoke the method but
// it creates a copy of method and bind it with object then
// returns a function can be stored in a variable.
// the good thing is that we can call this later by the variable in which it is stored. 
let printMyName = printFullName.bind(name2,"Mumbai", "Maharastra");

console.log(printMyName);
printMyName();




// Polyfill of .bind()
// derivation of .bind() method
let name3 = {
    firstname: "Armaan",
    lastname: "Malik"
}

Function.prototype.myBind = function (...arg){
    let method = this;
    let refrence = arg[0];
    let myBindparams = arg.slice(1);

    return function (...params) {
        method.apply(refrence,[...myBindparams,...params]);
    }
}

let printMyName2 = printFullName.myBind(name3,"Mumbai", "Maharastra");
printMyName2("India");

