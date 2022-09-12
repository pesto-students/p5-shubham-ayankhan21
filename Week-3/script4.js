// function createStack() {
//     const items = [];
//     function main(item){
//         function push(item) {
//             items.push(item);
//         }
//         function pop() {
//             return console.log(items.pop());
//         }
//     };
// }
// const stack=createStack();
// stack.push(10);
// stack.push(5);
// stack.pop();//=> 5
// // console.log(stack.items[10,50,40]);

// console.log(stack.items = [10,100,1000]);// => undefined



var items = []
function createStack() {
    return{
        push:function(item){
            items.push(item);
        },
        pop:function(){
            items.pop()
        }
    }
}
const stack=createStack();
stack.push(10);
console.log(stack.push(5));
stack.pop();//=> 5
// console.log(stack.items[10,50,40]);

console.log(stack.items);// => undefined
console.log(stack.items); // => undefined
console.log(stack.items= [10,100,1000]);
console.log(stack.items);