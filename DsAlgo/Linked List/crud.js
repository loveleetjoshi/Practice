// Linked List
// collection of nodes 
// nodes have two parts:- head(storing value) and tail(storing address of next node)

class Node {

    constructor (value, next=null){
        this.value = value;
        this.next = next;
    }
}

class List {

    constructor (){
        this.head = new Node('head');
    }

    find(value) {
        let tmpNode = this.head;

        while (tmpNode.value !== value) {
            tmpNode = tmpNode.next;
        }

        return tmpNode;
    }

    insert(where, value){
        let whereToInsert = this.find(where);

        let newNode = new Node(value, whereToInsert.next);

        whereToInsert.next = newNode;
    }

    printAll() {
        let tmpNode = this.head;

        while (tmpNode !== null) {
            console.log(tmpNode.value);
            tmpNode = tmpNode.next;
        }
    }

    findPrevious(value) {
        let tmpNode = this.head;

        while ((tmpNode.next.value !== value) && (tmpNode.next.value !== null)) {
            tmpNode = tmpNode.next;
        }

        return tmpNode;
    }

    remove(value){
        let prevNode = this.findPrevious(value);

        if (prevNode.next !== null) {
            prevNode.next = prevNode.next.next;
        }
    }

    update(oldValue, newValue) {
        let tmpNode = this.find()
    }
}

let newList = new List();

newList.insert('head',1);
newList.insert(1,5);
newList.insert(5,100);
newList.insert('head',10);
newList.remove(10);

console.log(newList);
console.log(newList.printAll());