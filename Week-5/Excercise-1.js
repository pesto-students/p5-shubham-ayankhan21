//Async await function
async function task1(){
   setTimeout(()=>{
       console.log("task 1 done")
   },5000)
}
async function task2(){
   setTimeout(()=>{
       console.log("task 2 done")
   },3000)
}
async function task3(){
   setTimeout(()=>{
       console.log("task 3 done")
   },1000)
}
async function testFunction(a,b){
     await task1();
     await task2();
     await task3();
 }
//  testFunction();
//  console.log('out of box')


 
// GENERATOR FUNCTION
 
 function* generator(){
    yield task1();
    yield task2();
    yield task3();
 }
 
 const test = generator();
 console.log("Generator")
 test.next();
 test.next();
 test.next();
 