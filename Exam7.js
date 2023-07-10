function sortEvenNumbers (arr) {

    const evenNumbers = arr.filter(num=> num%2 === 0) ;
    const oddNumbers = arr.filter (num=> num%2 !== 0 ) ; 

    evenNumbers.sort((a,b) => (a-b));

    const result = [];
    let evenIndex = 0 ;
    let oddIndex = 0 ; 

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2===0) {
            result.push(evenNumbers[evenIndex])
            evenIndex++ ;
        }
        else {
            result.push(oddNumbers[oddIndex])
            oddIndex++;
        }
        
    }

        return result ;

}

console.log(sortEvenNumbers([7, 1])); 
console.log(sortEvenNumbers([5, 8, 6, 3, 4])); 
console.log(sortEvenNumbers([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));