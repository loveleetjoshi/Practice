// Checking square in another array
// array1= [1,2,3,4] , array2= [1,16,9,4]

// Conditions 
// if (array[i] * array[i] === array[j])

function checkSquare(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        let isSquare= false;
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] * array1[i] === array2[j]) {
                isSquare = true;
            }
            if (j === array2.length - 1) {
                if (!isSquare) {
                    return false;
                }
            }
        }
    }
    return true;
}

const result = checkSquare([1,2,3,4], [1,16,9,4])
console.log(result,"Hii");

//time complexity O(n^2) 
