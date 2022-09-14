// reducer function
function sum(...args){
    nums = [...args]
    let total = nums.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });
    console.log(total)
}

// Creating a memoize function 
// create an empty object to add arguements
// Check if those arguements have been used already if yes show result or else
// Store in object
function memoize(fn){
    const cache = {};
    return function(...args){
        args.sort();
        console.log(args)
        if(cache[args]){
            console.log("Already in cache")
            return cache[args]
        }else{
            const result = fn(...args)
            console.log("Added to cache")
            cache[args] = result;
            return result;
        }
    };
};


//Creating a time function to check the time used for each function execution
function time(fn){
    console.time();
    fn();
    console.timeEnd();
}

const memoizeAdd = new memoize(sum);


time(() => memoizeAdd(45,34,23,56,56))
time(() => memoizeAdd(23,34,45,56,56))
time(() => memoizeAdd(300,400,450,560,560))
time(() => memoizeAdd(300,400,450,560,560))

