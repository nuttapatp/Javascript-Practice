

function CalculationNumber(input) {
    let sum = 0
    for (let i = 0 ; i <input.length;i++) {

        const numbers = Number(input[i]);

        const power = i+1;

        const incresenumber = Math.pow(numbers,power)

        sum +=incresenumber;

    }

    return sum;
        
}

console.log(CalculationNumber("89"))