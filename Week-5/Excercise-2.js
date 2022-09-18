function vowelCount(str){
    const vowelMap = new Map()
    let vowel = 'aeiou'
    for(let el of str){
        let char = el.toLowerCase();
        if(vowel.includes(char)){
            if(vowelMap.has(char.charCodeAt())){
                vowelMap.set(char.charCodeAt(),vowelMap.get(char.charCodeAt()) + 1);
            }
            else{
                vowelMap.set((char.charCodeAt()),1);
            }
        }
    }
    return vowelMap;
}
console.log(vowelCount("AaEeIiOoUu"))