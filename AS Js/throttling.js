let i = 0;

const expensiveFunction = () => {
    console.log('resizing...',i++);
}
// window.addEventListener('resize', expensiveFunction);



// OPTIMIZATION
// better expensive function to make a delay after first call

const throttle = (func, delay) => {
    let flag = true;
    return function () {
        if (flag) {
            func();
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    }
} 

const betterExpensiveFunction = throttle(expensiveFunction, 1000);

document.querySelector('#btn')
.addEventListener('click', betterExpensiveFunction);

// window.addEventListener('resize', betterExpensiveFunction);
