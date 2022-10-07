class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    } 
}
class Linkedlist{
    constructor(data){     
        this.head = new Node(data);
        this.tail = this.head;
        this.size = 1;
    }
addAtEnd(data){
    let currentnode = this.head;
    while(currentnode==null){
        currentnode.next  = new Node(data);
        this.tail = currentnode.next;
        this.size++;
    }
    while(currentnode.next!=null){
        currentnode = currentnode.next;
    }
    let n1 = new Node(data);
    this.tail = n1;
    currentnode.next = n1;
    this.size++;
}
printLL(){
    let currentnode = this.head;
    while(currentnode!=null){
        console.log(currentnode.data);
        currentnode =currentnode.next;
    }
}


rotateLL(k){
    this.tail.next = this.head;
    let curr = this.head;
    for(let i =1; i<k; i++){
        this.tail = this.tail.next;
        curr = curr.next;
    }
    this.tail = this.tail.next;
    this.head = curr.next;
    curr.next =null;
}
}

const ll = new Linkedlist(1);
ll.addAtEnd(2);
ll.addAtEnd(3);
ll.addAtEnd(4);
ll.addAtEnd(5);
ll.addAtEnd(6);
ll.addAtEnd(7);
ll.printLL();
console.log("before rotation")
ll.rotateLL(4);
ll.printLL();
// console.log(ll.head.data);
// console.log(ll.tail.data);
