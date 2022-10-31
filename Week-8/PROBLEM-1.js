// MAXIMUM DEPTH OF BINARY TREE
class node{
    constructor(value){
        this.data = value
        this.left = null
        this.right = null
    }
}
function maxDepth(node){
    if(node == null){
        return 0
    }
    else{
        let leftDep = maxDepth(node.left)
        let rightDep = maxDepth(node.right)

        if(leftDep > rightDep){
            return (leftDep+1)
        }
        else{
            return (rightDep+1)
        }
    }
}

// Initialising values
root = new node(20)
root.left = new node(30)
root.right = new node(40)
root.left.left = new node(50)
root.left.right = new node(60)
root.right.right = new node(70)
root.right.right.right = new node(70)

console.log(maxDepth(root))