// alternativeSorting

let arr = [1,5,9,2,6,2,0,1,7,4,6,4,9,3,5];

// forming a frequency array
function countingSort(arr) {

    const max = Math.max(...arr);
    const frequency_arr = new Array(max+1).fill(0);
    
    arr.map((value) => {
        frequency_arr[value]++;    
    })
    
    return frequency_arr;
}

function sorting(arr) {

    let frequency_arr = countingSort(arr);
    const sorted_arr = [];

    frequency_arr.map((value,index) => {
        let count = value;

        for (let i = 0; i < count; i++) {
            sorted_arr.push(index);
        }
    })

    return sorted_arr;
}

const result = sorting(arr);
console.log(result);
