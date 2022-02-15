const arr = [1,2,3,4];

const set = new Set(arr);

// Weak sets
const arr2 = [{a:1},{b:2}];

const ws = new WeakSet(arr2);

// console.log(ws);

// weak set application
const myWeakSet = new WeakSet();
class myClass {
    constructor(){
        myWeakSet.add(this);
    }

    get method() {
        
        if (!myWeakSet.has(this)) {
            throw new Error('error...');
        }
        
        return 'method called';
    }
}

// let obj = new myClass();
// console.log(obj.method);
const result = myClass.method;
console.log(result);