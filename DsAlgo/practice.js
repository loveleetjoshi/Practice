
let a = [
    {val: 1},
    {val: 2},
    {val: 3},
    {val: 4},
];

let sum = a.reduce((acc, value)=>{
    console.log("hii",acc,value.val);
    return acc + value.val;
},0)

console.log(sum);
