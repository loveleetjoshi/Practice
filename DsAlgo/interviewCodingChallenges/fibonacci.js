// FEBONACCI SERIES
// 0,1,1,2,3,5,8,13,21,34.....

// 0 AND 1 fixed
// next no. = sum of previous two no.'s

//Generation of fibonacci series till required no.
function fibonacciSeries(n) {
    let arr = [0,1];
    let i =1;
    let temp = arr[i-1] + arr[i];

    while (temp < n) {

        arr.push(temp);
        i++;
        
        temp = arr[i-1] + arr[i];
    }

    return arr;
}

const result = fibonacciSeries(100);
console.log(result);