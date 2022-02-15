

const arr = [8,2,4,1,3];   

//steps
//1- Consider 2nd element , arr[1] - Start yhi se hoga
//2- arr[j]>curr - swaping

const sort = (arr) => {

    for (let i = 1; i < arr.length; i++) {

        let curr = arr[i];
        let j=i-1;
        
        while (j>=0 && arr[j]>curr) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = curr;
    }

    return arr;
}

const result = sort(arr);
console.log(result);