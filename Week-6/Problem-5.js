// Pair difference
const difference = (arr,diff) =>{
    for(let a of arr){
        if(arr.includes(diff+a)){
            return 1;
        }
    }
    return 0
}

console.log(difference([1,2,3,4],2))