
function getPatternedString(str) {

    let result = "";

    for (let i  = 0; i < str.length; i++) {
        let char = str[i]    ;
        let repearchar = char.repeat(i+1)

        result += repearchar + "-" ;        
    }
    result = result.slice(0,-1)

    return result ; 
}

console.log(getPatternedString("str"))
console.log(getPatternedString("asda"))