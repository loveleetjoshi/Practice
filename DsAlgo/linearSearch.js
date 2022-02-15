// Linear Search Algo
const users = [
    {
        username: "loveleet",
        email: "loveleetjoshi@gmail.com"
    },
    {
        username: "abc",
        email: "abc@gmail.com"
    },
    {
        username: "xyz",
        email: "xyz@gmail.com"
    }
]

function isUserExist(array, val) {
    for (const item of array) {
        if(item.username === val){
            return true;
        }
    }
    return false;
}

const result = isUserExist(users, "alfj")
console.log(result);

// time complexity linear --> O(n)