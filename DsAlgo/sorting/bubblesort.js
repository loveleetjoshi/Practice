// Bubble Sort (sorting....)
// A sorting algo where the largest element bubble up at the end/top.

let iterations = 0;

function bubbleSort(array) {

    for (let i = array.length; i >0; i--) {
        let isSwaped;
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]]
                isSwaped = true;
            }
        }
        iterations++;
        if (!isSwaped) {
            return array;
        }
    }

    return array;
}

const result = bubbleSort([2,4,9,1,4,7,6,3]);
console.log(result, iterations);