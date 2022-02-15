// Helper Recursive Function
// [1,2,3,4,5,6,7,8,9,10]
//[1,3,5,7,9] -- expected output

function findOdd(array) {
    let result = [];

    function helperRecursive(arr) {
        if (arr.length === 0) {
            return;
        }
        if (arr[0] % 2 !== 0) {
            result.push(arr[0]);
        }
        helperRecursive(arr.slice(1));
    }
    helperRecursive(array);

    return result;
}

const res = findOdd([1,2,3,4,5,6,7,8,9,10]);
console.log(res);