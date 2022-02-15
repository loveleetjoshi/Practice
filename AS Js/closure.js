// closure :- function along with reference not value of its surrounding state of only that parent func of which variables that child func is using (the lexical environment.) 
// multiple closure is formed for only that parent func whose values are coming in usage inside that child func 
// local + closure in sources of inspect

function z() {
    var b = 1;
    function x() {
        debugger;
        var a=5;
        function y() {
            debugger;
            console.log(a,b);
        }
        a=100;
        y();
    }
    x();
}
debugger;
z();

// Usage:-

// 1. Module Design Pattern
// 2. Currying
// 3. Functions like once
// 4. memoize
// 5. maintaining state in asyc world
// 6. setTimeouts
// 7. Iterators etc.....
