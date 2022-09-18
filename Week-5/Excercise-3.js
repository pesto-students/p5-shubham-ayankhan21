function hasDupilcate(arr){
    let set = new Set();
    for (let el of arr){
        if(set.has(el)){
            return true;
        }else{
            set.add(el);
        }
    }
    return false;
}
console.log(hasDupilcate([2,2,2,2,2,3]))