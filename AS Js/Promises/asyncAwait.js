// without async await
// console.log('person 1: shows ticket');
// console.log('person 2: shows ticket');

// const wifeBringingTicks = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('wife: I have tickets');
//     }, 3000);
// });


// const getPopcorn = wifeBringingTicks.then((res) => {
//     console.log(res);
//     console.log('husband: lets go in');
//     console.log('wife: no I am hungry need popcorn');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("husband: got popcorn , Let's go now");
//         })
//     }, 3000);
// })

// const getButter = getPopcorn.then((res) => {
//     console.log(res);
//     console.log('wife: I need butter on my popcorn');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('husband: I have butter');
//         }, 3000);
//     });
// })

// getButter.then((res) => {
//     console.log(res);
//     console.log("wife: thnx, let's go now, we are already late");
//     console.log('person 3: shows ticket');
// })

// console.log('person 4: shows ticket');
// console.log('person 5: shows ticket');





// with asyc await
console.log('person 1: shows ticket');
console.log('person 2: shows ticket');

const preMovie = async () => {

    debugger;
    const wifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('wife: I have tickets');
        }, 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("husband: got popcorn , Let's go now");
        }, 3000);
    })

    const getButter = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('husband: I have butter');
        }, 3000);
    })

    const getCoke = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('wife: I have coke');
        }, 3000);
    })

    const ticket = await wifeBringingTicks;

    console.log(ticket);
    console.log('husband: lets go in');
    console.log('wife: no I am hungry need popcorn');

    const popcorn = await getPopcorn;

    console.log(popcorn);
    console.log('wife: I need butter on my popcorn');

    const [butter, coke] = await Promise.all([getButter, getCoke]);

    console.log(butter, coke);
    console.log("wife: thnx, let's go now, we are already late");

    return 'person 3: shows ticket';
}

preMovie().then((res) => console.log(res));

console.log('person 4: shows ticket');
console.log('person 5: shows ticket');