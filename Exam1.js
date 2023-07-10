function RemoveMark(input) {

    let output = input.replace("!","") 
    return output; 
}

console.log(RemoveMark("H!"));
console.log(RemoveMark("H!!!!!"));
console.log(RemoveMark("H"));