// diff of sum of digonals of 2D array

function diagonalDifference(arr) {
    // Write your code here
    let primaryD = 0;
    let secondaryD = 0;
    
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i === j){
                primaryD += arr[i][j];
            }
            if(i+j === arr.length-1){
                secondaryD += arr[i][j];
            }
        }
    }
    console.log(Math.abs(primaryD - secondaryD))
    // return Math.abs(primaryD - secondaryD)
}

let arr= [[11,2,4],[4,5,6],[10,8,-12]]

diagonalDifference(arr);

