// Parenthesis checker
function parenthesisChecker(s){
    let stck = [];
    let map = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }
    for(let i = 0;i<s.length;i++){
        if(s[i]==="(" || s[i]=== "[" || s[i]==="{")
        {
            stck.push(s[i])
        }else if(stck[stck.length-1] === map[s[i]]){
            stck.pop()
        }
        else return false
    }
    if(stck.length){
        return false
    }else return true
}

console.log(parenthesisChecker("(()}"))