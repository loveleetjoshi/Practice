// Checking square in another array
// array1= [1,2,3,4] , array2= [1,16,9,4]
// array1= [1,2,2,4] , array2= [1,4,9,4]

// Conditions 
// map1={1:1,2:2,4:1}
// map1={1:1,4:2,16:1}
// keys of map2 is square of keys of map1 with equal corresponding values

function checkSquare(array1, array2) {
    let map1={}; 
    let map2={};
    
    for (item of array1) {
        map1[item]=( map1[item] || 0 ) + 1;
    }

    for (item of array2) {
        map2[item]=( map2[item] || 0 ) + 1;
    }
    // console.log("map1",map1)
    // console.log("map2",map2)

    for (const key in map1) {
        // console.log("key",key)
        if (!map2[key * key]) {    // map1 & map2 keys compare in terms of square
            return false;
        }
        if (map1[key] !== map2[key * key]) {  // value compare
            return false;
        }
    }
return true;
}

const result = checkSquare([1,2,3,4],[1,9,16,4])
console.log(result);

// time complexity o(n)