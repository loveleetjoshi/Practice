// Recursion : When function call itself
// If a function call itself then there must be an end point.
//otherwise it will get called for infinite times

let counter=1;

function hello(limit=5) {
    if (counter>limit) {
        return;
    }
    console.log("Hello...",counter)
    counter++;
    debugger;
    hello(limit);
}

hello(10);
