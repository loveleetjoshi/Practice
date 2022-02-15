// callback function - when a function is passed into another function 
// it helps to perform asychronus tasks in JS

//example 1
function x(y) {
    console.log('x..')
    y();
}
x(function y() {
    console.log('y..')
})

//example 2
setTimeout(() => {
    console.log('timer..')
}, 5000);

// example 3 --> event listners + closure (in event listener tab console)
let button = document.getElementById('btn')

function attachEventListeners() {
    let count = 0;
    button.addEventListener('click', function clicked() {
        console.log('clicked',++count);
    })
}

attachEventListeners();

// Garbage Collection & removeEventListener
// we have to remove event listeners in a large program so that memory consumed by closures should be free up after removing event listners & 
// all closures will be garbage collected