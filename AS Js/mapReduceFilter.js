// mapReduceFilter

const users = [
    {
        firstname: "loveleet",
        age: 21
    },
    {
        firstname: "mayank",
        age: 20
    },
    {
        firstname: "naveen",
        age: 45
    },
    {
        firstname: "naveen",
        age: 45
    }
]

// {21: 1, 20: 1, 45: 2}

const output = users.reduce((acc, value) => {

    if (acc[value.age]) {
        acc[value.age] = acc[value.age]++;
    }
    else {
        acc[value.age] = 1;
    }
    return acc;
}, {})

// console.log(output);

// firstname of users age less than 30

const lessThan30 = 
users.filter((user) => user.age < 30)
.map((user) => user.firstname);

// console.log(lessThan30);

//other way with reduce

const result = users.reduce((acc, value) => {
    if (value.age < 30) {
        acc.push(value.firstname);
    }
    return acc;
}, [])

console.log(result);