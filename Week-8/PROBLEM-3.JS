//BINARY TREE LEVEL ORDER TRAVERSAL

class node{
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

function levelOrder(root){
    let arr = []
    var queue = [];
        queue.push(root);
        while (queue.length != 0) {
            let tempNode = queue.shift();
            arr.push(tempNode.data)
            if (tempNode.left != null) {
                queue.push(tempNode.left);
            }
            if (tempNode.right != null) {
                queue.push(tempNode.right);
            }
        }
        return console.log(arr)
}
let root = new node(17);
root.left = new node(32);
root.right = new node(38);
root.left.left = new node(24);
root.left.right = new node(75);

levelOrder(root)