// DETECT LOOP IN LIST

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
n4.next = n5
n5.next = n3


function detectLoop(ll){
    let head = ll
    let map = new Map()
    while(head!=null){
        if(map.has(head.value)){
            return true;
        }
        else{
            map.set(head.value,"some")
            head = head.next
        }
    }
    return false
}
console.log(detectLoop(n1))