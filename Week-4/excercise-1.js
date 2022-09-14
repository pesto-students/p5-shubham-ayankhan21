// random number generation
function getNumber(ms){
    const num = Math.floor(Math.random() * 100)
    return new Promise(function(resolve,reject){
        if(num%5===0){
            setTimeout(() => {
                reject(num);
            },ms);
        }else{
            setTimeout(() => {
                resolve(num);
            },ms);
        }
    })
}

getNumber(3000).then((result) => {
    console.log(`${result} is not divisible by 5`)
}).catch((err) => {
    console.log(`${err} is divisible by 5`)
}).finally(() =>{
    console.log("done")
})
