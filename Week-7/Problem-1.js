// REVERSE A GIVEN LINKED LIST
class linkedList{
    constructor(value,next){
        this.value = value;
        this.next = next;
    }
}

const n1 = new linkedList(1,null)
const n2 = new linkedList(2,null)
n1.next = n2
const n3 = new linkedList(3,null)
const n4 = new linkedList(4,null)
n2.next = n3
const n5 = new linkedList(5,null)
n3.next = n4
const n6 = new linkedList(6,null)
n4.next = n5
const n7 = new linkedList(7,null)
n5.next = n6
const n8 = new linkedList(8,null)
n6.next = n7
const n9 = new linkedList(9,null)
n7.next = n8
n8.next = n9

function reversingLinkedList(n1){
    let prev = null;
    let nextel = null;
    while(n1!=null){
        // console.log(n1)
        nextel = n1.next;
        // console.log("nextel",nextel)
        n1.next = prev;
        // console.log("prev",prev)
        prev = n1;
        n1 = nextel
    }
    while(prev!=null){
        console.log(prev.value)
        prev = prev.next
    }
}
console.log("out of loop")
console.log(reversingLinkedList(n1))