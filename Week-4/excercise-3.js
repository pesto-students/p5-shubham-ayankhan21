// Fibonacci series using iterators

const Fib = (n) =>({
    [Symbol.iterator]: ()=> {
    let i = 1; 
    let old = 0, next = 0;
    return {
      next:() =>{
        if(i++ <=n){
          [old,next] = [next,(old+next) || 1]; 
          console.log(old);
          return { value: old , done:false}
        }
        else{
          return { done : true}
        }
      }
    }
  }
});

console.log(...Fib(9));


