// Promises 

// task -1
let cleanRoom = function () {
    return new Promise((resolve, reject) => {
        
        // cleaning room

        const isclean = true;
        if (isclean) {
            resolve('room cleaned');    
        } else {
            reject('not cleaned');
        }
    });
}

// task -2
const removeGarbage = (message = '') => new Promise((resolve, reject) => {
    
    // removing garbage

    const isremoved = false;
    if (isremoved) {
        resolve(message + ' removed garbage');
    } else {
        reject(message + ' garbage is still there');
    }
});

// task -3
const winIceCream = (message = '') => new Promise((resolve, reject) => {
    
    resolve(message + ' got ice cream');
});




// Consuming promises

// cleanRoom().then((res) => {
//     return removeGarbage(res);
// }).then((res) => {
//     return winIceCream(res);
// }).then((res) => {
//     console.log('finished ' + res);
// }).catch((err) => {
//     throw new Error(err);
// })




// if these 3 promises are not dependent on each other
// we can resolve all of them 

Promise.allSettled([cleanRoom(), removeGarbage(), winIceCream()])
.then(res => {
    console.log(res);
}).catch((err) => {
    throw new Error(err);
})




// if we have 3 servers and we want to only finish one of them
// then show result

// Promise.race([cleanRoom(), removeGarbage(), winIceCream()])
// .then(res => {
//     console.log(res);
// }).catch((err) => {
//     throw new Error(err);
// })


