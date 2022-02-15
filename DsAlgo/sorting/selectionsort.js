// selection sort
// [0,3,1,9,4,8,2]

function sort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;

        for (let j = i+1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min=j;
            }
        }

        if (i !== min) {
            [ array[i], array[min] ] = [ array[min], array[i] ]
        }
    }

    return array;
}

const result = sort([0,3,1,9,4,8,2]);
console.log(result);