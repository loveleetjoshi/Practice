//1. Function statement as well as Function Declaration

function a() {
    console.log("This way is called function statement")
}

// 2. Function expression

var b = function func() {
    console.log("This way to assign a function to a variable is called function statement.")
    console.log("Calling locally dosn't gives error", func)
} 

b(); // now we can't func() directly it will give not defined. 
//but we can access inside the function func() locally

// Difference between statement & expression is we can call a() before defination of
// function a() but calling b() before defination gives typeError : b is not a function. 




// 3. Anonymous Function (means function without name) (used in function expression but gives SyntaxError if used as a function statement)
var anonymous= function () {
    console.log("Anonymous Function")
}

// 4. Named function Expression (function expression where function assigned to variable should have a name)
var namedFunctionExpression = function name() {
    console.log("Named Function Expression");
}

// 5. Difference between Parameter & Arguments 
function hello(parameter) {
    console.log(parameter);
}

hello("argument");


// 6. First Class functions or First Class Cititzens
// means we can pass functions as argument and also can return a function from another function
// and can use as variables this ability is known as First class function

function outer(func) {
    return func;
}

var result= outer(function inner() {
    return "I m return from outer function";
})

console.log(result());


// 7. Arrow Functions (ES6) JS 2016






