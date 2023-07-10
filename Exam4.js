//item4

function getMiddleCharacters(str) {

    const words = str.split(" "); 
    const middlewordindex = Math.floor(words.length/2) ; //find middle of words  
    const middleword = words[middlewordindex];
    
    if (words.length===1 || words.length %2 ===0) {
        return middleword.slice(1,-1) ;
    }

    else {
        return middleword.charAt(Math.floor(middleword.length/2)) ;
    }
}

console.log(getMiddleCharacters("ass"))