// VALIDATE A BINARY TREE
class node{
    constructor(data){
        this.val = data
        this.left = null
        this.right = null
    }
}
function findIfValid(root,min=null,max=null){
    if(!root) return true;
    if(max!==null && root.val>=max) return false;
    if(min!==null && root.val<=min) return false;
  return findIfValid(root.left,min,root.val) && findIfValid(root.right,root.val,max);
}
var isValidBST = function(root) {  
return findIfValid(root);
};

let root = new node(20)
root.left = new node(10)
root.right = new node(30)
root.left.right = new node(70)
console.log(isValidBST(root))